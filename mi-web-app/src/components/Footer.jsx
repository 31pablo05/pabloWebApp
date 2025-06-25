import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaGithub, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white/10 backdrop-blur-lg text-white py-10 border-t border-blue-400/20 shadow-2xl overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Información de contacto */}
          <div className="flex flex-col items-start space-y-4 text-left bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-400/20 w-full md:w-auto">
            <motion.p 
              className="text-lg flex items-center flex-wrap break-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhoneAlt className="mr-2 text-blue-300" />
              Cel: 
              <a 
                href="tel:+542804389134" 
                className="ml-1 hover:text-blue-300 font-semibold"
                aria-label="Llamar a Pablo Proboste"
              >
                +54 2804389134
              </a>
            </motion.p>
            <motion.p 
              className="text-lg flex items-center flex-wrap break-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope className="mr-2 text-blue-300" />
              Email: 
              <a 
                href="mailto:pabloproboste64@gmail.com" 
                className="ml-1 hover:text-blue-300 font-semibold break-all"
                aria-label="Enviar correo a Pablo Proboste"
              >
                pabloproboste64@gmail.com
              </a>
            </motion.p>
            <motion.p 
              className="text-lg flex items-start flex-wrap"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt className="mr-2 text-blue-300 mt-1" />
              <span className="font-semibold mt-0.5">Dirección:</span>
              <span className="ml-1 text-blue-100 break-words max-w-[180px] sm:max-w-xs md:max-w-none mt-0.5">Brown 311, Trelew, Chubut</span>
            </motion.p>
          </div>

          {/* Separador visual */}
          <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full mx-8 opacity-60" />

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-end space-x-6 md:space-x-8 text-3xl md:text-4xl bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-400/20 w-full md:w-auto">
            <motion.a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: '0 0 16px 2px #6366f1' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: '0 0 16px 2px #6366f1' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: '0 0 16px 2px #6366f1' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://wa.me/542804389134" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: '0 0 16px 2px #6366f1' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, rotate: 5, boxShadow: '0 0 16px 2px #6366f1' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
        {/* Separador horizontal en mobile */}
        <div className="block md:hidden w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full my-8 opacity-60" />
        {/* Copyright */}
        <div className="text-center mt-8 text-xs md:text-base text-blue-100">
          <p>
            &copy; {currentYear} Todos los derechos reservados. | Desarrollado por <span className="font-semibold text-blue-200">Pablo Proboste</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
