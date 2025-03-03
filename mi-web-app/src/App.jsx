import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
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
  );
}

export default App;
