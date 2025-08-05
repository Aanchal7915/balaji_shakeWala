import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ShakeItem({ image, name, price, description, category }) {
  console.log('shake item',image, name, price, description, category);
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
      // initial={{ opacity: 0, y: 40 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6 }}
    >
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-cover rounded-xl shadow-md border-4 border-primary/20"
        />
        {category && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
            {category}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-2">{name}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <span className="text-lg font-bold text-primary mb-2">{price}</span>
      <Link
        to="/menu"
        className="mt-4 inline-block bg-primary text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition-all duration-300"
      >
        View More
      </Link>
    </motion.div>
  );
}