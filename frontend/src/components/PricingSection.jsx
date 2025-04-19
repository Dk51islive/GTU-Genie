import React from 'react'

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Affordable Plans</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Monthly</h3>
          <p className="text-2xl font-semibold text-blue-600 mb-4">₹49</p>
          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            <li>1 Month Access</li>
            <li>All Notes & Updates</li>
            <li>Bot + Notifications</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
        </div>
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg transform scale-105">
          <h3 className="text-xl font-bold mb-2">Semester</h3>
          <p className="text-2xl font-semibold mb-4">₹199</p>
          <ul className="text-sm space-y-1 mb-4">
            <li>6 Month Access</li>
            <li>All Premium Features</li>
            <li>Referral Commission</li>
          </ul>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">Subscribe</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Annual</h3>
          <p className="text-2xl font-semibold text-blue-600 mb-4">₹349</p>
          <ul className="text-sm text-gray-600 space-y-1 mb-4">
            <li>1 Year Access</li>
            <li>Bot, Notes, Alerts</li>
            <li>Weekly Updates</li>
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
