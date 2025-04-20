import React from 'react'
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 text-center">
      <div className="mb-4 flex justify-center gap-4">
        <a href="https://instagram.com/gtuinsta_" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-400" />
        </a>
        <a href="https://wa.me/917487979267" target="_blank" rel="noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-400" />
        </a>
        <a href="https://github.com/GTU" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} GTU Genie | Made by GTUinsta Team | Founded by HHM</p>
    </footer>
  )
}

export default Footer


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8">
      <p className="text-sm">Made by GTUinsta Team | Founded by HHM</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://instagram.com/gtuinsta_" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://t.me/gtuinsta" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://www.youtube.com/@gtu_insta" target="_blank" rel="noreferrer">YouTube</a>
      </div>
    </footer>
  )
}
export default Footer

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-10">
      <p>Made by GTUinsta Team | Founded by HHM</p>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10 text-center text-sm">
      Made by GTUinsta Team | Founded by HHM
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4 mt-8 border-t text-sm bg-gray-100">
      Made by GTUinsta Team | Founded by HHM <br />
      <a href="https://instagram.com/gtuinsta_" target="_blank" className="text-blue-600">@gtuinsta_</a>
    </footer>
  );
};

export default Footer;
