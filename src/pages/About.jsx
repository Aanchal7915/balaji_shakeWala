// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900 py-12 px-6 md:px-16 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="flex flex-col items-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'backOut' }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=120&q=80"
          alt="Balaji Shake Wala"
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg border-4 border-orange-200 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        />
        <motion.h1
          className="text-4xl font-extrabold text-center mb-2 text-primary drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 120 }}
        >
          About Balaji Shake Wala
        </motion.h1>
      </motion.div>
      <motion.div
        className="max-w-3xl mx-auto text-lg leading-relaxed space-y-6 bg-orange-50 rounded-2xl shadow-xl border border-orange-100 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(251, 146, 60, 0.15)' }}
      >
        {[
          <strong key="brand">Balaji Shake Wala</strong> +
            ' is a premium shake and beverage brand dedicated to serving the freshest, most delicious shakes, smoothies, and cold coffees. Our journey began with a passion for taste and a commitment to quality.',
          'We use only the finest ingredients, blending tradition with innovation to create unique flavors that delight our customers. Whether you’re craving a classic milkshake or an adventurous new blend, we have something for everyone.',
          'Our mission is to spread happiness, one sip at a time. Join us in our journey and experience the taste that blesses!'
        ].map((text, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            custom={i}
            className=""
          >
            {text}
          </motion.p>
        ))}
        <motion.ul
          className="grid md:grid-cols-2 gap-3 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            'Premium quality ingredients',
            'Wide variety of shakes and beverages',
            'Customer-first approach',
            'Expanding franchise network',
          ].map((item, idx) => (
            <motion.li
              key={item}
              className="pl-4 py-3 rounded-xl bg-white shadow hover:bg-orange-100 hover:text-orange-700 cursor-pointer font-medium border-l-4 border-orange-400 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
} 