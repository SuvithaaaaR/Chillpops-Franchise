import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const Locations = () => {
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
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const height = rect.height - window.innerHeight;
        const progress = Math.min(Math.max(scrolled / height, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-pink-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Locations</h1>
          <p className="text-xl opacity-90">50+ outlets across 8 cities</p>
        </div>
      </section>

      {/* Parallax Scrolling Section */}
      <section
        ref={parallaxRef}
        className="relative bg-gray-50"
        style={{ minHeight: `${locations.length * 100}vh` }}
      >
        {locations.map((location, index) => {
          const progress = scrollProgress * locations.length - index;
          const opacity = Math.max(0, Math.min(1, 1 - Math.abs(progress)));
          const scale = 0.8 + opacity * 0.2;
          const translateY = progress * -50;
          const pinProgress = Math.max(0, Math.min(1, progress + 0.5));

          return (
            <div
              key={index}
              className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
              style={{
                opacity: opacity,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transition: "none",
              }}
            >
              {/* Animated Location Pin */}
              <div
                className="absolute top-20 animate-bounce"
                style={{
                  opacity: opacity,
                  transform: `translateY(${pinProgress * 20}px)`,
                }}
              >
                <FaMapMarkerAlt className="text-6xl md:text-8xl text-red-500 drop-shadow-lg" />
              </div>

              {/* Location Card */}
              <div
                className={`relative w-[90%] max-w-2xl h-[60vh] rounded-3xl shadow-2xl bg-gradient-to-br ${location.color} p-12 flex flex-col items-center justify-center text-white`}
                style={{
                  transform: `rotateX(${(1 - opacity) * 10}deg) rotateY(${progress * 5}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="text-center relative z-10">
                  <h2 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
                    {location.city}
                  </h2>
                  <div className="text-3xl md:text-4xl font-semibold mb-4">
                    {location.outlets} Outlets
                  </div>
                  <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
                  <p className="text-xl md:text-2xl opacity-90">
                    Join our growing network
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/30 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white/30 rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-12 h-12 border-4 border-white/20 rounded-full"></div>
              </div>

              {/* Scroll Indicator Arrow */}
              {index < locations.length - 1 && (
                <div
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                  style={{ opacity: opacity * 0.6 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-px h-16 bg-gray-400 mb-2"></div>
                    <svg
                      className="w-6 h-6 text-gray-400 animate-bounce"
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
              )}
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of India's fastest-growing ice cream franchise
          </p>
          <Link to="/apply" className="btn-primary text-lg px-8 py-4">
            Apply for Franchise
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Locations;
