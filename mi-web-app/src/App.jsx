import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        {/* Meta información básica */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta 
          name="description" 
          content="Portafolio de Pablo Proboste, desarrollador frontend con experiencia en React, HTML, CSS y JavaScript. Conoce mis proyectos y habilidades." 
        />
        <meta 
          name="keywords" 
          content="Pablo Proboste, Desarrollador Frontend, React, HTML, CSS, JavaScript, portafolio" 
        />
        <meta name="author" content="Pablo Proboste" />

        {/* Open Graph para redes sociales */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portafolio de Pablo Proboste - Desarrollador Frontend" />
        <meta 
          property="og:description" 
          content="Portafolio de Pablo Proboste, desarrollador frontend con experiencia en React, HTML, CSS y JavaScript." 
        />
        <meta property="og:url" content="https://tu-dominio.com" />
        <meta 
          property="og:image" 
          content="https://tu-dominio.com/imagen-de-portada.jpg" 
        />
        <meta property="og:site_name" content="Portafolio de Pablo Proboste" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tu_usuario" />
        <meta property="twitter:title" content="Portafolio de Pablo Proboste - Desarrollador Frontend" />
        <meta 
          name="twitter:description" 
          content="Portafolio de Pablo Proboste, desarrollador frontend con experiencia en React, HTML, CSS y JavaScript." 
        />
        <meta 
          name="twitter:image" 
          content="https://tu-dominio.com/imagen-de-portada.jpg" 
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon2.png" />

        {/* Título y Enlace Canónico */}
        <title>Portafolio de Pablo Proboste - Desarrollador Frontend</title>
        <link rel="canonical" href="https://tu-dominio.com" />
      </Helmet>
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-gradient-to-b from-gray-900 to-black min-h-screen"
        >
          <Navbar />
          <main className="scroll-smooth">
            <section id="inicio" className="min-h-screen pt-16">
              <Hero />
            </section>
            <section id="quien-soy" className="min-h-screen pt-16">
              <AboutMe />
            </section>
            <section id="proyectos" className="min-h-screen pt-16">
              <Projects />
            </section>
            <section id="contact" className="pt-16">
              <Contact />
            </section>
            <Footer />
          </main>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
