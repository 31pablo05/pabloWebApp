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
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(mensajeWhatsApp)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Contacto</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Información de contacto */}
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
            <p className="mb-2">📍 Dirección: Calle Ficticia 123, Ciudad, País</p>
            <p className="mb-2">📞 Teléfono: (123) 456-7890</p>
            <p className="mb-2">✉️ Correo: contacto@ejemplo.com</p>
          </div>

          {/* Formulario de contacto */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="correo" className="block text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-gray-700">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors"
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

