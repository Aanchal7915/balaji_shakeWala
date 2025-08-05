// src/pages/Events.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Events() {
  const events = [
    {
      title: 'Grand Opening - New Outlet',
      date: '15th July 2024',
      location: 'Vaishali Nagar, Jaipur',
      desc: 'Join us for free samples, games, and exclusive offers on our opening day!'
    },
    {
      title: 'Summer Shake Fest',
      date: '1st - 7th June 2024',
      desc: 'Enjoy special discounts on all fruit shakes and smoothies. Participate in our selfie contest to win exciting prizes!'
    },
    {
      title: 'Past Event: Holi Special',
      date: '25th March 2024',
      desc: 'Thank you for joining our Holi celebration! Check out the photos on our Instagram page.'
    }
  ];

  return (
    <motion.div
      className="bg-white text-gray-900 py-12 px-6 md:px-16 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 text-primary drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Events & Happenings
      </motion.h1>
      <motion.div
        className="max-w-3xl mx-auto text-lg leading-relaxed space-y-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.18 },
          },
        }}
      >
        {events.map((event, idx) => (
          <motion.div
            key={event.title}
            className="bg-primary-50 p-6 rounded-2xl shadow-xl border border-primary-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(251, 146, 60, 0.15)' }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-primary">{event.title}</h2>
            <p className="mb-1 font-medium text-primary-500">Date: {event.date}{event.location && <span> | {event.location}</span>}</p>
            <p>{event.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
} 