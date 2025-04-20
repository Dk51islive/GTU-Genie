import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">GTU Genie</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="font-bold text-xl">GTU Genie</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
