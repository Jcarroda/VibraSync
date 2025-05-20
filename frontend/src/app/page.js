"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";

export default function Page() {
  const [scope, animate] = useAnimate();

  // Animación para las ondas musicales
  useEffect(() => {
    const animateWaves = async () => {
      await animate(
        ".ai-wave",
        { scaleY: [1, 1.5, 0.8, 1.2, 1] },
        { duration: 2, repeat: Infinity, repeatType: "loop" }
      );
    };

    animateWaves();
  }, [animate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white">
      <main className="flex-1 flex flex-col" ref={scope}>
        {/* Sección principal con animaciones */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto mt-15 mb-15">
          {/* Título animado */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400"
              animate={{
                textShadow: [
                  "0 0 10px rgba(219, 39, 119, 0.5)",
                  "0 0 20px rgba(219, 39, 119, 0.3)",
                  "0 0 10px rgba(219, 39, 119, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              VibraSync
            </motion.span>
          </motion.h1>

          {/* Subtítulo animado */}
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="relative">
              Tu{" "}
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                  Disfruta
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.span>
            </span>
          </motion.h3>

          {/* Ondas AI animadas */}
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="ai-wave w-2 h-8 bg-gradient-to-t from-purple-500 to-pink-300 rounded-full"
                initial={{ scaleY: 0.3, opacity: 0.5 }}
                animate={{
                  scaleY: [0.3, 1, 0.5, 0.8, 0.3],
                  opacity: [0.5, 1, 0.8, 0.6, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Texto descriptivo animado - SIN PARPADEO */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Usa <span className="font-bold text-white">VibraSync</span> para mejorar tu experiencia a la hora de escuchar musica. Entra ya mismo para probar una{" "}
            <span className="font-bold text-white">experiencia única y personalizada.</span>
          </motion.p>

          {/* Botones animados */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-md transition-colors block"
            >
              Entrar
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="bg-transparent hover:border-gray-500 text-gray-300 hover:text-white font-medium py-3 px-8 rounded-md flex items-center justify-center transition-colors"
              >
                Registrate →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Degradado hacia negro para el footer */}
        <div className="h-29   bg-gradient-to-b from-transparent to-black"></div>

        <section className="bg-black py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-6xl font-bold mb-4">Sumérgete en un mundo de melodías</h2>
              <p className="text-lg text-gray-400 mb-6">
                Sumérgete en un universo de melodías cautivadoras. Descubre nuestra creciente colección de canciones y encuentra esos nuevos temas que te emocionarán. ¡Prepárate para disfrutar de una experiencia sonora altamente inmersiva que te envolverá por completo! <b className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 text-2xl">100% sin anuncios</b>
              </p>
              {/* Puedes añadir más texto o elementos aquí */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-md overflow-hidden shadow-md">
                <img
                  src="/img/cancion1.jpg"
                  alt="Imagen 1"
                  className="w-full h-auto border-2 border-white/20 transition-all duration-300 hover:border-white/50"
                  style={{
                    borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent) 1',
                  }}
                />
              </div>
              <div className="rounded-md overflow-hidden shadow-md">
                <img
                  src="/img/cancion2.jpg"
                  alt="Imagen 2"
                  className="w-full h-auto border-2 border-white/20 transition-all duration-300 hover:border-white/50"
                  style={{
                    borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent) 1',
                  }}
                />
              </div>
              <div className="rounded-md overflow-hidden shadow-md">
                <img
                  src="/img/cancion3.jpg"
                  alt="Imagen 3"
                  className="w-full h-auto border-2 border-white/20 transition-all duration-300 hover:border-white/50"
                  style={{
                    borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent) 1',
                  }}
                />
              </div>
              <div className="rounded-md overflow-hidden shadow-md">
                <img
                  src="/img/cancion4.jpg"
                  alt="Imagen 4"
                  className="w-full h-auto border-2 border-white/20 transition-all duration-300 hover:border-white/50"
                  style={{
                    borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent) 1',
                  }}
                />
              </div>
              <div className="rounded-md overflow-hidden shadow-md">
                <img
                  src="/img/cancion5.jpg"
                  alt="Imagen 5"
                  className="w-full h-auto border-2 border-white/20 transition-all duration-300 hover:border-white/50"
                  style={{
                    borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent) 1',
                  }}
                />
              </div>
              <div className="rounded-md overflow-hidden shadow-md">
                <img
                  src="/img/cancion6.jpg"
                  alt="Imagen 6"
                  className="w-full h-auto border-2 border-white/20 transition-all duration-300 hover:border-white/50"
                  style={{
                    borderImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent) 1',
                  }}
                />
              </div>
              {/* Puedes añadir más imágenes aquí */}
            </div>
          </div>
        </section>
        <section className="bg-black py-15 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2 text-white">
              <h2 className="text-6xl font-bold mb-2">Ordena tus canciones privadas</h2>
              <p className="text-lg text-gray-400 mb-6">
                Toma el control de tu música. Organiza las canciones a tu gusto y crea una biblioteca que se adapte a ti. Volvemos al pasado pero con un toque moderno. Con <b className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 text-2xl">VibraSync</b>, tu música, tus reglas.
              </p>
              {/* Puedes añadir más texto o elementos aquí */}
            </div>
            <div className="md:order-1 rounded-md overflow-hidden shadow-md aspect-w-16 aspect-h-12">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                <source src="/videos/tutorial.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}

    </div>
  );
} 