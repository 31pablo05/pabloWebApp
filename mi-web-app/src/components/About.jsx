import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiVite, SiTailwindcss } from 'react-icons/si'; // Importamos los íconos de Vite y Tailwind
import profilePhoto from '../assets/Diseño sin título (3).png';
import cvPDF from '../assets/Currículum Vitae ingles.8ab22d8723940851233c (1).pdf';

const About = () => {
  return (
    <section id="about" className="sobre-mi py-12 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Foto de perfil */}
          <div className="profile-photo w-3/4 sm:w-1/2 lg:w-1/3 max-w-xs mx-auto lg:mx-0">
            <img
              src={profilePhoto}
              alt="Foto de perfil"
              className="w-full h-auto object-cover border-4 border-gray-700 shadow-lg hover:shadow-[0px_0px_20px_rgba(55,146,153,0.8)] transition-shadow"
            />
          </div>

          {/* Información principal */}
          <div className="info flex-1">
            
            <p className="text-lg text-justify lg:text-left">
              Soy un apasionado estudiante de desarrollo front-end con una sólida base en HTML, CSS y conocimientos en React. Estoy comprometido con mi aprendizaje y en constante búsqueda de nuevas tecnologías y funciones en este campo.
            </p>
            <p className="text-lg text-justify lg:text-left mt-4">
              Actualmente, estoy perfeccionando mis habilidades en la plataforma de Coursera y buscando nuevas oportunidades para poner en práctica mis conocimientos.
            </p>
          </div>
        </div>

        {/* Secciones en tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Perfil */}
          <div className="card bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl mb-4 text-center">Perfil</h3>
            <p className="text-lg text-justify">
              Soy un apasionado del desarrollo web, comprometido con el aprendizaje continuo y la exploración de herramientas y tecnologías modernas. 
              Mi objetivo es crear soluciones innovadoras y funcionales que impacten positivamente en los usuarios. Me destaco por mi adaptabilidad, 
              curiosidad, y deseo constante de perfeccionar mis habilidades, convirtiéndome en un valioso miembro en cualquier equipo de desarrollo.
            </p>
          </div>

          {/* Estudios */}
          <div className="card bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl mb-4 text-center">Estudios</h3>
            <ul className="list-disc pl-6 text-justify">
              <li>
                <strong>IBM Front-End Developer (2023 - 2024, IBM Front-End Developer Professional Certificate)</strong> - Coursera Dictado por IBM
                <ul className="list-disc pl-6 mt-2">
                  <li>Introducción al Desarrollo Web con HTML, CSS, JavaScript</li>
                  <li>Introducción a Git y GitHub</li>
                  <li>Introducción a la Ingeniería de Software</li>
                  <li>Desarrollo de Aplicaciones Front-end con React</li>
                  <li>Desarrollo de Aplicaciones Nativas en la Nube</li>
                  <li>Diseño de Interfaces y Experiencias de Usuario (UI/UX)</li>
                  <li>Proyecto Final de Desarrollo Front-end</li>
                  <li>Desarrollo Web y Front-end Intermedio</li>
                </ul>
              </li>
              <li className="mt-4">
                <strong>Meta Front-End Developer Professional Certificate</strong> - Coursera Dictado por Meta
                <ul className="list-disc pl-6 mt-2">
                  <li>Introducción al Desarrollo Front-End</li>
                  <li>Programación con JavaScript</li>
                  <li>Control de Versiones</li>
                  <li>HTML y CSS en Profundidad</li>
                  <li>React Básico</li>
                  <li>React Avanzado</li>
                  <li>Principios de Diseño UX/UI</li>
                  <li>Proyecto Final de Desarrollo Front-End</li>
                  <li>Preparación para Entrevistas de Codificación</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="card bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl mb-4 text-center">Skills</h3>
            <div className="skills flex flex-wrap justify-center gap-6">
              <FaHtml5 className="text-orange-600 text-5xl hover:scale-110 transform transition-transform duration-200" />
              <FaCss3Alt className="text-blue-600 text-5xl hover:scale-110 transform transition-transform duration-200" />
              <FaJs className="text-yellow-500 text-5xl hover:scale-110 transform transition-transform duration-200" />
              <FaReact className="text-blue-400 text-5xl hover:scale-110 transform transition-transform duration-200" />
              <SiVite className="text-purple-500 text-5xl hover:scale-110 transform transition-transform duration-200" />
              <SiTailwindcss className="text-teal-400 text-5xl hover:scale-110 transform transition-transform duration-200" />
              <FaGithub className="text-gray-400 text-5xl hover:scale-110 transform transition-transform duration-200" />
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="buttons flex flex-col sm:flex-row justify-center mt-12 gap-6">
          <a
            href="mailto:pabloproboste64@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg hover:from-blue-600 hover:to-teal-600 shadow-lg transition-all"
          >
            📧 Contáctame
          </a>
          <a
            href={cvPDF}
            download="CV_Pablo_Proboste.pdf"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-lg hover:from-blue-600 hover:to-teal-600 shadow-lg transition-all"
          >
            📄 Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
