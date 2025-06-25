import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiMongodb, SiElectron, SiGithubcopilot, SiVercel } from 'react-icons/si';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const techs = [
  { icon: FaHtml5, color: 'text-orange-500', label: 'HTML5' },
  { icon: FaCss3Alt, color: 'text-blue-500', label: 'CSS3' },
  { icon: FaJs, color: 'text-yellow-400', label: 'JavaScript' },
  { icon: FaReact, color: 'text-blue-400', label: 'React' },
  { icon: SiVite, color: 'text-purple-500', label: 'Vite' },
  { icon: SiTailwindcss, color: 'text-cyan-400', label: 'Tailwind CSS' },
  { icon: FaGithub, color: 'text-gray-300', label: 'GitHub' },
  { icon: FaNodeJs, color: 'text-green-500', label: 'Node.js' },
  { icon: SiMongodb, color: 'text-green-500', label: 'MongoDB' },
  { icon: SiElectron, color: 'text-blue-300', label: 'Electron' },
  { icon: SiGithubcopilot, color: 'text-emerald-400', label: 'GitHub Copilot' },
  { icon: VscVscode, color: 'text-blue-500', label: 'VS Code' },
  { icon: SiVercel, color: 'text-black', label: 'Vercel' },
];

const ExperienciasCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
      className="card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-blue-400/30 relative overflow-hidden transition-all duration-300"
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl z-0" />
      <div className="relative z-10">
        <IoCodeSlashOutline className="text-4xl mb-4 text-blue-400 drop-shadow" />
        <h3 className="text-2xl mb-4 text-center font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experiencias</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {techs.map(({ icon: Icon, color, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.15, rotate: [0, 8, -8, 0] }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`flex flex-col items-center group`}
            >
              <Icon className={`text-5xl md:text-6xl ${color} drop-shadow-lg group-hover:scale-110 transition-transform`} title={label} />
              <span className="text-xs mt-1 text-gray-200 group-hover:text-blue-300 transition-colors">{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-gray-300 text-sm text-center mt-2">
          Experiencia práctica en desarrollo web moderno, integración de tecnologías y trabajo colaborativo en proyectos reales.
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienciasCard;
