// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/franchise', label: 'Franchise' },
    { to: '/about', label: 'About' },
    { to: '/customer-service', label: 'Customer Service' },
    { to: '/contact', label: 'Contact' },
    { to: '/events', label: 'Events' },
  ];

  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/bsw_logo.png"
            alt="Balaji Shake Wala Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
            style={{ maxWidth: '64px', maxHeight: '64px' }}
          />
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Balaji Shake Wala
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="space-x-6 text-lg font-medium hidden md:flex">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-orange-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Open menu"
        >
          <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-primary shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-8 space-y-6 text-lg font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-orange-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 