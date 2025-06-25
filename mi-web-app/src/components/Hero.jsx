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

// Componente para botón de acción
const ActionButton = ({ to, children, ariaLabel }) => (
  <Link to={to} smooth={true} duration={500} className="group relative">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-shadow bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md bg-opacity-70 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  </Link>
);

// Componente para icono social
const SocialIcon = ({ link }) => (
  <motion.a
    key={link.name}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className={`text-white drop-shadow-lg transition-colors duration-300 ${link.color}`}
    aria-label={`Visitar ${link.name}`}
  >
    {link.icon}
  </motion.a>
);

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Loader para el video
  React.useEffect(() => {
    if (isVideoLoaded) {
      const timeout = setTimeout(() => setShowLoader(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isVideoLoaded]);

  return (
    <header aria-label="Sección principal de presentación">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20" // Agrega padding top para dejar espacio al navbar
      >
        {/* Video de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-950/80 to-purple-900/80" />
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
            aria-label="Video de fondo animado"
          >
            <source src="/assets/videos webm,mp4/fondo3.webm" type="video/webm" />
            <source src="/assets/videos webm,mp4/fondo3.mp4" type="video/mp4" />
          </video>
          {showLoader && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin bg-white/10" aria-label="Cargando video de fondo" />
            </div>
          )}
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center justify-center min-h-screen">
          {/* Imagen de perfil con efecto glass y pulse */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            animate={{ boxShadow: [
              '0 0 0 0 rgba(59,130,246,0.7)',
              '0 0 0 16px rgba(59,130,246,0)',
              '0 0 0 0 rgba(59,130,246,0.7)'
            ] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <div className="relative p-2 rounded-full bg-white/10 backdrop-blur-lg shadow-2xl">
              <img
                src="/assets/images webp/pablo-proboste2.png"
                alt="Retrato de Pablo Proboste, desarrollador web frontend"
                className="w-48 h-48 rounded-full border-4 border-white shadow-md object-cover"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse" aria-label="En línea" />
            </div>
          </motion.div>

          {/* Título principal con icono de mano */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="mt-[-40px] text-5xl"
              aria-label="Saludo animado"
            >
              👋
            </motion.span>
            <h1 className="mt-[-40px] text-glow text-4xl md:text-7xl font-bold bg-clip-text bg-gradient-to-r from-white to-blue-800 to-purple-400 text-transparent drop-shadow-lg">
              Hola, soy Pablo Proboste
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-glow text-2xl md:text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-800 to-purple-400 drop-shadow-md"
          >
            Diseñador y Desarrollador Web Frontend
          </motion.h2>

          {/* Descripción */}
          <motion.p
            variants={itemVariants}
            className="rounded-2xl bg-white/20 backdrop-blur-md text-shadow text-xl md:text-2xl text-white mb-40 max-w-2xl mx-auto text-justify p-6 shadow-lg border border-white/20"
          >
            Creando experiencias web únicas y memorables con pasión por el diseño y la innovación.
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <ActionButton to="portfolio" ariaLabel="Ver proyectos de Pablo Proboste">Ver Proyectos</ActionButton>
            <ActionButton to="contact" ariaLabel="Contactar a Pablo Proboste">Contactar</ActionButton>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 rounded-lg bg-gradient-to-r from-blue-400/60 to-purple-600/60 text-shadow text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto p-4 backdrop-blur-md shadow-lg border border-white/20"
            aria-label="Redes sociales de Pablo Proboste"
          >
            {socialLinks.map((link) => (
              <SocialIcon link={link} key={link.name} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </header>
  );
};

export default Hero;