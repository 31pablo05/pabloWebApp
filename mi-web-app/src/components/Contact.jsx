import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, mensaje } = formData;
    const mensajeWhatsApp = `Hola, me llamo ${nombre} y mi correo es ${correo}. Quiero consultar sobre: ${mensaje}`;
    const url = `https://wa.me/542804389134?text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.open(url, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-br from-blue-500/80 via-purple-700/80 to-indigo-900/90 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          Contacto
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full my-6 mx-auto" />
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Información de contacto */}
          <motion.div
            className="w-full md:w-1/2 text-white space-y-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-400/30 p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
          >
            <h3 className="text-2xl font-semibold mb-2">Información de Contacto</h3>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-300" /> Dirección: Brown 311, Trelew, Chubut, Argentina</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-blue-300" /> Celular: +54 2804389134</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-blue-300" /> Correo: pabloproboste64@gmail.com</p>
            {/* Sección para contratación mediante plataformas */}
            <div className="mt-8 p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-blue-400/20">
              <h4 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 flex items-center gap-2">
                ¡Contrátame a través de plataformas!
              </h4>
              <p className="mb-4 text-sm text-white">
                También puedes contratar mis servicios mediante plataformas de freelancing como{' '}
                <a
                  href="https://es.fiverr.com/pabloproboste/buying?source=avatar_menu_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-200 transition-colors duration-300 hover:text-blue-400"
                  aria-label="Contratar en Fiverr"
                >
                  Fiverr
                </a>
                {', '}
                <a
                  href="https://www.freelancer.com.ar/u/pablo3105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-200 transition-colors duration-300 hover:text-blue-400"
                  aria-label="Contratar en Freelancer"
                >
                  Freelancer
                </a>
                {', '}
                y{' '}
                <a
                  href="https://www.upwork.com/freelancers/~011c770fd764ae5fd2?viewMode=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-200 transition-colors duration-300 hover:text-blue-400"
                  aria-label="Contratar en Upwork"
                >
                  Upwork
                </a>
                . Estas plataformas actúan como mediadores, brindando seguridad en la contratación; o si lo prefieres, podemos coordinar un contrato particular.
              </p>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-400/30 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-5">
                <label htmlFor="nombre" className="block text-white font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors bg-white/70 text-gray-900"
                  required
                  aria-label="Nombre"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="correo" className="block text-white font-medium mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors bg-white/70 text-gray-900"
                  required
                  aria-label="Correo Electrónico"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="mensaje" className="block text-white font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors bg-white/70 text-gray-900"
                  required
                  aria-label="Mensaje"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0 0 16px 2px #6366f1' }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg font-semibold text-lg transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Enviar Mensaje"
              >
                Enviar Mensaje
              </motion.button>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 text-green-500 text-center font-semibold"
                >
                  ¡Mensaje enviado! Te responderé pronto.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
