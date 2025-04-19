import React from 'react'

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to GTU Genie</h2>
      <p className="text-lg max-w-xl mx-auto mb-6">One-stop solution for GTU students — notes, results, circulars & more with smart AI integration.</p>
      <a href="#subscribe" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition">
        Get Started
      </a>
    </section>
  )
}

export default HeroSection
