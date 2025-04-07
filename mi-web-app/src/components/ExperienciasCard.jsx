import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const ExperienciasCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="card bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-700"
    >
      <IoCodeSlashOutline className="text-4xl mb-4" />
      <h3 className="text-2xl mb-4 text-center">Experiencias</h3>
      <div className="flex flex-wrap gap-2">
        <FaHtml5 className="text-6xl text-orange-500" title="HTML5" />
        <FaCss3Alt className="text-6xl text-blue-500" title="CSS3" />
        <FaJs className="text-6xl text-yellow-400" title="JavaScript" />
        <FaReact className="text-6xl text-blue-400" title="React" />
        <SiVite className="text-6xl text-purple-500" title="Vite" />
        <SiTailwindcss className="text-6xl text-cyan-400" title="Tailwind CSS" />
        <FaGithub className="text-6xl text-white-300" title="GitHub" />
        <SiPython className="text-6xl text-yellow-300" title="Python" />
        <FaNodeJs className="text-6xl text-green-500" title="Node.js" />
        <SiMongodb className="text-6xl text-green-500" title="MongoDB" />
      </div>
    </motion.div>
  );
};

export default ExperienciasCard;
