// 

























// src/components/ChatSupport.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ChatSupport() {
  const handleClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hi! I need some help with your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-300 z-50 border-2 border-green-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
}
