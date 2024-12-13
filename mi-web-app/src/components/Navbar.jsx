import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center text-white shadow-lg z-20 transition duration-300 ${
        scrolling ? 'bg-[#1d0af8] bg-opacity-90' : 'bg-[#3b1ff9] bg-opacity-80'
      }`}
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline"
        >
          MyWebsite
        </Link>
      </div>

      {/* Botón Menú */}
      <div
        className="lg:hidden z-20 flex flex-col gap-1 w-8 h-8 justify-center items-center cursor-pointer"
        onClick={toggleMenu}
        aria-label="Menu Toggle"
      >
        <span
          className={`block w-full h-1 bg-white transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-full h-1 bg-white transition-opacity ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-full h-1 bg-white transition-transform ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </div>

      {/* Links */}
      <ul
        className={`absolute top-16 left-0 w-full bg-black bg-opacity-75 lg:bg-transparent lg:static flex flex-col lg:flex-row lg:space-x-6 lg:w-auto transition-all duration-300 ${
          isOpen ? 'block' : 'hidden lg:flex'
        }`}
      >
        {[ 
          { id: 'home', icon: <FaHome />, label: 'Home' }, 
          { id: 'about', icon: <FaUser />, label: 'About' }, 
          { id: 'portfolio', icon: <FaBriefcase />, label: 'Portfolio' }, 
          { id: 'contact', icon: <FaEnvelope />, label: 'Contact' } 
        ].map((link) => (
          <li key={link.id} className="w-full sm:w-auto">
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 hover:scale-105 hover:underline decoration-[#955eff] cursor-pointer transition-transform"
            >
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
