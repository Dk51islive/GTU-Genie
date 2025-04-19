import React from 'react'

const PaymentSection = () => {
  const handlePayment = () => {
    const upiUrl = `upi://pay?pa=gtu-genie@ibl&pn=GTU%20Genie&am=99&cu=INR`;

    window.location.href = upiUrl;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center mt-10">
      <h2 className="text-2xl font-bold mb-2">Buy Subscription</h2>
      <p className="text-gray-600 mb-4">Only ₹149 / Month – Pay via GPay / UPI</p>
      <button
        onClick={handlePayment}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
      >
        Pay with GPay / UPI
      </button>
    </div>
  );
};

export default PaymentSection;
