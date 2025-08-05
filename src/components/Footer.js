// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Balaji Shake Wala. All rights reserved.</div>
        <div className="space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-100">Facebook</a>
          <a href="mailto:info@balajishakewala.com" className="hover:text-orange-100">Email</a>
        </div>
      </div>
    </footer>
  );
} 