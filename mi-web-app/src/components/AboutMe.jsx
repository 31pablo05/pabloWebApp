import React from 'react';
import { motion } from 'framer-motion';
import ProfileInfo from './ProfileInfo';
import PerfilCard from './PerfilCard';
import EstudiosCard from './EstudiosCard';
import ExperienciasCard from './ExperienciasCard';

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      initial="initial"
      animate="animate"
      className="py-16 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden"
    >
      {/* Glow decorativo de fondo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/30 via-purple-500/20 to-pink-400/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Sección de perfil y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <ProfileInfo />
          {/* Tagline destacado */}
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
            ¡Apasionado por el desarrollo y el diseño web!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full my-4 mx-auto" />
        </motion.div>

        {/* Grid de tarjetas informativas con animación y glassmorphism */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {[<PerfilCard key="perfil" />, <EstudiosCard key="estudios" />, <ExperienciasCard key="exp" />].map((Card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
              className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-blue-400/40"
            >
              {Card}
            </motion.div>
          ))}
        </motion.div>

        {/* Botones de acción: Contacto y Descargar CV */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="buttons flex flex-col sm:flex-row justify-center mt-14 gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: '0 0 16px 2px #6366f1' }}
            whileTap={{ scale: 0.97 }}
            href="mailto:pabloproboste64@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Enviar correo a Pablo Proboste"
          >
            <span>📧</span> Contáctame
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: '0 0 16px 2px #6366f1' }}
            whileTap={{ scale: 0.97 }}
            href="/assets/CV-PabloProboste DesarrolladorFrontend.pdf"
            download
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Descargar CV Pablo Proboste"
          >
            <span>📄</span> Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
