import React from 'react'
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 text-center">
      <div className="mb-4 flex justify-center gap-4">
        <a href="https://instagram.com/gtuinsta" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-400" />
        </a>
        <a href="https://wa.me/918000000000" target="_blank" rel="noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-400" />
        </a>
        <a href="https://github.com/dk51islive" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} GTU Genie | Made by GTUinsta Team | Founded by HHM</p>
    </footer>
  )
}

export default Footer
