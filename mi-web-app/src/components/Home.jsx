import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Datos de redes sociales
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={32} />,
      url: 'https://github.com/31pablo05',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={32} />,
      url: 'https://www.linkedin.com/in/pablo-proboste-7626b5273/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={32} />,
      url: 'https://www.instagram.com/probostepablo67/',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={32} />,
      url: 'mailto:pabloproboste64@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/mi-web-app/public/assets/fondoome2_1.webm" type="video/webm" />
          <source src="/mi-web-app/public/assets/fondoome2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-20">
        <motion.div
          variants={containerVariants}
          className="text-center text-white"
        >
          {/* Título principal con efecto de typing */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Pablo Proboste
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Desarrollador Frontend
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Creando experiencias web únicas y memorables con pasión por el diseño y la innovación
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="group relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Ver Proyectos
              </motion.button>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="group relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contactar
              </motion.button>
            </Link>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-white transition-colors duration-300 ${link.color}`}
                aria-label={`Visitar ${link.name}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
