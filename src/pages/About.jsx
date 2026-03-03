import { useState, useEffect } from "react";
import {
  FaStore,
  FaUsers,
  FaAward,
  FaHeart,
  FaLeaf,
  FaStar,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  const [counters, setCounters] = useState({
    outlets: 0,
    cities: 0,
    customers: 0,
    years: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { outlets: 50, cities: 8, customers: 100000, years: 4 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        outlets: Math.floor(targets.outlets * progress),
        cities: Math.floor(targets.cities * progress),
        customers: Math.floor(targets.customers * progress),
        years: Math.floor(targets.years * progress),
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Quality First",
      description:
        "Premium ingredients, naturally crafted ice cream that delights every customer",
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Natural Ingredients",
      description:
        "100% natural flavors with no artificial colors or preservatives",
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: "Innovation",
      description:
        "Constantly creating new flavors and experiences for our customers",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Partnership",
      description:
        "Building sustainable and profitable relationships with our franchisees",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      desc: "ChillPops was born with a vision to revolutionize frozen desserts",
    },
    {
      year: "2021",
      title: "Expansion",
      desc: "Opened 15 outlets across 3 cities",
    },
    { year: "2022", title: "Growth", desc: "Reached 30 outlets in 5 cities" },
    {
      year: "2023",
      title: "Recognition",
      desc: "Awarded 'Best Emerging Ice Cream Brand'",
    },
    {
      year: "2024",
      title: "Scale",
      desc: "50+ outlets across 8 cities, 100K+ happy customers",
    },
  ];

  return (
    <div className="pt-20">
      {/* Brand Image Section - Full Screen */}
      <section
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}about.png)`,
        }}
      ></section>

      {/* Stats Section - Continuous */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary to-pink-600 text-white">
              <FaStore className="text-5xl mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">{counters.outlets}+</div>
              <div className="text-lg opacity-90">Outlets</div>
            </div>
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
              <FaUsers className="text-5xl mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">{counters.cities}+</div>
              <div className="text-lg opacity-90">Cities</div>
            </div>
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500 to-pink-600 text-white">
              <FaAward className="text-5xl mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">
                {counters.customers.toLocaleString()}+
              </div>
              <div className="text-lg opacity-90">Customers</div>
            </div>
            <div className="card text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-teal-500 to-green-600 text-white">
              <FaChartLine className="text-5xl mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">{counters.years}+</div>
              <div className="text-lg opacity-90">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Continuous */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ChillPops began in 2020 with a simple yet powerful dream: to
                create a frozen dessert brand that combines{" "}
                <span className="text-primary font-semibold">
                  premium quality with affordable pricing
                </span>
                . We believed that everyone deserves to enjoy naturally crafted,
                delicious ice cream.
              </p>
              <p>
                What started as a single outlet in Karur has now blossomed into
                a{" "}
                <span className="text-primary font-semibold">
                  thriving network of 50+ outlets
                </span>{" "}
                across 8 major cities in India. Our journey has been fueled by
                our commitment to quality, innovation, and customer
                satisfaction.
              </p>
              <p>
                Today, ChillPops is more than just ice cream and popsicles –
                it's a
                <span className="text-primary font-semibold">
                  {" "}
                  lifestyle brand
                </span>{" "}
                that brings joy, refreshment, and memorable moments to families
                across India. Join us in our journey to spread happiness, one
                scoop at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Continuous */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group cursor-pointer"
              >
                <div className="text-primary mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Continuous */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-pink-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-full bg-gradient-to-b from-primary to-pink-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="card p-6 hover:shadow-xl transition-all duration-300 hover:translate-x-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Continuous */}
      <section className="py-16 bg-gradient-to-r from-primary via-pink-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the ChillPops Family
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Be part of India's fastest-growing frozen dessert franchise. Start
            your profitable business journey today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/apply"
              className="btn-secondary text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100"
            >
              Apply for Franchise
            </a>
            <a
              href="/franchise-model"
              className="btn-primary text-lg px-8 py-4 border-2 border-white hover:bg-white hover:text-primary"
            >
              View Investment Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
