import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome to GTU Genie Dashboard</h1>
        <p className="mb-4">Here you can access your subscriptions, referrals, updates, and more.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="font-semibold text-lg">Your Subscriptions</h2>
            <p>View and manage your active plans.</p>
          </div>

          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="font-semibold text-lg">Referral Earnings</h2>
            <p>Track how much you've earned from referrals.</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded shadow">
            <h2 className="font-semibold text-lg">GTU Updates</h2>
            <p>Stay informed about result & circular updates from GTU.</p>
          </div>

          <div className="bg-pink-100 p-4 rounded shadow">
            <h2 className="font-semibold text-lg">Support</h2>
            <p>Need help? Reach us on WhatsApp anytime.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
