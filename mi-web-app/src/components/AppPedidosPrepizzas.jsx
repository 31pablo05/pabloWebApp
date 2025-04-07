// AppPedidosPrepizzas.jsx
import React, { useState } from 'react';
import { FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiRender } from 'react-icons/si';
import { FaJs } from 'react-icons/fa';

const AppPedidosPrepizzas = () => {
  const [loaded, setLoaded] = useState(false);

  const project = {
    name: 'app pedidos panes y prepizzas',
    video: '/assets/videos webm,mp4/videosProjects/appPedidos.mp4',
    repoLink: 'https://github.com/31pablo05/Prepizzas',
    liveLink: 'https://prepizzas.vercel.app/',
    tech: [
      { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: 'HTML5' },
      { icon: <SiTailwindcss className="text-3xl text-blue-500" />, name: 'Tailwind' },
      { icon: <FaJs className="text-3xl text-yellow-500" />, name: 'JavaScript' },
      { icon: <FaReact className="text-3xl text-cyan-500" />, name: 'React' },
      { icon: <SiVite className="text-3xl text-purple-600" />, name: 'Vite' },
      { icon: <FaNodeJs className="text-3xl text-green-600" />, name: 'Node.js' },
      { icon: <SiRender className="text-3xl text-black" />, name: 'Render' },
    ],
  };

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

export default AppPedidosPrepizzas;
