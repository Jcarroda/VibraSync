// utils/fileOrganizers.js

/**
 * Organiza una lista de objetos File por su webkitRelativePath en una estructura de árbol.
 * @param {FileList | File[]} files - La lista de archivos.
 * @returns {Object} La estructura de árbol de archivos y directorios.
 */
export const organizarArchivosPorEstructura = (files) => {
  const structure = {};
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.webkitRelativePath) {
      const pathParts = file.webkitRelativePath.split('/');
      let currentLevel = structure;
      for (let j = 0; j < pathParts.length - 1; j++) {
        const part = pathParts[j];
        if (!currentLevel[part]) {
          currentLevel[part] = { type: 'directory', children: {} };
        }
        currentLevel = currentLevel[part].children;
      }
      const fileName = pathParts[pathParts.length - 1];
      if (!currentLevel[fileName]) {
        currentLevel[fileName] = { type: 'file', file: file };
      }
    } else {
      // Archivos en la raíz
      if (!structure['root']) {
        structure['root'] = { type: 'directory', children: {} };
      }
      structure['root'].children[file.name] = { type: 'file', file: file };
    }
  }
  return structure;
};

/**
 * Aplana una estructura de árbol de archivos a una lista simple de objetos File.
 * @param {Object} structure - La estructura de árbol de archivos.
 * @returns {File[]} Una lista aplanada de archivos.
 */
export const aplanarEstructura = (structure) => {
  let files = [];
  for (const key in structure) {
    if (structure[key].type === 'file') {
      files.push(structure[key].file);
    } else if (structure[key].type === 'directory' && structure[key].children) {
      files = files.concat(aplanarEstructura(structure[key].children));
    }
  }
  return files;
};

/**
 * Calcula el número total de archivos en una estructura de árbol.
 * @param {Object} structure - La estructura de árbol de archivos.
 * @returns {number} El número total de archivos.
 */
export const obtenerTotalArchivos = (structure) => {
  let count = 0;
  for (const key in structure) {
    if (structure[key].type === 'file') {
      count++;
    } else if (structure[key].type === 'directory' && structure[key].children) {
      count += obtenerTotalArchivos(structure[key].children);
    }
  }
  return count;
};