import React, { useState, useEffect, useCallback } from 'react';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaCertificate, FaTimes, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Datos de certificaciones (ajusta imágenes y URLs según corresponda)
const certifications = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued: "may. 2024",
    image: "/assets/certificates/freecodecamp_responsive.webp",
    credentialId: "fcc7b1c0ecb-abad-4a57-a4fe-1a804fa0cc10-rwd",
    url: "https://www.freecodecamp.org/certification/fcc7b1c0ecb-abad-4a57-a4fe-1a804fa0cc10-rwd",
    description: "Certificación en Responsive Web Design que avala la capacidad de crear sitios web adaptativos."
  },
  {
    id: 2,
    title: "Advanced React",
    issuer: "Meta",
    issued: "abr. 2024",
    image: "/assets/certificates/advanced_react.webp",
    credentialId: "2TBWR2JXYLJZ",
    url: "https://www.example.com/cert/advanced-react",
    description: "Certificación que valida conocimientos avanzados en React para el desarrollo de aplicaciones web."
  },
  {
    id: 3,
    title: "React Basics",
    issuer: "Meta",
    issued: "mar. 2024",
    image: "/assets/certificates/react_basics.webp",
    credentialId: "LEZPFP9TYHQT",
    url: "https://www.example.com/cert/react-basics",
    description: "Introducción a React y sus fundamentos para el desarrollo de interfaces de usuario."
  },
  {
    id: 4,
    title: "HTML and CSS in depth",
    issuer: "Meta",
    issued: "feb. 2024",
    image: "/assets/certificates/html_css_in_depth.webp",
    credentialId: "VJ7HAKMBMMFM",
    url: "https://www.example.com/cert/html-css-in-depth",
    description: "Certificación que profundiza en HTML y CSS para construir sitios web robustos y estilizados."
  },
  {
    id: 5,
    title: "IBM Front-End Developer Specialization",
    issuer: "IBM",
    issued: "ene. 2024",
    image: "/assets/certificates/ibm_cert.webp",
    credentialId: "NQWYVW7C6QBR",
    url: "https://www.example.com/cert/ibm-front-end",
    description: "Especialización que avala habilidades avanzadas en el desarrollo Front-End, impartida por IBM."
  },
  {
    id: 6,
    title: "Programming with JavaScript",
    issuer: "Meta",
    issued: "dic. 2023",
    image: "/assets/certificates/programming_js.webp",
    credentialId: "YWH2FVE53MB6",
    url: "https://www.example.com/cert/programming-js",
    description: "Certificación que demuestra competencias en programación con JavaScript."
  },
  {
    id: 7,
    title: "Intermediate Web and Front-End Development",
    issuer: "Coursera",
    issued: "nov. 2023",
    image: "/assets/certificates/intermediate_web_frontend.webp",
    credentialId: "PZGX7VMRVAXZ",
    url: "https://www.example.com/cert/intermediate-web",
    description: "Curso intermedio que cubre aspectos clave del desarrollo web y front-end."
  },
  {
    id: 8,
    title: "Designing User Interfaces and Experiences (UI/UX)",
    issuer: "Coursera",
    issued: "oct. 2023",
    image: "/assets/certificates/ui_ux_design.webp",
    credentialId: "CEAYHVLTBTX2",
    url: "https://www.example.com/cert/ui-ux-design",
    description: "Certificación que valida habilidades en el diseño de interfaces y experiencias de usuario."
  },
  {
    id: 9,
    title: "Developing Front-End Apps with React",
    issuer: "Coursera",
    issued: "oct. 2023",
    image: "/assets/certificates/front_end_apps_react.webp",
    credentialId: "HN8JXQQHUZME",
    url: "https://www.example.com/cert/front-end-react",
    description: "Certificación enfocada en el desarrollo de aplicaciones Front-End con React."
  },
  {
    id: 10,
    title: "Version Control",
    issuer: "Meta",
    issued: "oct. 2023",
    image: "/assets/certificates/version_control_meta.webp",
    credentialId: "VFUUQAT7LFV7",
    url: "https://www.example.com/cert/version-control-meta",
    description: "Certificación en el uso de herramientas de control de versiones para proyectos colaborativos."
  },
  {
    id: 11,
    title: "Version Control",
    issuer: "Meta",
    issued: "oct. 2023",
    image: "/assets/certificates/version_control_meta2.webp",
    credentialId: "WFY8U5YE47K5",
    url: "https://www.example.com/cert/version-control-meta2",
    description: "Otra certificación que respalda mis habilidades en manejo de control de versiones."
  },
  {
    id: 12,
    title: "Developing Cloud Native Applications",
    issuer: "Coursera",
    issued: "sept. 2023",
    image: "/assets/certificates/cloud_native_apps.webp",
    credentialId: "4X2X6N2GCGV9",
    url: "https://www.example.com/cert/cloud-native-apps",
    description: "Curso que enseña a desarrollar aplicaciones nativas en la nube."
  },
  {
    id: 13,
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    issued: "sept. 2023",
    image: "/assets/certificates/intro_frontend.webp",
    credentialId: "JUQ7H944DSRV",
    url: "https://www.example.com/cert/intro-frontend",
    description: "Certificación introductoria a los fundamentos del desarrollo Front-End."
  },
  {
    id: 14,
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "Coursera",
    issued: "ago. 2023",
    image: "/assets/certificates/intro_web_dev.webp",
    credentialId: "9VNJKRNLTAPZ",
    url: "https://www.example.com/cert/intro-web-dev",
    description: "Curso básico para aprender desarrollo web utilizando HTML, CSS y JavaScript."
  },
  {
    id: 15,
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    issued: "ago. 2023",
    image: "/assets/certificates/git_github.webp",
    credentialId: "U6M6LRNJF4SJ",
    url: "https://www.example.com/cert/git-github",
    description: "Certificación que muestra los fundamentos para usar Git y GitHub en proyectos colaborativos."
  },
  {
    id: 16,
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    issued: "ago. 2023",
    image: "/assets/certificates/software_engineering.webp",
    credentialId: "8TLR46FAFKKB",
    url: "https://www.example.com/cert/software-engineering",
    description: "Certificación introductoria a los principios de la ingeniería de software."
  },
  {
    id: 17,
    title: "Introduction to Android Mobile Application Development",
    issuer: "Meta",
    issued: "jul. 2023",
    image: "/assets/certificates/android_dev.webp",
    credentialId: "VXACWL9XVQ98",
    url: "https://www.example.com/cert/android-development",
    description: "Curso que enseña los fundamentos para el desarrollo de aplicaciones móviles en Android."
  },
  {
    id: 18,
    title: "cloud computing",
    issuer: "Google Actívate",
    issued: "jun. 2023",
    image: "/assets/certificates/cloud_computing.webp",
    credentialId: "FUR DGC 34T",
    url: "https://www.example.com/cert/cloud-computing",
    description: "Certificación que avala conocimientos en computación en la nube."
  },
  {
    id: 19,
    title: "Digitaliza paso a paso tu negocio con herramientas de Google",
    issuer: "Google Actívate",
    issued: "may. 2023",
    image: "/assets/certificates/digitaliza_negocio.webp",
    credentialId: "FAK 37N NMU",
    url: "https://www.example.com/cert/digitaliza-negocio",
    description: "Curso que enseña a digitalizar y potenciar negocios utilizando herramientas de Google."
  },
  {
    id: 20,
    title: "Protege tu Negocio: Ciberseguridad en el Teletrabajo",
    issuer: "Google",
    issued: "may. 2023",
    image: "/assets/certificates/ciberseguridad.webp",
    credentialId: "KSR 5EM N8C",
    url: "https://www.example.com/cert/ciberseguridad",
    description: "Certificación en ciberseguridad enfocada en proteger negocios en modalidad de teletrabajo."
  },
  {
    id: 21,
    title: "curso de introducion :html y css 1/2",
    issuer: "Google",
    issued: "may. 2022",
    image: "/assets/certificates/html_css_intro1.webp",
    credentialId: "9QC WF7 MBM",
    url: "https://www.example.com/cert/html-css-intro1",
    description: "Curso introductorio de HTML y CSS (parte 1)."
  },
  {
    id: 22,
    title: "Curso de Desarrollo de Apps Móviles",
    issuer: "Google Actívate",
    issued: "",
    image: "/assets/certificates/apps_moviles.webp",
    credentialId: "VWQ EZE YTA",
    url: "https://www.example.com/cert/apps-moviles",
    description: "Curso enfocado en el desarrollo de aplicaciones móviles."
  },
  {
    id: 23,
    title: "Curso de Introducción al desarrollo web:Html y css 2/2",
    issuer: "Google Actívate",
    issued: "",
    image: "/assets/certificates/html_css_intro2.webp",
    credentialId: "CPJ PF4 8JX",
    url: "https://www.example.com/cert/html-css-intro2",
    description: "Curso de continuación en desarrollo web con HTML y CSS (parte 2)."
  }
];

