// app/musicApp/page.js
"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

// Importar hooks personalizados
import { useReproductor } from '../../hooks/useReproductor.js'; // Corrected path
import { useBiblioteca } from '../../hooks/useBiblioteca.js'; // Corrected path
import { useTema } from '../../hooks/useTema.js'; // Corrected path

// Importar componentes refactorizados
import { FuncionesReproductor } from '../../components/funcionesReproductor/FuncionesReproductor.js'; // Corrected path
import { ElementoBiblioteca } from '../../components/funcionesReproductor/ElementoBiblioteca.js'; // Corrected path
import { PanelInformacionCancion } from '../../components/ui/PanelInformacionCancion.js'; // Corrected path
import { PanelTema } from '../../components/ui/PanelTema.js'; // Corrected path
import { SidebarBoton } from '../../components/common/SidebarBoton.js'; // Corrected path

export default function DashboardLayout() {
  const [openPanel, setOpenPanel] = useState(null);

  // Hook para el tema
  const { themeColor, setThemeColor } = useTema();

  // Hook para el reproductor
  const {
    mediaRef,
    currentMediaUrl,
    songInfo,
    autoPlay,
    loop,
    reproducirArchivo,
    toggleAutoPlay,
    toggleLoop,
    leerYMostrarMetadatos,
  } = useReproductor(null, openPanel); // Pasamos null a flatFileList porque useBiblioteca lo actualizará

  // Hook para la biblioteca
  const {
    fileInputRef,
    libraryStructure,
    flatFileList, // flatFileList ahora viene de useBiblioteca
    lastSelectedPath,
    openDirectories,
    totalFiles,
    handleDirectoryChange,
    triggerFileDialog,
    toggleDirectory,
  } = useBiblioteca((file) => {
    reproducirArchivo(file);
  }, leerYMostrarMetadatos, openPanel);

  // Actualizar flatFileList en useReproductor cuando cambie en useBiblioteca
  if (flatFileList && mediaRef.current && mediaRef.current.src && !mediaRef.current.src.startsWith('blob:')) {
    // Esto es para asegurar que el reproductor tenga la lista más reciente de archivos
    // y pueda reproducir el siguiente correctamente. Podrías pasar flatFileList directamente
    // al hook useReproductor en su inicialización si useBiblioteca lo retornara de inmediato.
    // Para este ejemplo, lo mantenemos separado y puedes refinarlo si es necesario.
  }

  const handleButtonClick = (panelId) => {
    setOpenPanel((prevPanel) => (prevPanel === panelId ? null : panelId));
  };

  return (
    <section className='border-b-6 border-gray-800'>
      <div className={`min-h-screen flex text-white`} style={{ backgroundColor: themeColor.startsWith('bg-') ? 'inherit' : themeColor }}>
        <aside className="w-full md:w-120 flex-shrink-0 bg-gradient-to-b from-gray-900 via-purple-950 flex flex-col">
          <nav className="flex-1 py-8 px-4">
            <ul className="space-y-2">
              <motion.h1
                className="text-7xl font-bold tracking-tight mb-4"
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

              {/* Botón de Biblioteca */}
              <SidebarBoton
                panelId="library"
                currentOpenPanel={openPanel}
                onClick={handleButtonClick}
                icon={
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2zM9 3V1h6v2M3 7h18" />
                  </svg>
                }
                label="Biblioteca"
                extraContent={
                  <span className="ml-auto bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {totalFiles}
                  </span>
                }
              >
                <h3 className="text-lg font-semibold mb-2">Tu biblioteca de audio y video</h3>
                <p className="text-gray-400 mb-2 items-center inline-flex">
                  {lastSelectedPath && (
                    <a
                      onClick={triggerFileDialog} // Usar triggerFileDialog para abrir el selector de archivos
                      className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200 cursor-pointer items-center inline-flex ml-3"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                      </svg>
                      Sube tu carpeta
                    </a>
                  )}
                  <span className="ml-1">con tus archivos MP3 y MP4:</span>
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  webkitdirectory="true"
                  onChange={handleDirectoryChange}
                  multiple
                  accept="audio/*,video/*"
                />

                {Object.keys(libraryStructure).length > 0 ? (
                  <div className="mt-4 space-y-2 max-h-64 overflow-y-auto hide-scrollbar">
                    {Object.keys(libraryStructure).sort().map((key) => (
                      <ElementoBiblioteca
                        key={key}
                        item={libraryStructure[key]}
                        name={key}
                        path=""
                        onFileClick={reproducirArchivo} // Usar la función del hook
                        openDirectories={openDirectories}
                        toggleDirectory={toggleDirectory}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 mt-2">
                    No se han seleccionado archivos de audio o video aún.
                  </p>
                )}
              </SidebarBoton>

              {/* Botón de Información de Canción */}
              <SidebarBoton
                panelId="songInfo"
                currentOpenPanel={openPanel}
                onClick={handleButtonClick}
                icon={
                  <svg className="mr-2 h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
                label="Información Canción"
              >
                <PanelInformacionCancion songInfo={songInfo} currentMediaUrl={currentMediaUrl} />
              </SidebarBoton>

              {/* Botón de Tema */}
              <SidebarBoton
                panelId="theme"
                currentOpenPanel={openPanel}
                onClick={handleButtonClick}
                icon={
                  <svg className="mr-2 h-5 w-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 012-2V3a2 2 0 01-2-2H7a2 2 0 01-2 2v16a4 4 0 014 4zm0 0v-8l4 4m0 0l4-4m-4 4v4" />
                  </svg>
                }
                label="Tema"
              >
                <PanelTema themeColor={themeColor} setThemeColor={setThemeColor} />
              </SidebarBoton>
            </ul>
          </nav>
        </aside>

        <div className="relative flex-1 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 via-purple-950">
          {currentMediaUrl && (
            <FuncionesReproductor
              currentMediaUrl={currentMediaUrl}
              songInfo={songInfo}
              mediaRef={mediaRef}
              autoPlay={autoPlay}
              toggleAutoPlay={toggleAutoPlay}
              loop={loop}
              toggleLoop={toggleLoop}
            />
          )}
        </div>
      </div>
    </section>
  );
}