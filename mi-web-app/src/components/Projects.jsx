import React, { useMemo } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

function Projects() {
  const projects = useMemo(() => [
    {
      name: 'Tienda Online',
      image: '/Captura.png', // imagen en public/
      repoLink: 'https://github.com/31pablo05/MaestraPatagonica',
      liveLink: 'https://maestra-patagonica.vercel.app/',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaReact className="text-3xl text-blue-400" />, name: 'React' },
        { icon: <SiVite className="text-3xl text-purple-600" />, name: 'Vite' },
        { icon: <SiTailwindcss className="text-3xl text-blue-500" />, name: 'Tailwind' },
        { icon: <FaNodeJs className="text-3xl text-green-600" />, name: 'Node.js' },
        { icon: <SiMongodb className="text-3xl text-green-500" />, name: 'MongoDB' },
      ],
    },
    {
      name: 'Landing Page chacra PichiRayen',
      image: '/pichirayen.webp',
      repoLink: 'https://github.com/tuusuario/landing-page',
      liveLink: 'https://pichi-rayen.vercel.app/',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-3xl text-blue-600" />, name: 'CSS3' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' },
        { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' }
      ],
    },
    {
      name: 'Web App Nutricionista',
      image: '/nutricionista.png',
      repoLink: 'https://github.com/31pablo05/PamelaWeissberg',
      liveLink: 'https://pamela-weissberg.vercel.app/',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' },
        { icon: <SiTailwindcss className="text-3xl text-blue-500" />, name: 'Tailwind' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' }
      ],
    },
    {
      name: 'app pedidos panes y prepizzas',
      image: '/appPedidos.webp',
      repoLink: 'https://github.com/tuusuario/travel-blog',
      liveLink: 'https://tuusuario.github.io/travel-blog',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-3xl text-blue-600" />, name: 'CSS3' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' },
        { icon: <FaNodeJs className="text-3xl text-green-600" />, name: 'Node.js' },
        { icon: <SiMongodb className="text-3xl text-green-500" />, name: 'MongoDB' },
      ],
    },
    {
      name: 'Portfolio Profesional',
      image: '/portfolio.png',
      repoLink: 'https://github.com/31pablo05/fede.F',
      liveLink: 'https://fede-f.vercel.app/',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <SiTailwindcss className="text-3xl text-blue-600" />, name: 'Tailwind' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' },
        { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' }
      ],
    },
    {
      name: 'app turnos medicos',
      image: '/admin-dashboard-image.png',
      repoLink: 'https://github.com/tuusuario/admin-dashboard',
      liveLink: 'https://tuusuario.github.io/admin-dashboard',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-3xl text-blue-600" />, name: 'CSS3' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' },
        { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' }
      ],
    },
    {
      name: 'Aplicación de Tareas',
      image: '/todolist-app-image.png',
      repoLink: 'https://github.com/tuusuario/todolist-app',
      liveLink: 'https://tuusuario.github.io/todolist-app',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaCss3Alt className="text-3xl text-blue-600" />, name: 'CSS3' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' }
      ],
    },
    {
      name: 'app web convertidor de formatos y descarga de videos a mp3',
      image: '/ecommerce-image.png',
      repoLink: 'https://github.com/tuusuario/ecommerce-react',
      liveLink: 'https://tuusuario.github.io/ecommerce-react',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' },
        { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' }
      ],
    },
    // Otros proyectos...
  ], []);

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Mis Proyectos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              
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
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaGithub className="inline mr-2" /> Código
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
