// === App.jsx ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import WhatsAppButton from './components/WhatsAppButton';
// Inside return statement, before closing main div:
<WhatsAppButton />


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// === components/Navbar.jsx ===
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">GTU Genie</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/subscribe" className="hover:text-indigo-600">Subscribe</Link>
        <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
        <Link to="/terms" className="hover:text-indigo-600">Terms</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// === components/Footer.jsx ===
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white text-center py-3 mt-10">
      Made by GTUinsta Team | Founded by HHM
    </footer>
  );
};

export default Footer;
