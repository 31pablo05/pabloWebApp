import React from 'react';
import { motion } from 'framer-motion';
import ProfileInfo from './ProfileInfo';
import PerfilCard from './PerfilCard';
import EstudiosCard from './EstudiosCard';
import ExperienciasCard from './ExperienciasCard';

const AboutMe = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.section 
      id="about" 
      initial="initial"
      animate="animate"
      className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Sección de perfil y descripción */}
        <ProfileInfo />

        {/* Grid de tarjetas informativas */}
        <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PerfilCard />
          <EstudiosCard />
          <ExperienciasCard />
        </motion.div>

        {/* Botones de acción: Contacto y Descargar CV */}
        <motion.div {...fadeIn} className="buttons flex flex-col sm:flex-row justify-center mt-12 gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:pabloproboste64@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-purple-600  text-white py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>📧</span> Contáctame
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/assets/CV-PabloProboste DesarrolladorFrontend.pdf"
            download="/assets/CV-PabloProboste DesarrolladorFrontend.pdf"
            className="bg-gradient-to-r from-blue-500 to-purple-600  text-white py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>📄</span> Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
