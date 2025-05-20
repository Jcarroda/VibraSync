"use client"

import { useState } from "react"
import { motion, useAnimate } from "framer-motion";

export default function Creadores() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-fuchsia-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6 z-1">

              <motion.p
                className=""
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p className="inline-block px-4 py-1 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-medium mb-2">
                  <span className="flex items-center gap-2">Programa para Creadores</span>
                </p>
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-indigo-200 text-transparent bg-clip-text"
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  ¿Te gustaría ser creador en nuestra aplicación?
                </motion.span>
              </motion.h1>

              <motion.p
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-lg text-gray-300 max-w-xl">
                  Estamos buscando músicos, productores y empresas de la industria musical para enriquecer nuestra
                  plataforma con contenido auténtico y de calidad.
                </p>
              </motion.p>

              <div className="pt-4">
                <motion.button
                  className=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <button
                    className="bg-purple-900/50 hover:bg-purple-900/70 text-white px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-900/30 "
                    onClick={() => document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })}
                  >
                    Quiero unirme
                  </button>
                </motion.button>
              </div>
            </div>

            <div className="md:w-1/2 relative z-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="relative w-full h-80 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-20 blur-xl transform -rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-20 blur-xl transform rotate-3"></div>
                  <div className="relative h-full w-full bg-purple-900/50 rounded-2xl border border-purple-500/20 p-6 backdrop-blur-sm">
                    <div className="h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Beneficios de ser creador</h3>
                        <ul className="space-y-3">
                          {[
                            "Amplía tu audiencia y alcance",
                            "Monetiza tu contenido musical",
                            "Conecta con fans y otros artistas",
                            "Acceso a estadísticas y análisis",
                            "Promoción en nuestra plataforma",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-purple-400">✓</span>
                              <span className="text-gray-200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-purple-300">
                        <span>Únete a +500 creadores en nuestra plataforma</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo puedes formar parte?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nuestro proceso de validación garantiza la calidad y autenticidad del material que ofrecemos a nuestra
              comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Envía tu solicitud",
                description: "Completa el formulario con tus datos y cuéntanos sobre tu proyecto musical.",
              },
              {
                title: "Proceso de validación",
                description: "Nuestro equipo revisará tu propuesta para garantizar la calidad y autenticidad.",
              },
              {
                title: "Publicación de contenido",
                description: "Una vez aprobado, nuestro equipo subirá tu contenido a la plataforma.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-purple-500/20 rounded-lg p-6 hover:shadow-purple-500/5 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="bg-purple-900/50   rounded-3xl border border-purple-500/20 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Información necesaria</h2>
                <p className="text-gray-300 mb-6">
                  Para iniciar el proceso, necesitamos que nos proporciones la siguiente información:
                </p>

                <ul className="space-y-4">
                  {[
                    "Nombre completo del responsable del contenido",
                    "Nombre de la empresa, sello discográfico o proyecto musical",
                    "Título de la canción o contenido musical que deseas subir",
                    "Número de contacto directo (teléfono o WhatsApp)",
                    "Breve presentación personal o del proyecto",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2">
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Importante</h3>
                  <p className="text-gray-300">
                    Toda la música que aparece en nuestra app es gestionada directamente por el equipo de
                    administración. Esto quiere decir que, una vez aprobada tu solicitud, seremos nosotros quienes
                    subamos el contenido a la plataforma.
                  </p>
                  <div className="mt-4 p-4 bg-purple-900/30 rounded-xl border border-purple-500/20">
                    <p className="text-sm text-purple-200">
                      Este sistema nos permite mantener un alto estándar de calidad y proteger los derechos de los
                      creadores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section id="contacto" className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para unirte?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-purple-500/20 rounded-lg p-6 md:p-8">
              {formSubmitted ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold mb-2">¡Formulario enviado con éxito!</h3>
                  <p className="text-gray-300">
                    Gracias por tu interés. Revisaremos tu información y nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-gray-200">
                        Nombre completo
                      </label>
                      <input
                        id="nombre"
                        placeholder="Tu nombre completo"
                        required
                        className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="proyecto" className="text-sm font-medium text-gray-200">
                        Proyecto o empresa
                      </label>
                      <input
                        id="proyecto"
                        placeholder="Nombre de tu proyecto musical"
                        required
                        className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-gray-200">
                        Teléfono o WhatsApp
                      </label>
                      <input
                        id="telefono"
                        placeholder="Tu número de contacto"
                        required
                        className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cancion" className="text-sm font-medium text-gray-200">
                      Título de la canción
                    </label>
                    <input
                      id="cancion"
                      placeholder="Nombre de la canción que deseas subir"
                      required
                      className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="presentacion" className="text-sm font-medium text-gray-200">
                      Breve presentación
                    </label>
                    <textarea
                      id="presentacion"
                      placeholder="Cuéntanos sobre ti y tu proyecto musical..."
                      rows={4}
                      required
                      className="w-full px-3 py-2 bg-gray-800/50 border border-purple-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-900/80 hover:bg-purple-900/70 text-white py-3 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-900/20"
                  >
                    Enviar solicitud
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              También puedes enviarnos un correo directamente a:{" "}
              <a href="mailto:tu_correo@ejemplo.com" className="text-purple-400 hover:text-purple-300 underline">
                tu_correo@ejemplo.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
