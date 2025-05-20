// hooks/useReproductor.js (fragmento)

export const useReproductor = (flatFileList, openPanel) => {
  const mediaRef = useRef(null);
  // ... (otros estados) ...

  const reproducirArchivo = (file) => {
    const newUrl = URL.createObjectURL(file); // Crea la URL del Blob
    setCurrentMediaUrl(newUrl); // Actualiza el estado con la nueva URL
    const index = flatFileList.findIndex(f => f.name === file.name && f.size === file.size && f.lastModified === file.lastModified);
    setCurrentFileIndex(index);
    setLoop(false); // Desactivar el bucle al seleccionar una nueva canción

    if (openPanel === 'songInfo') {
      leerYMostrarMetadatos(file);
    } else {
      setSongInfo({ title: file.name.replace(/\.[^/.]+$/, ""), artist: '', album: '', year: '' });
    }

    if (mediaRef.current) {
      mediaRef.current.load(); // Carga el nuevo recurso
      mediaRef.current.play().catch(error => console.error("Error al reproducir el medio:", error)); // Intenta reproducir
    }
  };

  // ... (resto del hook) ...
  return {
    mediaRef,
    currentMediaUrl, // Esto es lo que se pasa a FuncionesReproductor
    // ...
    reproducirArchivo,
    // ...
  };
};