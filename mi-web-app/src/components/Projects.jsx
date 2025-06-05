// Projects.jsx
import React from 'react';
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
function Projects() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MaestraPatagonica />
          <SPAChacraPichirayen />
          <WebAppNutricionista />
          <AppPedidosPrepizzas />
          <WebAppFederico />
          <AppOsteopatia />
          <AplicacionDeTareas />
          <AppConvertidorFormatos />
          <WebAppMYBeautyStudy />
          <LandingMicropigmentacion />
          {/* Agrega aquí otros proyectos si los hay */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
