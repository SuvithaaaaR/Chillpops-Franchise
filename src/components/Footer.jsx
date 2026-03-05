import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">C</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">
                Chill<span className="text-primary">Pops</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Own the Cool. Start your ChillPops franchise today and be part of
              India's fastest-growing frozen dessert brand.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaFacebookF className="text-sm md:text-base" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram className="text-sm md:text-base" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter className="text-sm md:text-base" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaYoutube className="text-sm md:text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise-model"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Franchise Model
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  to="/apply"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Karur</li>
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Coimbatore</li>
              <li>Trichy</li>
              <li>Namakkal</li>
              <li>Ongole</li>
              <li>Tenali</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:franchise@chillpops.in"
                  className="hover:text-primary transition-colors duration-300"
                >
                  franchise@chillpops.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="https://chillpops.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  www.chillpops.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} ChillPops. All rights reserved. | Made with ❤️
            for franchise partners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
