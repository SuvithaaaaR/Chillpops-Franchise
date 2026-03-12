# Profit Analysis Feature - CSV-Based Analytics

## 🎯 Overview
A comprehensive Profit Analysis dashboard has been integrated into your Chillpops Franchise website. This feature analyzes sales and profit data from a CSV dataset and displays interactive charts, trends, and analytics.

## ✨ Features Implemented

### 1. **New Profit Analysis Page**
- Accessible at `/profit-analysis`
- Added to the main navigation bar alongside existing pages
- Fully responsive design matching your website's style

### 2. **CSV Data Processing**
- Reads data from `public/data/sales-data.csv`
- Dynamic parsing using PapaParseprocesses data in real-time
- Sample dataset includes 120 sales records across 12 months

### 3. **Interactive Dashboard Components**

#### Key Statistics Cards
- **Total Revenue**: ₹ from all sales
- **Total Profit**: with profit margin percentage
- **Units Sold**: Total quantity across all products
- **Product Count**: Number of products in catalog

#### Visualizations
1. **Monthly Revenue & Profit Trends** - Area chart showing revenue and profit over time
2. **Monthly Sales Volume** - Bar chart displaying units sold per month
3. **Top Products by Profit** - Horizontal bar chart of best-performing products
4. **Profit by Category** - Pie chart showing profit distribution across categories
5. **Performance by Location** - Bar chart comparing revenue and profit by city
6. **Detailed Sales Table** - Comprehensive data table with all sales records

### 4. **Data Export Functionality**
- Export all data as CSV file
- Refresh data from source file
- Download reports for offline analysis

## 📊 CSV Dataset Structure

The provided sample dataset includes:
- **Columns**: Month, Product Name, Quantity Sold, Revenue, Cost, Profit, Category, Location
- **Products**: 10 different popsicle flavors
- **Categories**: Classic, Premium, Specialty, Fruit
- **Locations**: Trichy, Karur, Bangalore, Mumbai, Coimbatore, Namakkal, Ongole, Tenali
- **Time Period**: 12 months (Jan - Dec)

### Sample Data Format:
```csv
Month,Product Name,Quantity Sold,Revenue,Cost,Profit,Category,Location
Jan,Classic Vanilla Popsicle,450,67500,40500,27000,Classic,Trichy
Jan,Strawberry Delight,380,57000,34200,22800,Classic,Trichy
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - `papaparse` (^5.4.1) - CSV parsing library
   - `recharts` (^2.10.3) - Chart visualization library

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access the Dashboard**
   - Navigate to `http://localhost:5173/profit-analysis`
   - Or click "Profit Analysis" in the navigation menu

## 📁 Files Added/Modified

### New Files Created:
1. **`src/pages/ProfitAnalysis.jsx`** - Main dashboard component
2. **`public/data/sales-data.csv`** - Sample sales dataset with 120 records

### Modified Files:
1. **`src/App.jsx`** - Added route for `/profit-analysis`
2. **`src/components/Navbar.jsx`** - Added "Profit Analysis" link to navigation
3. **`package.json`** - Added papaparse and recharts dependencies

## 🔧 Customizing Your Data

### Adding New Data
1. Open `public/data/sales-data.csv`
2. Add new rows following the same format:
   ```
   Month,Product Name,Quantity Sold,Revenue,Cost,Profit,Category,Location
   ```
3. Save the file
4. Refresh the dashboard - changes appear immediately!

### Using Your Own CSV File
1. Replace `public/data/sales-data.csv` with your file
2. Ensure column names match exactly:
   - Month
   - Product Name
   - Quantity Sold
   - Revenue
   - Cost
   - Profit
   - Category
   - Location

3. If using different column names, update the parsing logic in `ProfitAnalysis.jsx`

## 📈 Usage Guide

### Viewing Analytics
- **Homepage**: Navigate to the Profit Analysis page from the menu
- **Overview**: View key metrics in the stat cards at the top
- **Trends**: Scroll down to see monthly trends and patterns
- **Products**: Analyze which products generate most profit
- **Locations**: Compare performance across different cities

### Exporting Data
- Click "Export CSV" button to download current dataset
- File will be saved as `profit-analysis-YYYY-MM-DD.csv`

### Refreshing Data
- Click "Refresh Data" to reload from the CSV file
- Useful after updating the source file

## 🎨 Design Features

- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Color-Coded Charts**: Visual distinction for different metrics
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading States**: Spinner displayed while data loads
- **Error Handling**: Graceful error messages if file can't be loaded

## 🔍 Technical Details

### Data Flow
1. Component mounts → triggers CSV load
2. PapaParse fetches and parses CSV file
3. Data processed into different aggregations:
   - Monthly summaries
   - Product totals
   - Category groupings
   - Location comparisons
4. State updated → charts re-render
5. Interactive tooltips show detailed values

### Chart Library (Recharts)
- **AreaChart**: Monthly trends with filled areas
- **BarChart**: Comparative data (products, locations, volumes)
- **PieChart**: Category distribution with percentages
- **Responsive Containers**: Charts adapt to screen size

### Performance
- CSV parsed once on mount
- Efficient data aggregation using JavaScript reduce
- Charts only re-render when data changes
- Lazy loading of visualization components

## 🛠 Troubleshooting

### CSV File Not Loading
- Check that `public/data/sales-data.csv` exists
- Verify file path is correct
- Ensure CSV is properly formatted (no empty lines at end)
- Check browser console for specific errors

### Charts Not Displaying
- Ensure recharts is installed: `npm list recharts`
- Clear browser cache and refresh
- Check for JavaScript errors in console

### Data Not Updating
- Click "Refresh Data" button
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Verify CSV file changes were saved

## ⚠️ Important Notes

### Disk Space Issue
If you encounter "ENOSPC: no space left on device" during `npm install`:
1. Free up disk space on your C: drive
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` folder and reinstall
4. Consider moving project to a drive with more space

### Existing Features Preserved
- ✅ All existing pages remain unchanged (Home, About, Franchise Model, Locations, Apply, Contact)
- ✅ Original navigation structure maintained
- ✅ Current design and styling preserved
- ✅ No modifications to existing functionality

## 📝 Future Enhancements

Potential additions:
- Date range filtering
- Export reports as PDF
- Multiple CSV file support
- Real-time CSV upload functionality
- Advanced filtering by category/location
- Forecasting and predictions
- Comparison between time periods

## 🎉 Summary

Your franchise website now includes a powerful CSV-based Profit Analysis dashboard that:
- ✅ Processes sales data dynamically
- ✅ Displays interactive charts and graphs
- ✅ Provides comprehensive business insights
- ✅ Integrates seamlessly with existing navigation
- ✅ Maintains all current features and design
- ✅ Supports easy data updates via CSV

Simply install the dependencies and navigate to the Profit Analysis page to start exploring your sales data!

---

**Last Updated**: March 11, 2026  
**Version**: 1.0.0
