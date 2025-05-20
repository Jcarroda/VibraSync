// hooks/useTema.js
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const THEME_COLOR_COOKIE = 'themeColor';

export const useTema = () => {
  const [themeColor, setThemeColor] = useState('bg-gray-900'); // Valor por defecto

  useEffect(() => {
    const savedTheme = Cookies.get(THEME_COLOR_COOKIE);
    if (savedTheme) {
      setThemeColor(savedTheme);
      document.documentElement.style.setProperty('--bg-color', savedTheme);
    }
  }, []);

  const handleSetThemeColor = (newColor) => {
    setThemeColor(newColor);
    Cookies.set(THEME_COLOR_COOKIE, newColor, { expires: 30 });
    document.documentElement.style.setProperty('--bg-color', newColor);
  };

  return { themeColor, setThemeColor: handleSetThemeColor };
};