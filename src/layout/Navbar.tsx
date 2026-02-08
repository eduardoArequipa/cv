import { useState, useEffect } from 'react';
import { Terminal, Menu, X, FileDown, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Inicializar el tema desde localStorage o preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newVal;
    });
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mí' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Tecnologías', href: '#tecnologías' },
    { name: 'Contacto', href: '#contacto' },
  ];

  // Cerrar el menú al hacer scroll o cambiar de sección
  useEffect(() => {
    const handleScroll = () => isOpen && setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Jorge.dev</span>
          </div>
          
          {/* Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:ring-2 hover:ring-blue-500 transition-all"
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="/CV_Jorge_Arequipa.pdf" 
              download 
              className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              <FileDown className="w-4 h-4" />
              CV
            </a>
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
              Cotizar
            </a>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400"
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white p-2"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-gray-300 hover:text-blue-500 block px-3 py-4 rounded-md text-base font-medium border-b border-slate-100 dark:border-slate-800/50 last:border-0"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3 px-4">
              <a 
                href="/CV_Jorge_Arequipa.pdf" 
                download
                className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-gray-300 px-4 py-3 rounded-lg text-base font-medium"
              >
                <FileDown className="w-5 h-5" />
                Descargar CV
              </a>
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white block px-4 py-3 rounded-lg text-base font-medium text-center"
              >
                Cotizar Proyecto
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;