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

  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
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
  const locationsRef = useRef(null);

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

      if (locationsRef.current) {
        const rect = locationsRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const height = rect.height;
        const progress = Math.min(Math.max(scrolled / height, 0), 1);
        setCarPosition(progress);
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
      <section id="locations-background" className="relative py-0" ref={locationsRef}>
        {/* First Background Image - Karur to MKCE College */}
        <div className="w-full relative">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-1.png`}
            alt="ChillPops Franchise Locations - Map 1"
            className="w-full h-auto display-block"
          />
          
          {/* Animated Car - Scroll based */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
            <div 
              className="absolute transition-all duration-100 text-6xl"
              style={{
                left: `${10 + carPosition * 60}%`,
                top: `${20 + carPosition * 30}%`,
                transform: `rotate(${-30 + carPosition * 35}deg)`,
              }}
            >
              <FaTruck className="text-primary drop-shadow-lg" />
            </div>
          </div>

          {/* Location Hotspot - Karur */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '12%', top: '35%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Karur', outlets: 8, manager: 'Rajesh Kumar', rating: 4.5 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Karur' && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    K
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Karur</h3>
                    <p className="text-sm text-gray-700">8 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.5) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Rajesh Kumar</p>
                    <p className="text-xs text-gray-700">franchise@karur.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Hotspot - MKCE College */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '75%', top: '55%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'MKCE College, Karur', outlets: 1, manager: 'Priya Sharma', rating: 4.8 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'MKCE College, Karur' && (
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">MKCE College</h3>
                    <p className="text-sm text-gray-700">Karur Campus</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.8) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Campus Location</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Priya Sharma</p>
                    <p className="text-xs text-gray-700">franchise@mkce.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Second Background Image - Namakkal to Mumbai */}
        <div className="w-full relative">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-2.png`}
            alt="ChillPops Franchise Locations - Map 2"
            className="w-full h-auto display-block"
          />

          {/* Location Hotspot - Namakkal */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '12%', top: '15%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Namakkal', outlets: 4, manager: 'Suresh Reddy', rating: 4.3 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Namakkal' && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    N
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Namakkal</h3>
                    <p className="text-sm text-gray-700">4 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.3) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Suresh Reddy</p>
                    <p className="text-xs text-gray-700">franchise@namakkal.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Hotspot - Mumbai */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '50%', top: '45%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Mumbai', outlets: 10, manager: 'Amit Patel', rating: 4.7 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Mumbai' && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Mumbai</h3>
                    <p className="text-sm text-gray-700">10 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.7) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Amit Patel</p>
                    <p className="text-xs text-gray-700">franchise@mumbai.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Third Background Image - Bangalore to Coimbatore */}
        <div className="w-full relative">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-3.jpg`}
            alt="ChillPops Franchise Locations - Map 3"
            className="w-full h-auto display-block"
          />

          {/* Location Hotspot - Bangalore */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '15%', top: '20%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Bangalore', outlets: 12, manager: 'Deepak Singh', rating: 4.9 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Bangalore' && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    B
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Bangalore</h3>
                    <p className="text-sm text-gray-700">12 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.9) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Deepak Singh</p>
                    <p className="text-xs text-gray-700">franchise@bangalore.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Hotspot - Coimbatore */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '70%', top: '55%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Rathinam College, Coimbatore', outlets: 1, manager: 'Kumar Swamy', rating: 4.6 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Rathinam College, Coimbatore' && (
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Rathinam College</h3>
                    <p className="text-sm text-gray-700">Coimbatore</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.6) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Campus Location</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Kumar Swamy</p>
                    <p className="text-xs text-gray-700">franchise@rathinam.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fourth Background Image - Trichy to KRCT */}
        <div className="w-full relative">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-4.jpg`}
            alt="ChillPops Franchise Locations - Map 4"
            className="w-full h-auto display-block"
          />

          {/* Location Hotspot - Trichy */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '15%', top: '25%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Trichy', outlets: 5, manager: 'Vijay Krishna', rating: 4.4 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Trichy' && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    T
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Trichy</h3>
                    <p className="text-sm text-gray-700">5 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.4) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Vijay Krishna</p>
                    <p className="text-xs text-gray-700">franchise@trichy.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Hotspot - KRCT Trichy */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '70%', top: '60%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'KRCT, Trichy', outlets: 1, manager: 'Anitha Ravi', rating: 4.7 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'KRCT, Trichy' && (
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    K
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">KRCT</h3>
                    <p className="text-sm text-gray-700">Trichy Campus</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.7) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Campus Location</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Anitha Ravi</p>
                    <p className="text-xs text-gray-700">franchise@krct.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fifth Background Image - Ongole to Tenali */}
        <div className="w-full relative">
          <img
            src={`${import.meta.env.BASE_URL}images/franchise-locations-5.jpg`}
            alt="ChillPops Franchise Locations - Map 5"
            className="w-full h-auto display-block"
          />

          {/* Location Hotspot - Ongole */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '15%', top: '25%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Ongole, Andhra Pradesh', outlets: 3, manager: 'Ramesh Babu', rating: 4.2 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Ongole, Andhra Pradesh' && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    O
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Ongole</h3>
                    <p className="text-sm text-gray-700">3 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.2) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Ramesh Babu</p>
                    <p className="text-xs text-gray-700">franchise@ongole.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Hotspot - Tenali */}
          <div 
            className="absolute w-16 h-16 cursor-pointer z-10"
            style={{ left: '70%', top: '55%' }}
            onMouseEnter={() => setHoveredLocation({ name: 'Tenali, Andhra Pradesh', outlets: 2, manager: 'Lakshmi Devi', rating: 4.5 })}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {hoveredLocation?.name === 'Tenali, Andhra Pradesh' && (
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-300 rounded-3xl shadow-2xl p-6 w-80 animate-fade-in z-50 border-4 border-black">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    T
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black text-lg">Tenali</h3>
                    <p className="text-sm text-gray-700">2 Outlets</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(4.5) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 min-h-[100px] flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Location Details</p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold text-black text-sm">Lakshmi Devi</p>
                    <p className="text-xs text-gray-700">franchise@tenali.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Home;
