import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaRocket,
  FaStore,
  FaUsers,
  FaAward,
  FaHeart,
  FaLeaf,
  FaHandshake,
  FaChartLine,
  FaMoneyBillWave,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaGlassCheers,
} from "react-icons/fa";

const Home = () => {
  const locations = [
    { city: "Trichy", outlets: 5, color: "from-pink-500 to-purple-600" },
    { city: "Karur", outlets: 8, color: "from-blue-500 to-cyan-600" },
    { city: "Bangalore", outlets: 12, color: "from-orange-500 to-red-600" },
    { city: "Mumbai", outlets: 10, color: "from-green-500 to-teal-600" },
    { city: "Coimbatore", outlets: 6, color: "from-indigo-500 to-purple-600" },
    { city: "Namakkal", outlets: 4, color: "from-yellow-500 to-orange-600" },
    { city: "Ongole", outlets: 3, color: "from-pink-600 to-rose-600" },
    { city: "Tenali", outlets: 2, color: "from-violet-500 to-fuchsia-600" },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [spaceScroll, setSpaceScroll] = useState(0);
  const [counters, setCounters] = useState({
    outlets: 0,
    cities: 0,
    customers: 0,
    years: 0,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investmentCapacity: "",
    message: "",
  });
  const parallaxRef = useRef(null);
  const spaceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const height = rect.height - window.innerHeight;
        const progress = Math.min(Math.max(scrolled / height, 0), 1);
        setScrollProgress(progress);
      }

      if (spaceRef.current) {
        const rect = spaceRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const height = rect.height;
        const progress = Math.min(Math.max(scrolled / height, 0), 1);
        setSpaceScroll(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        investmentCapacity: "",
        message: "",
      });
    }, 5000);
  };

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
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Background Image - Full Screen, No Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}homepage.png)`,
          }}
        ></div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <p className="text-sm font-semibold mb-2">Scroll Down</p>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* Location Marquee Ticker */}
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of locations */}
          <div className="flex">
            {locations.map((location, index) => (
              <div key={`set1-${index}`} className="marquee-item">
                <FaStar className="text-yellow-300" />
                <span>{location.city.toUpperCase()}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex">
            {locations.map((location, index) => (
              <div key={`set2-${index}`} className="marquee-item">
                <FaStar className="text-yellow-300" />
                <span>{location.city.toUpperCase()}</span>
              </div>
            ))}
          </div>
          {/* Third set for extra smoothness */}
          <div className="flex">
            {locations.map((location, index) => (
              <div key={`set3-${index}`} className="marquee-item">
                <FaStar className="text-yellow-300" />
                <span>{location.city.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <section
        id="about"
        className="relative py-20 overflow-visible"
        style={{
          backgroundColor: "#fcdce1",
          backgroundImage:
            'url("https://iriscafe.in/wp-content/uploads/2025/02/about-bg-image.png")',
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        {/* Decorative Strawberry Splash - Top Right */}
        <div
          className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 lg:w-96 xl:w-[500px] opacity-90 pointer-events-none"
          style={{
            zIndex: 1,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/stawberry-splash.png`}
            alt="Strawberry Splash"
            className="w-full h-auto"
          />
        </div>

        {/* Decorative Cookies - Bottom Left */}
        <div
          className="absolute bottom-8 left-0 w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 opacity-90 pointer-events-none"
          style={{
            zIndex: 1,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/cookies.png`}
            alt="Cookies"
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Section Title */}
              <div className="space-y-4 animate-fade-in-up">
                <p className="text-[#C9A581] text-base md:text-lg font-medium tracking-wider uppercase">
                  About Us
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#121D23] leading-tight">
                  <span className="block">Naturally Crafted</span>
                  <span className="block">Ice Cream</span>
                  <span className="block">Delight</span>
                </h2>
              </div>

              {/* Description */}
              <div
                className="space-y-4 text-base md:text-lg leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.1s", color: "#495057" }}
              >
                <p>
                  ChillPops is India's leading naturally crafted ice cream
                  brand, bringing joy and flavor to every scoop. Born in Karur
                  in 2020, we've grown to 50+ outlets across 8 major cities,
                  serving over 100,000 happy customers. Our ice creams are made
                  with premium natural ingredients, free from artificial flavors
                  and preservatives.
                </p>
                <p>
                  What sets us apart is our commitment to quality,
                  affordability, and innovation. From classic favorites to
                  exotic flavors, every ChillPops creation is a celebration of
                  taste. Whether it's a hot summer day or a sweet celebration,
                  ChillPops is your destination for naturally delicious frozen
                  treats.
                </p>
              </div>
            </div>

            {/* Right Image with Open Hours Overlay */}
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="relative overflow-hidden shadow-2xl text-center"
                style={{
                  borderRadius: "400px 400px 0px 0px",
                  height: "100%",
                  position: "relative",
                  transition:
                    "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}aboutimage.png`}
                  alt="ChillPops Storefront"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] object-cover transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 cursor-pointer"
                />
              </div>
            </div>
          </div>
          3015250{" "}
        </div>
      </section>
      {/* Franchise Locations Background Section */}
      <section id="locations-background" className="relative py-0">
        {/* First Background Image */}
        <div className="w-full">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-1.png`}
            alt="ChillPops Franchise Locations - Map 1"
            className="w-full h-auto display-block"
          />
        </div>

        {/* Second Background Image */}
        <div className="w-full">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-2.png`}
            alt="ChillPops Franchise Locations - Map 2"
            className="w-full h-auto display-block"
          />
        </div>
      </section>{" "}
    </div>
  );
};

export default Home;
