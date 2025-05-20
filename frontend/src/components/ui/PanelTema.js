// components/ui/PanelTema.js
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const THEME_COLOR_COOKIE = 'themeColor';

export const PanelTema = ({ themeColor, setThemeColor }) => {
    useEffect(() => {
        const savedTheme = Cookies.get(THEME_COLOR_COOKIE);
        if (savedTheme) {
            setThemeColor(savedTheme);
            document.documentElement.style.setProperty('--bg-color', savedTheme);
        }
    }, [setThemeColor]);

    const handleThemeChange = (newColor) => {
        setThemeColor(newColor);
        Cookies.set(THEME_COLOR_COOKIE, newColor, { expires: 30 });
        document.documentElement.style.setProperty('--bg-color', newColor);
    };

    return (
        <div className="bg-gray-700 text-white rounded-b-md space-y-2">
            <h3 className="text-lg font-semibold mb-2">Personalizar Tema</h3>
            <div className="mb-4">
                <label htmlFor="backgroundColor" className="block text-gray-300 text-sm font-bold mb-2">
                    Color de Fondo:
                </label>
                <input
                    type="color"
                    id="backgroundColor"
                    className="w-full h-10 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 border-gray-700 text-white"
                    value={themeColor.startsWith('bg-') ? getComputedStyle(document.documentElement).getPropertyValue('--bg-color') || '#2d3748' : themeColor}
                    onChange={(e) => handleThemeChange(e.target.value)}
                />
            </div>
        </div>
    );
};