import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Locations = () => {
  const locations = [
    { city: 'Karur', outlets: 8 },
    { city: 'Bangalore', outlets: 12 },
    { city: 'Mumbai', outlets: 10 },
    { city: 'Coimbatore', outlets: 6 },
    { city: 'Trichy', outlets: 5 },
    { city: 'Namakkal', outlets: 4 },
    { city: 'Ongole', outlets: 3 },
    { city: 'Tenali', outlets: 2 },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary to-pink-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl opacity-90">50+ outlets across 8 cities</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="card text-center">
                <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {location.city}
                </h3>
                <p className="text-primary font-semibold">{location.outlets} Outlets</p>
              </div>
            ))}
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

export default Locations;
