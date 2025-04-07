import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const PerfilCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="card bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700"
    >
      <IoPersonOutline className="text-4xl mb-4" />
      <h3 className="text-2xl font-bold text-center mb-2">Perfil</h3>
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
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-all"
        >
          Ver Mi Portfolio
        </a>
      </div>
    </motion.div>
  );
};

export default PerfilCard;
