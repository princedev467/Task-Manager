import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useSelector } from 'react-redux';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  
  const { user, isLoading } = useSelector((state) => state.auth);
  
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="theme-toggle"
      style={{ display: user ? "block" : "none" }}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className={`icon-container ${isDark ? 'rotate-dark' : 'rotate-light'}`}>
        {isDark ? (
          <Sun size={20} className="theme-icon sun" />
        ) : (
          <Moon size={20} className="theme-icon moon" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
