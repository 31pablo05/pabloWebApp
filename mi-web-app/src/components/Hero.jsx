import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

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
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

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

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 " />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/logowebp/logonuevo.png"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/assets/videos webm,mp4/Diseño sin título.gif" type="video/webm" />
          <source src="/assets/videos webm,mp4/Diseño sin título.gif" type="GIF" />
        </video>
      </div>

       {/* Contenido principal */}
       <div className="container mx-auto px-4 z-20 text-center">
        {/* Título principal con icono de mano */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-5xl"
          >
            👋
          </motion.span>
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Hola, soy Pablo Proboste
          </h1>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Diseñador y Desarrollador Web Frontend
        </motion.h2>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Creando experiencias web únicas y memorables con pasión por el diseño y la innovación.
        </motion.p>



        {/* Botones de acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="portfolio" smooth={true} duration={500} className="group relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Ver Proyectos
            </motion.button>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="group relative">
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
      </div>

      
    </motion.section>
  );
};

export default Hero;
