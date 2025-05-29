import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add API integration here
      };
    
      return (
        <div>
          {/* Header Banner */}
          <div
            className="h-96 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
            }}
          >
            <div className="bg-gray-100 bg-opacity-50 p-8 rounded text-black text-center">
              <h1 className="text-4xl font-bold mb-2">CONTACT US</h1>
              <p>We would love to hear from you</p>
            </div>
          </div>
    
          {/* Our Location */}
          <div className="bg-white py-12 text-center">
            <h2 className="text-xl font-semibold mb-6">OUR LOCATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-gray-100 rounded shadow">
                <h4 className="font-bold text-yellow-700 mb-2">PHONE</h4>
                <p>+880 192 748 0867</p>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow">
                <h4 className="font-bold text-yellow-700 mb-2">ADDRESS</h4>
                <p>123 St, Narayanganj, Bangladesh</p>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow">
                <h4 className="font-bold text-yellow-700 mb-2">WORKING HOURS</h4>
                <p>
                  Mon - Fri: 9am - 6pm<br />
                  Sat - Sun: 10am - 2pm
                </p>
              </div>
            </div>
          </div>
    
          {/* Contact Form */}
          <div className="bg-white text-center py-10">
            <h2 className="text-2xl font-semibold mb-2">CONTACT FORM</h2>
            <div className="w-full max-w-2xl mx-auto bg-gray-100 p-8 rounded shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-3 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border border-gray-300 rounded w-full"
                  />
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded w-full"
                />
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-300 rounded w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-700 hover:bg-yellow-800 text-white py-3 px-6 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      );
};

export default ContactUs;