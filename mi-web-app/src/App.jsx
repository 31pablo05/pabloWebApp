import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy loading de componentes
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de carga inline para evitar problemas de importación
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-gradient-to-b from-gray-900 to-black min-h-screen"
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <main className="scroll-smooth">
            <section id="home" className="min-h-screen pt-16">
              <Home />
            </section>
            <section id="about" className="min-h-screen pt-16">
              <About />
            </section>
            <section id="portfolio" className="min-h-screen pt-16">
              <Portfolio />
            </section>
            <section id="contact" className="pt-16">
              <Footer />
            </section>
          </main>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
