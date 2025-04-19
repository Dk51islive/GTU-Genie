import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">GTU Genie</h1>
      <nav className="space-x-4">
        <a href="#features" className="text-gray-700 hover:text-blue-500">Features</a>
        <a href="#pricing" className="text-gray-700 hover:text-blue-500">Pricing</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
      </nav>
    </header>
  )
}

export default Header
