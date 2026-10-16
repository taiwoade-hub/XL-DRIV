import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggleFab: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="group flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-white/95 dark:bg-dark-900/95 text-dark-950 dark:text-brand-400 border border-neutral-300 dark:border-dark-700 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-brand-400 transition-transform duration-300 group-hover:rotate-45" />
          ) : (
            <Moon className="w-5 h-5 text-dark-950 transition-transform duration-300 group-hover:-rotate-12" />
          )}
        </div>
        <span className="text-xs font-bold font-sans text-dark-950 dark:text-neutral-200 pr-1">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
};
