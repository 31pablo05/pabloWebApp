import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Lado izquierdo: Dirección, Teléfono y Email */}
        <div className="flex flex-col">
          <p className="text-sm">Dirección: Calle Ficticia 123, Ciudad, País</p>
          <p className="text-sm">Teléfono: (123) 456-7890</p>
          <p className="text-sm">Email: contacto@ejemplo.com</p>
        </div>

        {/* Lado derecho: Íconos de redes sociales */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaWhatsapp />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
