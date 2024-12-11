import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec";

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setStatus('Mensaje enviado con éxito');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
        setStatus('Hubo un error, inténtalo de nuevo');
      });
  };

  return (
    <footer
      id="contact"
      className="h-auto flex flex-col bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-900 text-white px-6 py-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-900 opacity-60 z-0"></div>
      <h2 className="text-3xl font-semibold mb-6 z-10 text-center">Conéctame</h2>

      <div className="flex flex-wrap justify-center md:justify-between items-start z-10 w-full">
        {/* Redes sociales */}
        <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
          <div className="flex space-x-8">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-4xl transform hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-4xl transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-4xl transform hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:tuemail@dominio.com"
              className="text-white hover:text-gray-200 text-4xl transform hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 z-10 md:w-1/2 max-w-md"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Enviar mensaje
          </button>
        </form>
      </div>

      {/* Mensaje de estado */}
      {status && (
        <p className="mt-4 text-lg text-green-300 z-10 text-center">{status}</p>
      )}
    </footer>
  );
}

export default Footer;
