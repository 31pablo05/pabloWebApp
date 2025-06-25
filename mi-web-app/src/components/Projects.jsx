// Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import MaestraPatagonica from './MaestraPatagonica';
import SPAChacraPichirayen from './SPAChacraPichirayen';
import WebAppNutricionista from './WebAppNutricionista';
import AppPedidosPrepizzas from './AppPedidosPrepizzas';
import WebAppFederico from './WebAppFederico';
import AppOsteopatia from './AppOsteopatia';
import AplicacionDeTareas from './AplicacionDeTareas';
import AppConvertidorFormatos from './AppConvertidorFormatos';
import WebAppMYBeautyStudy from './WebAppMYBeautyStudy';
import LandingMicropigmentacion from './LandingMicropigmentacion';

const projects = [
  <MaestraPatagonica key="maestra" />,
  <SPAChacraPichirayen key="spachacra" />,
  <WebAppNutricionista key="nutricionista" />,
  <AppPedidosPrepizzas key="prepizzas" />,
  <WebAppFederico key="federico" />,
  <AppOsteopatia key="osteopatia" />,
  <AplicacionDeTareas key="tareas" />,
  <AppConvertidorFormatos key="convertidor" />,
  <WebAppMYBeautyStudy key="beauty" />,
  <LandingMicropigmentacion key="micropigmentacion" />,
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.1 } })
};

function Projects() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 bg-gradient-to-br from-blue-500/80 via-purple-700/80 to-indigo-900/90 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          Mis Proyectos
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full my-6 mx-auto" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
        >
          {projects.map((Project, i) => (
            <motion.div
              key={Project.key || i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-400/30 p-4 transition-all duration-300 flex flex-col justify-between hover:bg-white/20 hover:border-blue-400/50"
            >
              {Project}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
