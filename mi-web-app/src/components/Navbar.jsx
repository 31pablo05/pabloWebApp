import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const menuItems = [
    { 
      id: 'home', 
      icon: <FaHome />, 
      label: 'Inicio',
      offset: -70 // Ajusta este valor según la altura de tu navbar
    },
    { 
      id: 'about', 
      icon: <FaUser />, 
      label: 'Sobre Mí',
      offset: -70
    },
    { 
      id: 'portfolio', 
      icon: <FaBriefcase />, 
      label: 'Portafolio',
      offset: -70
    },
    { 
      id: 'contact', 
      icon: <FaEnvelope />, 
      label: 'Contacto',
      offset: -70
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling 
          ? 'bg-black/90 backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Inicio - Ahora con función de scroll al top */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            PP
          </button>

          {/* Menú hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>

          {/* Menú de navegación */}
          <AnimatePresence>
            {(isOpen || window.innerWidth >= 1024) && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`${
                  isOpen
                    ? 'absolute top-full left-0 w-full bg-black/95'
                    : 'hidden lg:flex'
                } lg:relative lg:w-auto lg:bg-transparent lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0`}
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={item.offset}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
