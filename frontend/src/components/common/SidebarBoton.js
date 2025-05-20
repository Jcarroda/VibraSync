// components/common/SidebarBoton.js
import React from 'react';

// Asegúrate de que 'children' esté en las props desestructuradas
export const SidebarBoton = ({ panelId, currentOpenPanel, onClick, icon, label, extraContent, children }) => {
    return (
        <li className="bg-gray-700 rounded-md">
            <button
                onClick={() => onClick(panelId)}
                className={`text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${currentOpenPanel === panelId ? 'rounded-b-none' : ''
                    }`}
            >
                {icon}
                {label}
                {extraContent && extraContent}
            </button>
            {currentOpenPanel === panelId && (
                <div className="bg-gray-700 text-white px-4 py-3 rounded-b-md">
                    {/* ¡Aquí es donde renderizamos el contenido! */}
                    {children}
                </div>
            )}
        </li>
    );
};