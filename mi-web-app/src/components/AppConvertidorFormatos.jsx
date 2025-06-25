// AppConvertidorFormatos.jsx
import React, { useState } from 'react';
import { FaHtml5, FaReact, FaJs } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AppConvertidorFormatos = () => {
  const [loaded, setLoaded] = useState(false);

  const project = {
    name: 'Web app convertidor de videos a mp3',
    video: '/videos/ecommerce.mp4',
    repoLink: 'https://github.com/tuusuario/ecommerce-react',
    liveLink: 'https://tuusuario.github.io/ecommerce-react',
    // Valor del porcentaje de completado
    progress: 0,
    tech: [
      { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
      { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' },
      { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' },
    ],
  };
  const progressStatus = project.progress === 100 ? 'Finalizado' : 'En producción';
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="card relative bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-blue-400/20"
    >
      <div className="relative h-48 sm:h-56 md:h-64">
        <motion.img
          src="/assets/images/placeholder.jpg"
          alt="Vista previa de Web app convertidor de videos a mp3"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: loaded ? 0 : 1 }}
        />
        <motion.video
          src={project.video}
          poster="/assets/images/placeholder.jpg"
          autoPlay
          loop
          muted
          aria-label="Video demo de Web app convertidor de videos a mp3"
          title="Video demo de Web app convertidor de videos a mp3"
          onLoadedData={() => setLoaded(true)}
          className={`relative w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
        />
      </div>
      <div className="p-4">
        <h3
          className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.85), 0 1px 0 #000' }}
        >
          {project.name}
        </h3>
        <p className="text-sm text-gray-700 mb-1 font-semibold">
          Estado: <span className="text-gray-900">{progressStatus}</span>
        </p>
        <div className="w-full bg-gray-300/70 rounded-full h-4 mb-4 shadow-inner overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full text-center text-xs text-white font-bold flex items-center justify-center transition-all duration-1000 ease-out"
            style={{ width: `${project.progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${project.progress}%` }}
          >
            {project.progress}%
          </motion.div>
        </div>
        <div className="flex space-x-2 mb-4">
          {project.tech.map((tech, idx) => (
            <div key={idx} title={tech.name} aria-label={tech.name} className="bg-white/40 rounded-lg p-1 shadow">
              {tech.icon}
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-2">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Repositorio en GitHub"
            title="Repositorio en GitHub"
          >
            Repo
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Ver sitio en vivo"
            title="Ver sitio en vivo"
          >
            Ver
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AppConvertidorFormatos;
