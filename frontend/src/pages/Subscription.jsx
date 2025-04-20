import React from 'react';

const Subscription = () => {
  const plans = [
    { name: 'Basic Plan', price: '₹149', features: ['1 Month Access', 'Basic Notes'] },
    { name: 'Premium Plan', price: '₹299', features: ['3 Months Access', 'E-Notes', 'All Semesters'] },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, i) => (
          <div key={i} className="border p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-lg text-green-600 mb-2">{plan.price}</p>
            <ul className="text-sm list-disc ml-5 mb-4">
              {plan.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
