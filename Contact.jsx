// Contact.jsx
import React, { useState } from 'react';

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
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>

      {/* Google Map */}
      <div className="mb-10">
        <iframe
          title="Balaji Shake Wala Location"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded border"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded border"
              required
            ></textarea>
            <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">
              Submit
            </button>
          </form>
        </div>

        {/* Store Info */}
        <div className="bg-orange-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Store Information</h2>
          <p><strong>Store Timings:</strong> 10:00 AM – 11:00 PM (All days)</p>
          <p className="mt-2">📍 123, Main Market, Jaipur, Rajasthan</p>
          <p className="mt-2">📞 Call Us: <strong>+91-9876543210</strong></p>
          <p className="mt-2">💬 WhatsApp: <strong>+91-9876543210</strong></p>
          <div className="mt-4 space-x-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
