import React, { useMemo } from 'react';
import CardsProjects from './CardsProjects';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiMongodb } from "react-icons/si";

function Projects() {
  const projects = useMemo(() => [
    {
      name: 'Tienda Online',
      video: '/videos/tienda-online.mp4', // Ruta al video en public/videos/
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
      video: '/videos/landing-page.mp4',
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
      video: '/videos/nutricionista.mp4',
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
      video: '/videos/app-pedidos.mp4',
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
      video: '/videos/portfolio.mp4',
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
      name: 'App web Osteopatia',
      video: '/assets/videos webm,mp4/videosProjects/WebOsteopatia.webm',
      repoLink: 'https://github.com/31pablo05/appFranciscoTorres',
      liveLink: 'https://app-francisco-torres.vercel.app/',
      tech: [
        { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
        { icon: <SiTailwindcss className="text-3xl text-blue-600" />, name: 'Tailwind' },
        { icon: <SiVite className="text-3xl text-purple-600" />, name: 'Vite' },
        { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' }
      ],
    },
    {
      name: 'Aplicación de Tareas',
      video: '/videos/todolist-app.mp4',
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
      video: '/videos/ecommerce.mp4',
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
            <CardsProjects key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
