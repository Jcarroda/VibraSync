// components/funcionesReproductor/ElementoBiblioteca.js
import React from 'react';

export const ElementoBiblioteca = ({ item, name, path, onFileClick, openDirectories, toggleDirectory }) => {
    const fullPath = path ? `${path}/${name}` : name;
    const isDirectory = item.type === 'directory';
    const hasChildren = isDirectory && Object.keys(item.children).length > 0;
    const level = path ? path.split('/').length : 0;
    const marginLeft = level * 4; // Aumenta la indentación por nivel (4 unidades de Tailwind)

    return (
        <div className={`space-y-1`}>
            {isDirectory ? (
                <div style={{ marginLeft: `${marginLeft}px` }}>
                    <button
                        onClick={() => toggleDirectory(fullPath)}
                        className={`flex items-center w-full text-left py-2 px-3 rounded-md hover:bg-gray-600 ${level === 0 ? 'bg-gray-700' : 'bg-gray-800'
                            }`}
                    >
                        <svg
                            className={`mr-2 h-5 w-5 transition-transform ${openDirectories[fullPath] ? 'rotate-90' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <svg
                            className="mr-2 h-5 w-5 text-yellow-400" // Icono de carpeta
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <span className="font-semibold">{name || 'Raíz'}</span>
                        <span className="ml-auto text-gray-400 text-sm">
                            ({Object.keys(item.children).length})
                        </span>
                    </button>
                    {openDirectories[fullPath] && hasChildren && (
                        <div className="ml-4 mt-1 space-y-1">
                            {Object.keys(item.children).sort().map((key) => (
                                <ElementoBiblioteca
                                    key={key}
                                    item={item.children[key]}
                                    name={key}
                                    path={fullPath}
                                    onFileClick={onFileClick}
                                    openDirectories={openDirectories}
                                    toggleDirectory={toggleDirectory}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <button
                    onClick={() => onFileClick(item.file)}
                    className={`flex items-center w-full text-left py-2 px-3 rounded-md hover:bg-gray-500 text-sm text-gray-300`}
                    style={{ marginLeft: `${marginLeft + 16}px` }} // Indentar los archivos más que las carpetas
                >
                    <svg
                        className="mr-2 h-5 w-5 text-purple-500" // Icono de archivo
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1V9z" clipRule="evenodd" />
                    </svg>
                    {name}
                </button>
            )}
        </div>
    );
};