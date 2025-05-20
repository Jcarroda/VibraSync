// components/funcionesReproductor/FuncionesReproductor.js
import React from 'react';

export const FuncionesReproductor = ({ currentMediaUrl, songInfo, mediaRef, autoPlay, toggleAutoPlay, loop, toggleLoop }) => {
    return (
        <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-4">
            <h3 className="text-gray-300 text-center">{songInfo.title}</h3>
            {currentMediaUrl && (
                currentMediaUrl.startsWith('blob:') && currentMediaUrl.includes('audio/mpeg') ? (
                    <audio
                        ref={mediaRef}
                        src={currentMediaUrl}
                        controls
                        className="w-full"
                        autoPlay={autoPlay}
                    />
                ) : (
                    <video
                        ref={mediaRef}
                        src={currentMediaUrl}
                        controls
                        className="w-full"
                        autoPlay={autoPlay}
                    />
                )
            )}
            <div className="mt-4 flex justify-center space-x-4">
                <button
                    onClick={toggleAutoPlay}
                    className={`bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                >
                    {autoPlay ? 'Desactivar Autoplay' : 'Activar Autoplay'}
                </button>
                <button
                    onClick={toggleLoop}
                    className={`bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                >
                    {loop ? 'Desactivar Bucle' : 'Activar Bucle'}
                </button>
            </div>
        </div>
    );
};