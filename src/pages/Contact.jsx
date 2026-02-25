import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary to-pink-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90">We're here to help you start your franchise journey</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <FaEnvelope className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-primary font-semibold">franchise@chillpops.in</p>
              <p className="text-gray-600 text-sm">support@chillpops.in</p>
            </div>

            <div className="card text-center">
              <FaPhone className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-primary font-semibold">+91 98765 43210</p>
              <p className="text-gray-600 text-sm">Mon-Sat, 9AM-7PM</p>
            </div>

            <div className="card text-center">
              <FaMapMarkerAlt className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-primary font-semibold">www.chillpops.in</p>
              <p className="text-gray-600 text-sm">Head Office: Karur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
