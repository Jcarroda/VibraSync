// hooks/useBiblioteca.js
import { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';
import { organizarArchivosPorEstructura, aplanarEstructura, obtenerTotalArchivos } from '../utils/fileOrganizers.js';

const LAST_SELECTED_PATH_COOKIE = 'lastSelectedLibraryPath';

export const useBiblioteca = (reproducirPrimeraCancion, leerYMostrarMetadatos, openPanel) => {
  const fileInputRef = useRef(null);
  const [libraryStructure, setLibraryStructure] = useState({});
  const [flatFileList, setFlatFileList] = useState([]);
  const [lastSelectedPath, setLastSelectedPath] = useState(null);
  const [openDirectories, setOpenDirectories] = useState({});

  useEffect(() => {
    const savedPath = Cookies.get(LAST_SELECTED_PATH_COOKIE);
    if (savedPath) {
      setLastSelectedPath(savedPath);
      console.log("Última ruta guardada:", savedPath);
    }
  }, []);

  const handleDirectoryChange = (event) => {
    const files = event.target.files;
    const validFiles = [];
    let selectedPath = '';

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Filtrar por tipos de archivo aceptados
      if (file.type.startsWith('audio/') || file.type.startsWith('video/')) {
        validFiles.push(file);
      }
      if (i === 0 && file.webkitRelativePath) {
        selectedPath = file.webkitRelativePath.substring(0, file.webkitRelativePath.lastIndexOf('/'));
      }
    }

    const structure = organizarArchivosPorEstructura(validFiles);
    setLibraryStructure(structure);
    setOpenDirectories({}); // Cerrar todas las subcarpetas al cargar una nueva
    const flattened = aplanarEstructura(structure);
    setFlatFileList(flattened);

    if (validFiles.length > 0) {
      // Reproducir la primera canción automáticamente al cargar la carpeta
      reproducirPrimeraCancion(validFiles[0]);
      if (openPanel === 'songInfo') {
        leerYMostrarMetadatos(validFiles[0]);
      }
    }

    if (selectedPath) {
      Cookies.set(LAST_SELECTED_PATH_COOKIE, selectedPath, { expires: 30 });
      setLastSelectedPath(selectedPath);
      console.log("Ruta guardada en la cookie:", selectedPath);
    }
  };

  const triggerFileDialog = () => {
    fileInputRef.current.click();
  };

  const toggleDirectory = (directoryPath) => {
    setOpenDirectories((prevState) => ({
      ...prevState,
      [directoryPath]: !prevState[directoryPath],
    }));
  };

  const totalFiles = obtenerTotalArchivos(libraryStructure);

  return {
    fileInputRef,
    libraryStructure,
    flatFileList,
    lastSelectedPath,
    openDirectories,
    totalFiles,
    handleDirectoryChange,
    triggerFileDialog,
    toggleDirectory,
  };
};