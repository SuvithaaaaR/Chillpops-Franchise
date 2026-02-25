import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaChartLine, FaStore } from 'react-icons/fa';

const FranchiseModel = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary to-pink-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Franchise Model</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transparent, profitable, and well-supported
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <FaMoneyBillWave className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Total Investment</h3>
              <p className="text-3xl font-bold text-primary mb-2">₹5-8 Lakhs</p>
              <p className="text-gray-600">All-inclusive</p>
            </div>

            <div className="card text-center">
              <FaStore className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Space Required</h3>
              <p className="text-3xl font-bold text-primary mb-2">200-400 sq ft</p>
              <p className="text-gray-600">Flexible formats</p>
            </div>

            <div className="card text-center">
              <FaChartLine className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Expected ROI</h3>
              <p className="text-3xl font-bold text-primary mb-2">40-50%</p>
              <p className="text-gray-600">Within 18-24 months</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/apply" className="btn-primary">
              Apply for Franchise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FranchiseModel;
