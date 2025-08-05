 // Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Events from './pages/Events';
// import About from './pages/About';
import ShakeItem from '../components/ShakeItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + ' !flex !items-center !justify-center !bg-primary !rounded-full !w-10 !h-10 !shadow-lg hover:!bg-primary/90'}
      style={{ ...style, right: '-20px', zIndex: 2 }}
      onClick={onClick}
      aria-label="Next"
    >
      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
    </button>
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + ' !flex !items-center !justify-center !bg-primary !rounded-full !w-10 !h-10 !shadow-lg hover:!bg-primary/90'}
      style={{ ...style, left: '-20px', zIndex: 2 }}
      onClick={onClick}
      aria-label="Previous"
    >
      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
    </button>
  );
}
const shakeItems=[
  {
    name: 'Oreo Shake',
    price: '₹120',
    description: 'Creamy Oreo milkshake topped with whipped cream & chocolate drizzle',
    image: '/oreo-shake.jpeg',
    category: 'Milkshake',
  },
  {
    name: 'KitKat Shake',
    price: '₹130',
    description: 'Rich chocolate shake blended with crunchy KitKat pieces',
    image: '/kitkat-shake.jpeg',
    category: 'Milkshake',
  },
  {
    name: 'Mango Shake',
    price: '₹110',
    description: 'Fresh Alphonso mango shake with a hint of saffron',
    image: '/mango-shake.jpeg',
    category: 'Milkshake',
  },
  {
    name: 'Kesar Badam Shake',
    price: '₹140',
    description: 'Traditional kesar badam shake with authentic flavors',
    image: '/kesar-badam.jpeg',
    category: 'Milkshake',
  },
  {
    name: 'Classic Cold Coffee',
    price: '₹100',
    description: 'Smooth cold coffee with a rich aroma and frothy top',
    image: '/classic-coffee.jpeg',
    category: 'Cold Coffee',
  },
  {
    name: 'Strawberry Smoothie',
    price: '₹120',
    description: 'Fresh strawberry smoothie with yogurt and honey',
    image: '/strawberry.jpeg',
    category: 'Smoothie',
  },
]

export default function Home() {
  console.log('home');
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-orange-50 text-gray-900">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{
            backgroundImage: `url('/shake-banner.png')`, // Replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white px-4">
            {/* <img
              src="/assets/logo.png" // Replace with your logo path
              alt="Balaji Shake Wala"
              className="mx-auto w-24 md:w-36 mb-4"
            /> */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-2"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Taste That Blesses!
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              Premium shakes crafted with love & blessings
            </motion.p>
            <div className="space-x-4 flex justify-center">
              <Link
                to="/menu"
                className="bg-white text-primary px-5 py-3 rounded-full font-semibold shadow transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                View More
              </Link>
              <Link
                to="/franchise"
                className="bg-primary text-white px-5 py-3 rounded-full font-semibold shadow transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Franchise Inquiry
              </Link>
            </div>
          </div>
        </div>
        {/* Shake Items Slider Section */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Our Signature Shakes</h2>
          <div className="px-2 md:px-8">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              nextArrow={<NextArrow />}
              prevArrow={<PrevArrow />}
              autoplay={true}
              autoplaySpeed={2500}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 2 }
                },
                {
                  breakpoint: 640,
                  settings: { slidesToShow: 1 }
                }
              ]}
            >
              {shakeItems.map((item, idx) => (
                <div key={idx} className="px-2">
                  <ShakeItem {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Ananya S.', review: 'The Oreo shake is divine! Truly blessed taste.' },
                { name: 'Rohit M.', review: 'Best cold coffee I’ve ever had. Highly recommend.' },
                { name: 'Simran K.', review: 'Every sip feels premium. Can’t wait for my next one!' },
                { name: 'Rahul T.', review: 'Perfect blend of taste and texture. My kids love it too!' },
                { name: 'Megha R.', review: 'Tried the KitKat shake – absolutely amazing. Great quality!' },
                { name: 'Aman P.', review: 'Great ambience, wonderful staff, and mouthwatering shakes.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-orange-100 rounded-xl p-6 shadow transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(251, 146, 60, 0.25)' }}
                >
                  <p className="italic transition-colors duration-300 group-hover:text-orange-700">"{item.review}"</p>
                  <h4 className="mt-4 font-bold text-primary">- {item.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="relative py-20 px-4 flex items-center justify-center min-h-[350px] md:min-h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url('https://res.cloudinary.com/dn0j5mkmb/image/upload/v1753181715/siip_tm3m1j.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Sip, Smile, Celebrate
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 font-medium drop-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Every glass is a festival of flavors, a moment of joy, and a memory in the making. Dive into the world of Balaji Shake Wala—where every sip is a celebration and every visit is a story.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              <Link
                to="/about"
                className="bg-white text-orange-700 px-8 py-3 rounded-full font-bold shadow transition-all duration-300 ease-in-out hover:bg-orange-100 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        {/* <About /> */}
        {/* Events Section */}
        {/* <Events /> */}
      </div>
    </>
  );
}
