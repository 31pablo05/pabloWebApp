import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import nutricionista from '../assets/nutricionista.png';
import tienda from '../assets/Captura.png';
import fotografo from '../assets/portfolio.png';


function Portfolio() {
  const projects = [
    {
      name: 'Tienda Online',
      image: tienda,
      repoLink: 'https://github.com/tuusuario/tienda-online',
      liveLink: 'https://tuusuario.github.io/tienda-online',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaCss3Alt className="text-3xl text-blue-600" />, <FaJs className="text-3xl text-yellow-500" />],
    },
    {
      name: 'Landing Page',
      image: 'path/to/landing-page-image.png',
      repoLink: 'https://github.com/tuusuario/landing-page',
      liveLink: 'https://tuusuario.github.io/landing-page',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaCss3Alt className="text-3xl text-blue-600" />],
    },
    {
      name: 'Web App Nutricionista',
      image: nutricionista, // Ruta corregida
      repoLink: 'https://github.com/tuusuario/personal-web',
      liveLink: 'https://tuusuario.github.io/personal-web',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaReact className="text-3xl text-cyan-500" />, <FaGithub className="text-3xl text-gray-800" />],
    },
    {
      name: 'Blog de Viajes',
      image: 'path/to/travel-blog-image.png',
      repoLink: 'https://github.com/tuusuario/travel-blog',
      liveLink: 'https://tuusuario.github.io/travel-blog',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaCss3Alt className="text-3xl text-blue-600" />, <FaJs className="text-3xl text-yellow-500" />],
    },
    {
      name: 'Portfolio Profesional',
      image: fotografo,
      repoLink: 'https://github.com/tuusuario/professional-portfolio',
      liveLink: 'https://tuusuario.github.io/professional-portfolio',
      tech: [<FaHtml5 className="text-3xl text-orange-600" />, <FaReact className="text-3xl text-cyan-500" />],
    },
    {
      name: 'Dashboard Admin',
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
      name: 'E-commerce React',
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
