import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

function CardsProjects({ project, index }) {
  // Función para determinar el tipo de video según su extensión
  const getVideoType = (videoUrl) => {
    if (videoUrl.endsWith('.webm')) return 'video/webm';
    if (videoUrl.endsWith('.mp4')) return 'video/mp4';
    return 'video/mp4';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      {/* Video del proyecto */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-48 object-cover"
      >
        <source src={project.video} type={getVideoType(project.video)} />
        Tu navegador no soporta el elemento de video.
      </video>
      
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Título y barra de progreso */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className="absolute left-0 top-0 h-full bg-green-500 rounded-full"
              style={{ width: `${project.completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {project.completionPercentage === 100 ? "Finalizado" : `Progreso: ${project.completionPercentage}%`}
          </p>
        </div>

        {/* Tecnologías utilizadas */}
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tech.map((tech, i) => (
            <div key={i} title={tech.name} className="tooltip">
              {tech.icon}
            </div>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex justify-between mt-4">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 hover:text-blue-800 transition-colors flex items-center"
          >
            <FaGithub className="inline mr-2" /> Código
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition-colors"
          >
             →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardsProjects;
