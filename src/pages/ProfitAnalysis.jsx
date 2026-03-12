import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import {
  FaChartLine,
  FaMoneyBillWave,
  FaShoppingCart,
  FaBoxes,
  FaFileDownload,
  FaSync,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ProfitAnalysis = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalProfit: 0,
    totalQuantity: 0,
    avgProfitMargin: 0
  });
  const [monthlyData, setMonthlyData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const COLORS = ['#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#3B82F6', '#EF4444', '#14B8A6', '#F97316'];

  // Load and parse CSV data
  useEffect(() => {
    loadCSVData();
  }, []);

  const loadCSVData = () => {
    setLoading(true);
    setError(null);

    const csvPath = `${import.meta.env.BASE_URL}data/sales-data.csv`;

    Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          setError('Error parsing CSV file');
          console.error('CSV Parse Errors:', results.errors);
          setLoading(false);
          return;
        }

        const data = results.data;
        setSalesData(data);
        processData(data);
        setLoading(false);
      },
      error: (error) => {
        setError('Failed to load CSV file: ' + error.message);
        console.error('CSV Load Error:', error);
        setLoading(false);
      }
    });
  };

  const processData = (data) => {
    // Calculate overall statistics
    const totalRevenue = data.reduce((sum, row) => sum + (row.Revenue || 0), 0);
    const totalProfit = data.reduce((sum, row) => sum + (row.Profit || 0), 0);
    const totalQuantity = data.reduce((sum, row) => sum + (row['Quantity Sold'] || 0), 0);
    const avgProfitMargin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(2) : 0;

    setStats({
      totalRevenue,
      totalProfit,
      totalQuantity,
      avgProfitMargin
    });

    // Group by month for trends
    const monthlyMap = {};
    data.forEach(row => {
      const month = row.Month;
      if (!monthlyMap[month]) {
        monthlyMap[month] = {
          month,
          revenue: 0,
          profit: 0,
          quantity: 0,
          cost: 0
        };
      }
      monthlyMap[month].revenue += row.Revenue || 0;
      monthlyMap[month].profit += row.Profit || 0;
      monthlyMap[month].quantity += row['Quantity Sold'] || 0;
      monthlyMap[month].cost += row.Cost || 0;
    });

    const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyArray = monthOrder
      .filter(month => monthlyMap[month])
      .map(month => monthlyMap[month]);
    
    setMonthlyData(monthlyArray);

    // Group by product
    const productMap = {};
    data.forEach(row => {
      const product = row['Product Name'];
      if (!productMap[product]) {
        productMap[product] = {
          name: product,
          revenue: 0,
          profit: 0,
          quantity: 0
        };
      }
      productMap[product].revenue += row.Revenue || 0;
      productMap[product].profit += row.Profit || 0;
      productMap[product].quantity += row['Quantity Sold'] || 0;
    });

    const productArray = Object.values(productMap)
      .sort((a, b) => b.profit - a.profit)
      .slice(0, 10);
    
    setProductData(productArray);

    // Group by category
    const categoryMap = {};
    data.forEach(row => {
      const category = row.Category;
      if (!categoryMap[category]) {
        categoryMap[category] = {
          name: category,
          value: 0
        };
      }
      categoryMap[category].value += row.Profit || 0;
    });

    setCategoryData(Object.values(categoryMap));

    // Group by location
    const locationMap = {};
    data.forEach(row => {
      const location = row.Location;
      if (!locationMap[location]) {
        locationMap[location] = {
          name: location,
          revenue: 0,
          profit: 0
        };
      }
      locationMap[location].revenue += row.Revenue || 0;
      locationMap[location].profit += row.Profit || 0;
    });

    const locationArray = Object.values(locationMap)
      .sort((a, b) => b.profit - a.profit);
    
    setLocationData(locationArray);
  };

  const handleExportData = () => {
    const csv = Papa.unparse(salesData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `profit-analysis-${new Date().toISOString().split('T')[0]}.csv`);
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
        <div className="text-center">
          <FaSync className="text-6xl text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-xl text-gray-700">Loading sales data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={loadCSVData}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Profit Analysis Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive insights from {salesData.length} sales records
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleExportData}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md"
            >
              <FaFileDownload /> Export CSV
            </button>
            <button
              onClick={loadCSVData}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-md"
            >
              <FaSync /> Refresh Data
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">Total Revenue</h3>
              <FaMoneyBillWave className="text-3xl opacity-80" />
            </div>
            <p className="text-3xl font-bold mb-2">₹{stats.totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-purple-200">From all sales</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">Total Profit</h3>
              <FaChartLine className="text-3xl opacity-80" />
            </div>
            <p className="text-3xl font-bold mb-2">₹{stats.totalProfit.toLocaleString()}</p>
            <p className="text-sm text-green-200">{stats.avgProfitMargin}% margin</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">Units Sold</h3>
              <FaShoppingCart className="text-3xl opacity-80" />
            </div>
            <p className="text-3xl font-bold mb-2">{stats.totalQuantity.toLocaleString()}</p>
            <p className="text-sm text-blue-200">Total quantity</p>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">Products</h3>
              <FaBoxes className="text-3xl opacity-80" />
            </div>
            <p className="text-3xl font-bold mb-2">{productData.length}</p>
            <p className="text-sm text-pink-200">In catalog</p>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Monthly Revenue & Profit Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="profit" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Monthly Sales Volume</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#3B82F6" name="Units Sold" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Performance & Category Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Top Products by Profit</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={productData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Bar dataKey="profit" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Profit by Category</h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Location Performance */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <FaMapMarkerAlt className="text-purple-600" />
            Performance by Location
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={locationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="revenue" fill="#8B5CF6" name="Revenue" />
              <Bar dataKey="profit" fill="#10B981" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Data Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Detailed Sales Records</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-100">
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Month</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Product</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Quantity</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Revenue</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Cost</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Profit</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {salesData.slice(0, 20).map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{row.Month}</td>
                    <td className="px-4 py-3 text-gray-700">{row['Product Name']}</td>
                    <td className="px-4 py-3 text-gray-700">{row['Quantity Sold']}</td>
                    <td className="px-4 py-3 text-gray-700">₹{row.Revenue?.toLocaleString()}</td>
                    <td className="px-4 py-3 text-red-600">₹{row.Cost?.toLocaleString()}</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">₹{row.Profit?.toLocaleString()}</td>
                    <td className="px-4 py-3 text-gray-700">{row.Location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {salesData.length > 20 && (
              <p className="text-center text-gray-600 mt-4">
                Showing 20 of {salesData.length} records. Export for full data.
              </p>
            )}
          </div>
        </div>

        {/* Info Note */}
        {/*<div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">📊 CSV-Based Analytics</h4>
          <p className="text-blue-800">
            This dashboard dynamically processes sales data from a CSV file located at{' '}
            <code className="bg-blue-100 px-2 py-1 rounded">public/data/sales-data.csv</code>.
            All charts and statistics update automatically when the CSV file is modified.
            You can export the current data or refresh to reload from the source file.
          </p>
        </div>*/}
      </div>
    </div>
  );
};

export default ProfitAnalysis;
