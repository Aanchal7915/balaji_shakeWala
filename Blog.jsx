import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Health Benefits of Our Shakes',
    summary: 'Discover how our shakes help boost immunity, improve digestion, and energize your day.',
    date: 'July 10, 2025',
    img: '/assets/shake-health.jpg',
  },
  {
    id: 2,
    title: 'New Mango Shake Flavor Launched!',
    summary: 'Try our refreshing mango shake with a special twist of saffron and almonds.',
    date: 'July 1, 2025',
    img: '/assets/mango-shake.jpg',
  },
  {
    id: 3,
    title: 'Success Story: From Small Outlet to 25+ Stores',
    summary: 'Learn how Balaji Shake Wala expanded rapidly while maintaining quality.',
    date: 'June 15, 2025',
    img: '/assets/success-story.jpg',
  }
];

export default function Blog() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white text-gray-900 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-primary tracking-wide">
        Latest from Our Blog
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map(({ id, title, summary, date, img }) => (
          <motion.article
            key={id}
            className="bg-primary-light rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover rounded-t-3xl"
              loading="lazy"
            />
            <div className="p-6">
              <span className="inline-block bg-primary-extra-light text-primary-dark px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {date}
              </span>
              <h2 className="text-2xl font-bold mb-3 text-primary">{title}</h2>
              <p className="text-gray-700">{summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
