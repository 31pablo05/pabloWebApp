import React from 'react';
import { motion } from 'framer-motion';

const ProfileInfo = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div {...fadeIn} className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Imagen de perfil con efecto hover */}
      <div className="relative w-3/4 sm:w-1/2 lg:w-1/3 max-w-xs mx-auto lg:mx-0 rounded-lg">
        <motion.img
          whileHover={{ scale: 1.05, rotate: 1 }}
          src="/assets/images webp/pablo-proboste2.png"
          alt="Foto de Pablo"
          className="w-full h-auto object-cover border-gray-700 rounded-lg shadow-lg hover:shadow-[0px_0px_20px_rgba(55,146,153,0.8)] transition-all"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-lg" />
      </div>

      {/* Información principal */}
      <motion.div {...fadeIn} className="info flex-1 space-y-4">
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          ¡Hola, soy Pablo!
        </h2>
        <div className="text-lg text-justify lg:text-left leading-relaxed">
          <p>
            Soy un desarrollador web autodidacta de 32 años, radicado en Trelew, Chubut, en el corazón de la Patagonia argentina. Durante los últimos dos años, he invertido en mi crecimiento profesional a través de cursos y certificaciones en plataformas como Coursera y Google con formaciones dictadas por Meta e IBM, contenidos en YouTube y, por supuesto, utilizando herramientas de inteligencia artificial como ChatGPT para explorar y dominar nuevas tecnologías.
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
  );
};

export default ProfileInfo;
