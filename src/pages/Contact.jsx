 // Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-12 px-6 md:px-16 bg-white text-gray-900">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Get in Touch
      </motion.h1>

      {/* Google Map */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <iframe
          title="Balaji Shake Wala Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border shadow"
        ></iframe>
      </motion.div>

      {/* Contact Form & Store Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary hover:border-primary"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded font-semibold shadow transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Store Info */}
        <motion.div
          className="bg-primary/10 p-6 rounded-xl shadow transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold mb-4">Store Information</h2>
          <p><strong>Store Timings:</strong> 10:00 AM – 11:00 PM (All days)</p>
          <p className="mt-2">📍 123, Main Market, Jaipur, Rajasthan</p>
          <p className="mt-2">📞 Call Us: <strong>+91-9876543210</strong></p>
          <p className="mt-2">💬 WhatsApp: <strong>+91-9876543210</strong></p>
          <div className="mt-4 space-x-4 flex">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded font-semibold shadow transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
