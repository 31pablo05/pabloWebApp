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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.name}</h3>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {project.tech.map((tech, i) => (
            <div key={i} title={tech.name} className="tooltip">
              {tech.icon}
            </div>
          ))}
        </div>

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
            Live →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardsProjects;
