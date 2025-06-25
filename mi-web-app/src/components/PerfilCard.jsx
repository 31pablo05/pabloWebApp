import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const PerfilCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      className="card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-blue-400/30 relative overflow-hidden transition-all duration-300"
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl z-0" />
      <div className="relative z-10">
        <IoPersonOutline className="text-4xl mb-4 text-blue-400 drop-shadow" />
        <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Perfil</h3>
        <h4 className="text-xl text-center mb-4 text-blue-400">Desarrollador Front-End &amp; Diseñador Web</h4>
        <div className="text-gray-300 space-y-2">
          <p>
            Soy un apasionado del desarrollo web especializado en crear <strong>páginas web estáticas</strong> utilizando <strong>React, Vite, Tailwind CSS y JavaScript/JSX</strong>. Mis proyectos se caracterizan por un diseño moderno, rápido y optimizado para SEO, desplegados eficientemente en <strong>Vercel</strong>.
          </p>
          <p>
            Con un enfoque en la experiencia del usuario y la calidad del código, combino estética y funcionalidad para entregar soluciones digitales excepcionales.
          </p>
          <a 
            href="#portfolio" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg shadow-lg transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Ver mi portfolio"
          >
            Ver Mi Portfolio
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PerfilCard;
