import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import perfilImage from '../assets/about perfil.png';
import backgroundVideoMp4 from '../assets/fondoome2.mp4'; // Ruta del video MP4
import backgroundVideoWebM from '../assets/fondoome2_1.webm'; // Ruta del video WebM

function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex justify-center items-center text-white"
    >
      {/* Overlay oscuro para resaltar el texto */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1"></div>

      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
       <source src={backgroundVideoWebM} type="video/webm" />
        <source src={backgroundVideoMp4} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Contenido */}
      <div className="relative z-10 container flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-xl px-4 space-y-8 lg:space-y-0">
        {/* Texto de presentación */}
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-8xl font-extrabold mb-6 text-shadow-lg tracking-wide">
            Hola{' '}
            <span className="inline-block animate-wave">
              👋
            </span>
            {' '}soy{' '}
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#D580FF] text-transparent bg-clip-text animate-pulse">
              Pablo Proboste
            </span>
          </h1>

          <p className="text-4xl font-medium mb-8 text-gray-200">
            Un apasionado{' '}
            <span className="text-pink-400 font-semibold">Desarrollador Frontend</span>
          </p>

          {/* Botones de redes sociales */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
  <button className="w-48 px-6 py-4 bg-gray-800 text-white rounded-full flex items-center justify-center space-x-3 shadow-[0_0_15px_#8A2BE2] hover:scale-110 hover:border-4 hover:border-[#8A2BE2] hover:shadow-[0_0_30px_#8A2BE2] focus:outline-none active:border-[#D580FF] active:border-4 active:border-gradient-to-r active:from-[#8A2BE2] active:to-[#00FFFF] transition-all duration-300">
    <FaGithub size={32} />
    <span className="text-lg font-semibold">GitHub</span>
  </button>
</a>
<a href="mailto:tuemail@gmail.com" target="_blank" rel="noopener noreferrer">
  <button className="w-48 px-6 py-4 bg-gray-800 text-white rounded-full flex items-center justify-center space-x-3 shadow-[0_0_15px_#8A2BE2] hover:scale-110 hover:border-4 hover:border-[#8A2BE2] hover:shadow-[0_0_30px_#8A2BE2] focus:outline-none active:border-[#D580FF] active:border-4 active:border-gradient-to-r active:from-[#8A2BE2] active:to-[#00FFFF] transition-all duration-300">
    <FaEnvelope size={32} />
    <span className="text-lg font-semibold">Email</span>
  </button>
</a>
<a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer">
  <button className="w-48 px-6 py-4 bg-gray-800 text-white rounded-full flex items-center justify-center space-x-3 shadow-[0_0_15px_#8A2BE2] hover:scale-110 hover:border-4 hover:border-[#8A2BE2] hover:shadow-[0_0_30px_#8A2BE2] focus:outline-none active:border-[#D580FF] active:border-4 active:border-gradient-to-r active:from-[#8A2BE2] active:to-[#00FFFF] transition-all duration-300">
    <FaLinkedin size={32} />
    <span className="text-lg font-semibold">LinkedIn</span>
  </button>
</a>
<a href="https://www.instagram.com/tuusuario/" target="_blank" rel="noopener noreferrer">
  <button className="w-48 px-6 py-4 bg-gray-800 text-white rounded-full flex items-center justify-center space-x-3 shadow-[0_0_15px_#8A2BE2] hover:scale-110 hover:border-4 hover:border-[#8A2BE2] hover:shadow-[0_0_30px_#8A2BE2] focus:outline-none active:border-[#D580FF] active:border-4 active:border-gradient-to-r active:from-[#8A2BE2] active:to-[#00FFFF] transition-all duration-300">
    <FaInstagram size={32} />
    <span className="text-lg font-semibold">Instagram</span>
  </button>
</a>

          </div>
        </div>

        {/* Imagen de perfil alineada a la derecha */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <img
            src={perfilImage}
            alt="Pablo Proboste"
            className="w-full h-auto rounded-[10px] shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
