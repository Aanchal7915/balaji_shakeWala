 // Franchise.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Franchise() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    investmentRange: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.investmentRange) {
      alert('Please fill in all fields.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', phone: '', city: '', investmentRange: '' });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      className="py-12 px-6 md:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900 max-w-5xl mx-auto min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 text-primary drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Start Your Own Balaji Shake Wala Outlet
      </motion.h1>

      {/* Franchise Benefits */}
      <motion.section
        className="mb-12 bg-orange-50 p-8 rounded-2xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Franchise Benefits
        </motion.h2>
        <motion.ul
          className="grid md:grid-cols-2 gap-4 text-lg text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            'Proven business model with high ROI',
            'Comprehensive training & support',
            'Low investment, high profit potential',
            'Marketing assistance & brand promotion',
          ].map((benefit, i) => (
            <motion.li
              key={benefit}
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-3 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 border-l-4 border-primary"
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(251, 146, 60, 0.15)' }}
            >
              <span className="text-base font-medium">{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Step-by-step process */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          How to Apply
        </motion.h2>
        <motion.ol
          className="space-y-4 text-lg text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
        >
          {[
            'Fill out the franchise inquiry form below',
            'Our team will contact you within 2 business days',
            'Discuss investment and location details',
            'Sign the franchise agreement',
            'Receive training and open your outlet',
          ].map((step, i) => (
            <motion.li
              key={step}
              className="bg-orange-50 rounded-xl shadow p-4 border-l-4 border-primary hover:bg-orange-100 hover:scale-[1.02] transition-all duration-300"
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.04 }}
            >
              <span className="font-medium">{step}</span>
            </motion.li>
          ))}
        </motion.ol>
      </motion.section>

      {/* Franchise Inquiry Form */}
      <motion.section
        className="bg-orange-50 p-8 rounded-2xl shadow-xl max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-6 text-primary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          Franchise Inquiry Form
        </motion.h2>

        {submitted ? (
          <motion.div
            className="text-center text-green-700 font-semibold text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Thank you for your interest! We will get back to you soon.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-3 rounded border border-primary focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
              required
              variants={fadeUp}
              custom={0}
            />
            <motion.input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              title="Enter 10 digit phone number"
              className="w-full p-3 rounded border border-primary focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
              required
              variants={fadeUp}
              custom={1}
            />
            <motion.input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-3 rounded border border-primary focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
              required
              variants={fadeUp}
              custom={2}
            />
            <motion.select
              name="investmentRange"
              value={form.investmentRange}
              onChange={handleChange}
              className="w-full p-3 rounded border border-primary focus:ring-2 focus:ring-primary transition-all duration-300 hover:border-primary"
              required
              variants={fadeUp}
              custom={3}
            >
              <option value="" disabled>
                Select Investment Range
              </option>
              <option value="Under ₹5 Lakh">Under ₹5 Lakh</option>
              <option value="₹5 Lakh - ₹10 Lakh">₹5 Lakh - ₹10 Lakh</option>
              <option value="Above ₹10 Lakh">Above ₹10 Lakh</option>
            </motion.select>

            <motion.button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded font-bold shadow-md hover:bg-primary/90 hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              variants={fadeUp}
              custom={4}
              whileHover={{ scale: 1.05 }}
            >
              Submit Inquiry
            </motion.button>
          </motion.form>
        )}
      </motion.section>
    </motion.div>
  );
}
