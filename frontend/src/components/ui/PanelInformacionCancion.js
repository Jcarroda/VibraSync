// components/ui/PanelInformacionCancion.js
import React from 'react';

export const PanelInformacionCancion = ({ songInfo, currentMediaUrl }) => {
    return (
        <div className="bg-gray-700 text-white rounded-b-md space-y-2">
            <h3 className="text-lg font-semibold mb-2">Detalles de la Canción Actual</h3>
            {currentMediaUrl ? (
                <>
                    <p className="text-sm text-gray-300">-Título: {songInfo.title}</p>
                    <p className="text-sm text-gray-300">-Artista: {songInfo.artist}</p>
                    <p className="text-sm text-gray-300">-Álbum: {songInfo.album}</p>
                    <p className="text-sm text-gray-300">-Año: {songInfo.year}</p>
                    <hr className="my-3 border-gray-600" />
                    <h4 className="text-md font-semibold mb-1">¿Faltan datos?</h4>
                    <p className="text-gray-400 text-sm">
                        Si la información de la canción no aparece correctamente, es posible que los metadatos no estén asignados. Puedes corregirlos antes de subir los archivos usando herramientas especializadas:
                    </p>
                    <a
                        href="https://www.mp3tag.de/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                    >
                        <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visitar MP3tag.de
                    </a>
                </>
            ) : (
                <p className="text-gray-400">Selecciona una canción de tu biblioteca para ver su información.</p>
            )}
        </div>
    );
};