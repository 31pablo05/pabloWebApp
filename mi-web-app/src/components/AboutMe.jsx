import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si';
import { IoSchoolOutline, IoPersonOutline, IoCodeSlashOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Configuración de animaciones (fadeIn)
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Funciones para el modal
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Data para las tarjetas de información
  const cards = [
    {
      id: 1,
      title: "Perfil",
      icon: <IoPersonOutline className="text-4xl mb-4" />,
      content: (
        <div className="text-gray-300 space-y-2">
          <p>
            Soy un apasionado del desarrollo web enfocado en crear experiencias de usuario excepcionales.
          </p>
          <a href="#about" className="text-blue-400 hover:underline text-sm">
            Ver más sobre mí
          </a>
        </div>
      )
    },
    {
      id: 2,
      title: "Estudios",
      icon: <IoSchoolOutline className="text-4xl mb-4" />,
      content: (
        <div className="text-gray-300 space-y-2">
          <p className="font-medium">
            Formación continua en desarrollo web a través de plataformas como Coursera y Google.
          </p>
          <div className="space-y-1">
            <p 
              className="cursor-pointer hover:underline"
              onClick={() => openModal({
                title: "IBM Front-End Developer Professional Certificate (2023 - 2024)",
                issuer: "Coursera, dictado por IBM",
                image: "/assets/certificates/ibm_cert.webp",
                description: "Certificación que valida conocimientos avanzados en desarrollo Front-End."
              })}
            >
              <strong>IBM Front-End Developer Professional Certificate (2023 - 2024)</strong>
              <br />
              <span className="text-sm">Coursera, dictado por IBM</span>
            </p>
            <p className="text-sm">
              Cursos en: HTML, CSS, JavaScript, Git & GitHub, Ingeniería de Software, Desarrollo con React, Aplicaciones Nativas en la Nube, Diseño UI/UX, Proyecto Final de Desarrollo Front-end y Desarrollo Web Intermedio.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Experiencias",
      icon: <IoCodeSlashOutline className="text-4xl mb-4" />,
      content: (
        <div className="flex flex-wrap gap-2">
          <FaHtml5 className="text-6xl text-orange-500" title="HTML5" />
          <FaCss3Alt className="text-6xl text-blue-500" title="CSS3" />
          <FaJs className="text-6xl text-yellow-400" title="JavaScript" />
          <FaReact className="text-6xl text-blue-400" title="React" />
          <SiVite className="text-6xl text-purple-500" title="Vite" />
          <SiTailwindcss className="text-6xl text-cyan-400" title="Tailwind CSS" />
          <FaGithub className="text-6xl text-white-300" title="GitHub" />
          <SiPython className="text-6xl text-yellow-300" title="Python" />
          <FaNodeJs className="text-6xl text-green-500" title="Node.js" />
          <SiMongodb className="text-6xl text-green-500" title="MongoDB" />
        </div>
      )
    }
  ];

  return (
    <motion.section 
      id="about" 
      initial="initial"
      animate="animate"
      className="py-12 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Sección de perfil y descripción */}
        <motion.div {...fadeIn} className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Imagen de perfil con efecto hover */}
          <div className="relative w-3/4 sm:w-1/2 lg:w-1/3 max-w-xs mx-auto lg:mx-0 rounded-lg">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              src="/assets/images webp/pabloperfil2.webp"
              alt="Foto de Pablo"
              className="w-full h-auto object-cover border-gray-700 rounded-lg shadow-lg hover:shadow-[0px_0px_20px_rgba(55,146,153,0.8)] transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-lg" />
          </div>

          {/* Información principal */}
          <motion.div {...fadeIn} className="info flex-1 space-y-4">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              ¡Hola, soy Pablo!
            </h2>
            <div className="text-lg text-justify lg:text-left leading-relaxed">
              <p>
                Soy un desarrollador web autodidacta de 32 años, radicado en Trelew, Chubut, en el corazón de la Patagonia argentina. Durante los últimos dos años, he invertido en mi crecimiento profesional a través de cursos y certificaciones en plataformas como Coursera y Google –con formaciones dictadas por Meta e IBM–, contenidos en YouTube y, por supuesto, utilizando herramientas de inteligencia artificial como ChatGPT para explorar y dominar nuevas tecnologías.
              </p>
              <p>
                Mi pasión se centra en el desarrollo de web apps y en el diseño detallado de páginas, combinando estética y funcionalidad. Trabajo con React, JSX, JavaScript, CSS y Tailwind CSS, y utilizo herramientas como Vite y npm para gestionar mis proyectos y optimizar su rendimiento, lo que contribuye a una mejor experiencia del usuario y, en consecuencia, puede favorecer el SEO.
              </p>
              <p>
                Me considero un programador artesanal, siempre listo para enfrentar nuevos desafíos, incluso en áreas desconocidas. La resolución de problemas es mi motor, y disfruto del proceso de aprendizaje continuo, lo que ahora me impulsa a adentrarme en el mundo del backend para complementar mi expertise.
              </p>
              <p>
                Fuera del código, también me apasiona la edición de videos e imágenes, utilizando herramientas como Canva y Clipchamp para dar vida a ideas visuales impactantes. Cada proyecto es una oportunidad para cuidar hasta el más mínimo detalle y ofrecer diseños que realmente destaquen.
              </p>
              <p className="font-semibold">
                Si buscas a alguien comprometido, en constante evolución y capaz de transformar ideas en experiencias digitales excepcionales, ¡estoy aquí para ayudarte a llevar tu web al siguiente nivel!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de tarjetas informativas */}
        <motion.div {...fadeIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

        {/* Botones de acción: Contacto y Descargar CV */}
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
            href="/assets/Currículum Vitae castellano (2).pdf"
            download="CV_Pablo_Proboste.pdf"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>📄</span> Descargar CV
          </motion.a>
        </motion.div>
      </div>

      {/* Modal para mostrar certificaciones */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-gray-800 p-6 rounded-lg relative max-w-md w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-xl">&times;</button>
            {modalContent && (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
                <img src={modalContent.image} alt={modalContent.title} className="mx-auto mb-4 rounded" />
                <p className="text-gray-300 mb-4">{modalContent.issuer}</p>
                <p className="text-gray-400 text-sm">{modalContent.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default AboutMe;
