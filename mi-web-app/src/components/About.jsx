import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si'; // Importamos los íconos de Vite y Tailwind
import profilePhoto from '../assets/Diseño sin título (3).png';
import cvPDF from '../assets/Currículum Vitae ingles.8ab22d8723940851233c (1).pdf';
import { motion } from 'framer-motion'; // Para animaciones
import { IoSchoolOutline, IoPersonOutline, IoCodeSlashOutline } from 'react-icons/io5';
import { FaNodeJs } from 'react-icons/fa';
const About = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuración de animaciones
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Data para las tarjetas
  const cards = [
    {
      id: 1,
      title: "Perfil",
      icon: <IoPersonOutline className="text-4xl mb-4" />,
      content: (
        <p className="text-gray-300">
          Soy un apasionado del desarrollo web con enfoque en crear experiencias de usuario excepcionales.
        </p>
      )
    },
    {
      id: 2,
      title: "Estudios",
      icon: <IoSchoolOutline className="text-4xl mb-4" />,
      content: (
        <p className="text-gray-300">
          Formación continua en desarrollo web a través de plataformas como Coursera y proyectos prácticos.
          IBM Front-End Developer Professional Certificate (2023 - 2024)
Coursera, Dictado por IBM

Introducción al Desarrollo Web: HTML, CSS, JavaScript
Introducción a Git y GitHub
Introducción a la Ingeniería de Software
Desarrollo de Aplicaciones Front-end con React
Desarrollo de Aplicaciones Nativas en la Nube
Diseño de Interfaces y Experiencias de Usuario (UI/UX)
Proyecto Final de Desarrollo Front-end
Desarrollo Web y Front-end Intermedio

        </p>
      )
    },
    {
      id: 3,
      title: "Experiencias",
      icon: <IoCodeSlashOutline className="text-4xl mb-4" />,
      content: (
        <div className="flex flex-wrap gap-2">
        <FaHtml5 className="text-2xl text-orange-500" />
        <FaCss3Alt className="text-2xl text-blue-500" />
        <FaJs className="text-2xl text-yellow-400" />
        <FaReact className="text-2xl text-blue-400" />
        <SiVite className="text-2xl text-purple-500" />
        <SiTailwindcss className="text-2xl text-cyan-400" />
        <FaGithub className="text-2xl text-gray-300" />
        <SiPython className="text-2xl text-yellow-300" />
        <FaNodeJs className="text-2xl text-green-500" /> {/* Ícono de Node.js */}
        <SiMongodb className="text-2xl text-green-500" /> {/* Ícono de MongoDB */}
      </div>
      )
    }
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      id="about" 
      className="sobre-mi py-12 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Foto de perfil con hover effect mejorado */}
          <div className="relative profile-photo w-3/4 sm:w-1/2 lg:w-1/3 max-w-xs mx-auto lg:mx-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={profilePhoto}
              alt="Foto de perfil"
              className="w-full h-auto object-cover border-4 border-gray-700 rounded-lg shadow-lg hover:shadow-[0px_0px_20px_rgba(55,146,153,0.8)] transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-lg" />
          </div>

          {/* Información principal con animación */}
          <motion.div 
            {...fadeIn}
            className="info flex-1"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <p className="text-lg text-justify lg:text-left">
              Soy un apasionado estudiante de desarrollo front-end con una sólida base en HTML, CSS y conocimientos en React. Estoy comprometido con mi aprendizaje y en constante búsqueda de nuevas tecnologías y funciones en este campo.
            </p>
            <p className="text-lg text-justify lg:text-left mt-4">
              Actualmente, estoy perfeccionando mis habilidades en la plataforma de Coursera y buscando nuevas oportunidades para poner en práctica mis conocimientos.
            </p>
          </motion.div>
        </motion.div>

        {/* Grid de tarjetas con animación */}
        <motion.div 
          {...fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="card bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700"
              onMouseEnter={() => setIsHovered(card.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {card.icon}
              <h3 className="text-2xl mb-4 text-center">{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </motion.div>

        {/* Botón para abrir el modal */}
        <motion.div
          {...fadeIn}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all"
          >
            Jugar
          </motion.button>
        </motion.div>

        {/* Modal con el juego */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg w-3/4 max-w-4xl p-4">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
              >
                X
              </button>
              <iframe
                title="Lumber Jack Game"
                src="https://tbot.xyz/lumber/"
                width="700"
                height="700"
                className="border-4 border-teal-500 rounded-2xl shadow-lg"
              ></iframe>
            </div>
          </div>
        )}

        {/* Botones con efectos mejorados */}
        <motion.div {...fadeIn} className="buttons flex flex-col sm:flex-row justify-center mt-12 gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:pabloproboste64@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>📧</span> Contáctame
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={cvPDF}
            download="CV_Pablo_Proboste.pdf"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>📄</span> Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
