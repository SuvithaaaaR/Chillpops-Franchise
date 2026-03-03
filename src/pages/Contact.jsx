import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-16 md:pt-20">
      <section className="section-padding bg-gradient-to-br from-primary to-pink-600 text-white">
        <div className="container-custom text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Contact Us</h1>
          <p className="text-base md:text-xl opacity-90">
            We're here to help you start your franchise journey
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <FaEnvelope className="text-4xl md:text-5xl text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-primary font-semibold text-sm md:text-base break-all">
                franchise@chillpops.in
              </p>
              <p className="text-gray-600 text-xs md:text-sm">support@chillpops.in</p>
            </div>

            <div className="card text-center">
              <FaPhone className="text-4xl md:text-5xl text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Call Us</h3>
              <p className="text-primary font-semibold text-sm md:text-base">+91 98765 43210</p>
              <p className="text-gray-600 text-xs md:text-sm">Mon-Sat, 9AM-7PM</p>
            </div>

            <div className="card text-center sm:col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="text-4xl md:text-5xl text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-primary font-semibold text-sm md:text-base">www.chillpops.in</p>
              <p className="text-gray-600 text-xs md:text-sm">Head Office: Karur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
