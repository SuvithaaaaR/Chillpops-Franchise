import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaRocket } from "react-icons/fa";

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Full Screen, No Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/homepage.png)",
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

      {/* Space Animation Section - Cosmic Journey */}
      <section
        ref={spaceRef}
        className="relative min-h-[200vh] bg-gradient-to-b from-gray-900 via-purple-900 to-pink-900 overflow-hidden"
      >
        {/* Floating Clouds */}
        <div
          className="absolute w-full h-full pointer-events-none"
          style={{
            transform: `translateY(${spaceScroll * 300}px)`,
          }}
        >
          {/* Cloud 1 */}
          <div
            className="absolute top-20 left-10 w-96 h-64 bg-white/10 rounded-full blur-3xl"
            style={{
              transform: `translateY(${spaceScroll * 150}px) scale(${1 + spaceScroll * 0.5})`,
            }}
          ></div>
          {/* Cloud 2 */}
          <div
            className="absolute top-1/3 right-20 w-80 h-56 bg-purple-300/10 rounded-full blur-2xl"
            style={{
              transform: `translateY(${spaceScroll * -100}px) translateX(${spaceScroll * 50}px)`,
            }}
          ></div>
          {/* Cloud 3 */}
          <div
            className="absolute bottom-1/4 left-1/4 w-72 h-48 bg-pink-300/10 rounded-full blur-3xl"
            style={{
              transform: `translateY(${spaceScroll * 200}px) scale(${1 - spaceScroll * 0.3})`,
            }}
          ></div>
        </div>

        {/* Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <FaStar
              key={i}
              className="absolute text-white animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 8 + 4}px`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative z-10 text-center px-4">
            {/* Floating Astronaut/Rocket Icon */}
            <div
              className="mb-8"
              style={{
                transform: `translateY(${Math.sin(spaceScroll * 10) * 20}px) rotate(${spaceScroll * 360}deg)`,
              }}
            >
              <FaRocket className="text-8xl md:text-9xl text-white mx-auto drop-shadow-2xl" />
            </div>

            {/* Main Title with Parallax */}
            <div
              className="mb-6"
              style={{
                opacity: 1 - spaceScroll * 1.5,
                transform: `scale(${1 + spaceScroll * 0.5})`,
              }}
            >
              <h1
                className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg"
                style={{
                  textShadow:
                    "0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(147,51,234,0.5)",
                }}
              >
                A COSMIC
              </h1>
              <h2
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                style={{
                  textShadow: "0 0 30px rgba(219,39,119,0.5)",
                }}
              >
                SCROLL JOURNEY
              </h2>
            </div>

            {/* Subtitle */}
            <div
              className="mb-8"
              style={{
                opacity: Math.max(0, 1 - spaceScroll * 2),
              }}
            >
              <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto tracking-widest">
                GET READY TO EMBARK ON A VOYAGE OF DELIGHT, FLAVOR AND
                CELEBRATION
              </p>
            </div>

            {/* CTA Button */}
            <div
              style={{
                opacity: Math.max(0, 1 - spaceScroll * 1.5),
              }}
            >
              <Link
                to="/apply"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl"
              >
                START YOUR FRANCHISE
                <FaStar
                  className="animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Text Reveal Section */}
        <div
          className="absolute bottom-32 left-0 right-0 text-center"
          style={{
            opacity: Math.min(1, spaceScroll * 3),
            transform: `translateY(${(1 - spaceScroll) * 100}px)`,
          }}
        >
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap px-4">
            <h3 className="text-4xl md:text-6xl font-bold text-pink-300 drop-shadow-lg">
              FLAVOR
            </h3>
            <h3 className="text-4xl md:text-6xl font-bold text-purple-300 drop-shadow-lg">
              MEETS
            </h3>
            <h3 className="text-4xl md:text-6xl font-bold text-blue-300 drop-shadow-lg">
              DELIGHT
            </h3>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Parallax Scrolling Locations Section */}
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
      <section className="section-padding bg-gradient-to-br from-primary to-pink-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Be part of India's fastest-growing ice cream franchise
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Apply for Franchise
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