const EstudiosCard = () => {
  // Estado para el modal de detalle individual
  const [selectedCert, setSelectedCert] = useState(null);
  // Estado para el modal de la lista completa
  const [showFullListModal, setShowFullListModal] = useState(false);

  // Cerrar modal con Escape
  const escListener = useCallback((e) => {
    if (e.key === 'Escape') {
      setSelectedCert(null);
      setShowFullListModal(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', escListener);
    return () => window.removeEventListener('keydown', escListener);
  }, [escListener]);

  const openDetailModal = (cert) => setSelectedCert(cert);
  const closeDetailModal = () => setSelectedCert(null);
  const openFullListModal = () => setShowFullListModal(true);
  const closeFullListModal = () => setShowFullListModal(false);

  // Número de certificaciones a mostrar en el resumen
  const summaryCount = 3;
  const summaryCerts = certifications.slice(0, summaryCount);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
        className="card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-blue-400/30 relative overflow-hidden transition-all duration-300"
      >
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl z-0" />
        <div className="relative z-10">
          <IoSchoolOutline className="text-4xl mb-4 text-blue-400 drop-shadow" />
          <h3 className="text-2xl mb-4 text-center font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Estudios y Certificaciones</h3>
          <div className="text-gray-200 space-y-2">
            <p className="font-medium">
              Formación continua en desarrollo web a través de plataformas como Coursera, Google, freeCodeCamp y Meta.
            </p>
            <div className="space-y-1">
              {summaryCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="cursor-pointer hover:underline flex items-center gap-2 group"
                  onClick={() => openDetailModal(cert)}
                  tabIndex={0}
                  aria-label={`Ver detalle de ${cert.title}`}
                >
                  <FaCertificate className="text-blue-400 group-hover:text-purple-400" />
                  <strong className="text-blue-200 group-hover:text-purple-300 transition-colors">{cert.title}</strong>
                  <FaChevronRight className="text-xs text-gray-400 group-hover:text-purple-400" />
                  <br />
                  <span className="text-xs text-gray-400 ml-6">
                    {cert.issuer} {cert.issued && `- Expedición: ${cert.issued}`}
                  </span>
                </div>
              ))}
            </div>
            {certifications.length > summaryCount && (
              <button
                onClick={openFullListModal}
                className="mt-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg shadow-lg transition-all text-base font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Ver todas las certificaciones"
              >
                <FaCertificate /> Ver todas las certificaciones
              </button>
            )}
            <p className="text-sm mt-2">
              También he realizado cursos en: HTML, CSS, JavaScript, Git &amp; GitHub, Ingeniería de Software, React, aplicaciones en la nube, UI/UX, entre otros.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Modal de detalle individual */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900/95 p-8 rounded-2xl relative max-w-md w-full shadow-2xl border border-blue-400/30"
            >
              <button onClick={closeDetailModal} className="absolute top-2 right-2 text-white text-2xl hover:text-blue-400 focus:outline-none" aria-label="Cerrar modal">
                <FaTimes />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{selectedCert.title}</h3>
                <img src={selectedCert.image} alt={selectedCert.title} className="mx-auto mb-4 rounded shadow-lg border border-blue-400/30" />
                <p className="text-gray-300 mb-2">
                  {selectedCert.issuer} {selectedCert.issued && `- Expedición: ${selectedCert.issued}`}
                </p>
                <p className="text-gray-400 text-sm mb-4">{selectedCert.description}</p>
                {selectedCert.url && (
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded shadow-lg transition-all font-semibold"
                  >
                    Ver Credencial
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de lista completa de certificaciones */}
      <AnimatePresence>
        {showFullListModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-900/95 p-8 rounded-2xl relative max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-blue-400/30"
            >
              <button onClick={closeFullListModal} className="absolute top-2 right-2 text-white text-2xl hover:text-blue-400 focus:outline-none" aria-label="Cerrar modal">
                <FaTimes />
              </button>
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-300">Todas las Certificaciones</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="cursor-pointer hover:underline flex items-center gap-2 p-2 border-b border-gray-700 group"
                    onClick={() => {
                      closeFullListModal();
                      openDetailModal(cert);
                    }}
                    tabIndex={0}
                    aria-label={`Ver detalle de ${cert.title}`}
                  >
                    <FaCertificate className="text-blue-400 group-hover:text-purple-400" />
                    <strong className="text-blue-200 group-hover:text-purple-300 transition-colors">{cert.title}</strong>
                    <FaChevronRight className="text-xs text-gray-400 group-hover:text-purple-400" />
                    <span className="text-xs text-gray-400 ml-6">
                      {cert.issuer} {cert.issued && `- Expedición: ${cert.issued}`}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EstudiosCard;
