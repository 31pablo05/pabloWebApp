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
      className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800 text-white py-10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Información de contacto */}
          <div className="flex flex-col items-start space-y-4 text-left">
            <motion.p 
              className="text-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhoneAlt className="mr-2 text-blue-300" />
              Cel: 
              <a 
                href="tel:+542804389134" 
                className="ml-1 hover:text-blue-300 font-semibold"
              >
                +54 2804389134
              </a>
            </motion.p>
            <motion.p 
              className="text-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope className="mr-2 text-blue-300" />
              Email: 
              <a 
                href="mailto:pabloproboste64@gmail.com" 
                className="ml-1 hover:text-blue-300 font-semibold"
              >
                pabloproboste64@gmail.com
              </a>
            </motion.p>
            <motion.p 
              className="text-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt className="mr-2 text-blue-300" />
              Dirección: 
              <span className="ml-1">
                Brown 311, Trelew, Chubut
              </span>
            </motion.p>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-end space-x-8 text-3xl md:text-4xl">
            <motion.a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, rotate: 5 }}
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
              whileHover={{ scale: 1.1, rotate: 5 }}
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
              whileHover={{ scale: 1.1, rotate: 5 }}
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
              whileHover={{ scale: 1.1, rotate: 5 }}
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
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-blue-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        {/* Mensaje de Copyright */}
        <div className="text-center mt-8 text-sm md:text-base">
          <p>
            &copy; {currentYear} Todos los derechos reservados. | Desarrollado por <span className="font-semibold">Pablo Proboste</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
