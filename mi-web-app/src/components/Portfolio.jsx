import React from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiMongodb } from "react-icons/si";

import { FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import nutricionista from '../assets/nutricionista.png';
import tienda from '../assets/Captura.png';
import fotografo from '../assets/portfolio.png';
import pichirayen from '../assets/pichirayen.webp';
import appPedidos from '../assets/appPedidos.webp';

function Portfolio() {
  const projects = [
    {
      name: 'Tienda Online',
      image: tienda,
      repoLink: 'https://github.com/31pablo05/MaestraPatagonica',
      liveLink: 'https://maestra-patagonica.vercel.app/',
      tech: [
        <FaHtml5 className="text-3xl text-orange-600" />,
        <FaReact className="text-3xl text-blue-400" />, // React
        <SiVite className="text-3xl text-purple-600" />, // Vite
        <SiTailwindcss className="text-3xl text-blue-500" />, // Tailwind CSS
        <FaNodeJs className="text-3xl text-green-600" />, // Node.js
        <SiMongodb className="text-3xl text-green-500" />, // MongoDB
      ],
    },
    {
      name: 'Landing Page chacra PichiRayen',
      image: pichirayen,
      repoLink: 'https://github.com/tuusuario/landing-page',
      liveLink: 'https://pichi-rayen.vercel.app/',
      tech: [
        <FaHtml5 className="text-3xl text-orange-600" />, // HTML5
        <FaCss3Alt className="text-3xl text-blue-600" />, // CSS3
        <FaJs className="text-3xl text-yellow-500" />, // JavaScript
        <FaReact className="text-3xl text-cyan-500" /> // React
      ],
      
    },
    {
      name: 'Web App Nutricionista',
      image: nutricionista, // Ruta corregida
      repoLink: 'https://github.com/31pablo05/PamelaWeissberg',
      liveLink: 'https://pamela-weissberg.vercel.app/',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />,
            <FaReact className="text-3xl text-cyan-500" />,
            <SiTailwindcss className="text-3xl text-blue-500" />,
            <FaJs className="text-3xl text-yellow-500" />],
    },
    {
      name: 'app pedidos panes y prepizzas',
      image: appPedidos,
      repoLink: 'https://github.com/tuusuario/travel-blog',
      liveLink: 'https://tuusuario.github.io/travel-blog',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />,
         <FaCss3Alt className="text-3xl text-blue-600" />, 
         <FaJs className="text-3xl text-yellow-500" />,
         <FaNodeJs className="text-3xl text-green-600" />,
         <SiMongodb className="text-3xl text-green-500" />,

        ],
    },
    {
      name: 'Portfolio Profesional',
      image: fotografo,
      repoLink: 'https://github.com/31pablo05/fede.F',
      liveLink: 'https://fede-f.vercel.app/',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />,
         <SiTailwindcss className="text-3xl text-blue-600" />,
          <FaJs className="text-3xl text-yellow-500" />,
         <FaReact className="text-3xl text-cyan-500" />],
    },
    {
      name: 'app turnos medicos',
      image: 'path/to/admin-dashboard-image.png',
      repoLink: 'https://github.com/tuusuario/admin-dashboard',
      liveLink: 'https://tuusuario.github.io/admin-dashboard',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaCss3Alt className="text-3xl text-blue-600" />, <FaJs className="text-3xl text-yellow-500" />, <FaReact className="text-3xl text-cyan-500" />],
    },
    {
      name: 'Aplicación de Tareas',
      image: 'path/to/todolist-app-image.png',
      repoLink: 'https://github.com/tuusuario/todolist-app',
      liveLink: 'https://tuusuario.github.io/todolist-app',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaCss3Alt className="text-3xl text-blue-600" />, <FaJs className="text-3xl text-yellow-500" />],
    },
    {
      name: 'app web convertidor de formatos y descarga de videos a mp3',
      image: 'path/to/ecommerce-image.png',
      repoLink: 'https://github.com/tuusuario/ecommerce-react',
      liveLink: 'https://tuusuario.github.io/ecommerce-react',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaReact className="text-3xl text-cyan-500" />, <FaJs className="text-3xl text-yellow-500" />],
    },
    // Otros proyectos...
  ];

  return (
    <section
      id="portfolio"
      className="h-auto flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800 text-white px-6 py-12"
    >
      <h1 className="text-4xl mb-8 text-center">Mi Portafolio</h1>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={project.image} alt={`Vista previa del proyecto ${project.name}`} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl text-gray-800 mb-2 text-center">{project.name}</h2>

              {/* Iconos de Tecnologías */}
              <div className="flex gap-4 mb-4 justify-center">
                {project.tech.map((icon, i) => (
                  <div key={i}>{icon}</div>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex gap-6 mb-4 justify-center">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                  aria-label={`Ver repositorio del proyecto ${project.name}`}
                >
                  Repositorio
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                  aria-label={`Ver sitio web del proyecto ${project.name}`}
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-center">No hay proyectos disponibles en este momento.</p>
      )}
    </section>
  );
}

export default Portfolio;
