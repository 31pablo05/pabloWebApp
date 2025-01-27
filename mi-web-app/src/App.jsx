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
        className="bg-gradient-to-b from-gray-900 to-black"
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <main>
            <Home />
            <About />
            <Portfolio />
          </main>
          <Footer />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
