// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise';
import About from './pages/About';
import CustomerService from './pages/CustomerService';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import './index.css';
import Events from './pages/Events';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/Contact" element={<Contact />} />
          
        
      </Routes>
      <Footer />
      <ChatSupport />
    </Router>
  );
}
