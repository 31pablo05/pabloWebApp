import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, mensaje } = formData;
    const mensajeWhatsApp = `Hola, me llamo ${nombre} y mi correo es ${correo}. Quiero consultar sobre: ${mensaje}`;
    // Reemplaza el número de celular por el tuyo en formato internacional sin el signo "+"
    const url = `https://wa.me/542804389134?text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Contacto</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Información de contacto */}
          <div className="w-full md:w-1/2 text-white space-y-4">
            <h3 className="text-2xl font-semibold">Información de Contacto</h3>
            <p>📍 Dirección: Brown 311, Trelew, Chubut, Argentina</p>
            <p>📞 Celular: +54 2804389134</p>
            <p>✉️ Correo: pabloproboste64@gmail.com</p>

            {/* Sección para contratación mediante plataformas */}
            <div className="mt-8 p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">
                ¡Contrátame a través de plataformas!
              </h4>
              <p className="mb-4 text-sm text-black">
                También puedes contratar mis servicios mediante plataformas de freelancing como{' '}
                <a
                  href="https://www.fiverr.com/tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-200 transition-colors duration-300 hover:text-blue-400"
                >
                  Fiverr
                </a>
                {', '}
                <a
                  href="https://www.freelancer.com/u/tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-200 transition-colors duration-300 hover:text-blue-400"
                >
                  Freelancer
                </a>
                {', '}
                y{' '}
                <a
                  href="https://www.upwork.com/freelancers/~tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-200 transition-colors duration-300 hover:text-blue-400"
                >
                  Upwork
                </a>
                . Estas plataformas actúan como mediadores, brindando seguridad en la contratación; o si lo prefieres, podemos coordinar un contrato particular.
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="correo" className="block text-gray-700 font-medium mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
