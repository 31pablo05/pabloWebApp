// AppConvertidorFormatos.jsx
import React, { useState } from 'react';
import { FaHtml5, FaReact, FaJs } from 'react-icons/fa';

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
    <div className="card relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        {!loaded && (
          <img
            src="/assets/images/placeholder.jpg"
            alt="Cargando..."
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <video
          src={project.video}
          poster="/assets/images/placeholder.jpg"
          autoPlay
          loop
          muted
          onLoadedData={() => setLoaded(true)}
          className="relative w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                {/* Estado del progreso arriba de la barra */}
                <p className="text-sm text-gray-600 mb-1 font-semibold">
          Estado: <span className="text-gray-800">{progressStatus}</span>
        </p>

        {/* Barra de progreso estilizada */}
        <div className="w-full bg-gray-300 rounded-full h-4 mb-4 shadow-inner overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-full text-center text-xs text-white font-bold transition-all duration-1000 ease-out flex items-center justify-center"
            style={{ width: `${project.progress}%` }}
          >
            {project.progress}%
          </div>
        </div>

        <div className="flex space-x-2 mb-4">
          {project.tech.map((tech, idx) => (
            <div key={idx} title={tech.name}>
              {tech.icon}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Repo
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppConvertidorFormatos;
