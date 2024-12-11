import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import profilePhoto from '../assets/Diseño sin título (3).png';
import cvPDF from '../assets/Currículum Vitae ingles.8ab22d8723940851233c (1).pdf'; // Asegúrate de actualizar esta ruta

const About = () => {
  const [activeTab, setActiveTab] = useState('Perfil');

  return (
    <section id="sobre-mi" className="sobre-mi py-12 bg-black">
      <h2 className="text-4xl text-white mb-6 text-left pl-4">Sobre mi</h2>
      <div className="tabs flex justify-start mb-6">
        <button
          className={`tab ${activeTab === 'Perfil' ? 'active' : ''} bg-gray-700 text-white p-4 mx-3 rounded-lg text-2xl hover:bg-gray-600 transition-colors`}
          onClick={() => setActiveTab('Perfil')}
        >
          Perfil
        </button>
        <button
          className={`tab ${activeTab === 'Estudios' ? 'active' : ''} bg-gray-700 text-white p-4 mx-3 rounded-lg text-2xl hover:bg-gray-600 transition-colors`}
          onClick={() => setActiveTab('Estudios')}
        >
          Estudios
        </button>
        <button
          className={`tab ${activeTab === 'Skills' ? 'active' : ''} bg-gray-700 text-white p-4 mx-3 rounded-lg text-2xl hover:bg-gray-600 transition-colors`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'Perfil' && (
          <div className="profile flex flex-wrap justify-start max-w-4xl w-full">
            <div className="profile-text w-full p-4">
              <p className="text-lg text-white">
                Soy un apasionado estudiante de desarrollo front-end con una sólida base en HTML, CSS y conocimientos en React. Estoy comprometido con mi aprendizaje y en constante búsqueda de nuevas tecnologías y funciones en este campo. Actualmente, estoy perfeccionando mis habilidades en la plataforma de Coursera.
              </p>
            </div>
            {/* Aquí he removido la imagen */}
          </div>
        )}

        {activeTab === 'Estudios' && (
          <div className="studies text-left mt-8 pl-4">
            <ul className="list-disc pl-8 text-lg w-full text-white">
              <li>
                <strong>IBM Front-End Developer (2023 - 2024, IBM Front-End Developer Professional Certificate)</strong> - Coursera
                <ul className="list-inside">
                  <li>Introducción al Desarrollo Web con HTML, CSS, JavaScript</li>
                  <li>Desarrollo de Aplicaciones Front-end con React</li>
                  <li>Proyecto Final de Desarrollo Front-end</li>
                </ul>
              </li>
              <li>
                <strong>Meta Front-End Developer Professional Certificate</strong> - Coursera
                <ul className="list-inside">
                  <li>Programación con JavaScript</li>
                  <li>React Básico y Avanzado</li>
                  <li>Principios de Diseño UX/UI</li>
                </ul>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'Skills' && (
          <div className="skills flex justify-start gap-8 mt-6 pl-4">
            <div className="skill text-left">
              <FaHtml5 className="skill-icon text-orange-600 text-7xl hover:scale-110 transition-transform" />
              <span className="skill-name text-white mt-2 text-xl">HTML5</span>
            </div>
            <div className="skill text-left">
              <FaCss3Alt className="skill-icon text-blue-600 text-7xl hover:scale-110 transition-transform" />
              <span className="skill-name text-white mt-2 text-xl">CSS3</span>
            </div>
            <div className="skill text-left">
              <FaJs className="skill-icon text-yellow-500 text-7xl hover:scale-110 transition-transform" />
              <span className="skill-name text-white mt-2 text-xl">JavaScript</span>
            </div>
            <div className="skill text-left">
              <FaReact className="skill-icon text-blue-400 text-7xl hover:scale-110 transition-transform" />
              <span className="skill-name text-white mt-2 text-xl">React</span>
            </div>
            <div className="skill text-left">
              <FaGithub className="skill-icon text-gray-800 text-7xl hover:scale-110 transition-transform" />
              <span className="skill-name text-white mt-2 text-xl">GitHub</span>
            </div>
          </div>
        )}
      </div>

      <div className="buttons flex justify-start mt-8 gap-4 pl-4">
        <a href="mailto:pabloproboste64@gmail.com" className="contact-button bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">📧 Contáctame</a>
        <a href={cvPDF} download="CV_Pablo_Proboste.pdf" className="cv-button bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">📄 Descargar CV</a>
      </div>
    </section>
  );
};

export default About;
