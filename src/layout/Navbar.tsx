import { useState, useEffect, useRef } from 'react';
import { Terminal, Menu, X, FileDown, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDetailsElement | null>(null);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : systemPrefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const sectionIds = ['inicio', 'sobre-mí', 'proyectos', 'tecnologías', 'contacto'];

    const handleScroll = () => {
      const offset = window.innerHeight * 0.3;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sectionIds[i]);
        if (!section) continue;

        const top = section.getBoundingClientRect().top;
        if (top <= offset) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      setActiveSection('inicio');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isCvMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!cvMenuRef.current?.contains(event.target as Node)) {
        setIsCvMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCvMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsCvMenuOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCvMenuOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mi', href: '#sobre-mí' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Tecnologias', href: '#tecnologías' },
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
            <div className="ml-8 flex items-baseline space-x-2 lg:space-x-4">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`relative px-2 py-2 rounded-md text-sm font-medium transition-colors after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-blue-500 after:transition-transform after:duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-600 dark:text-blue-400 after:scale-x-100'
                      : 'text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:ring-2 hover:ring-blue-500 transition-all"
              aria-label="Alternar modo de color"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <details
              ref={cvMenuRef}
              className="relative group"
              open={isCvMenuOpen}
              onToggle={(event) => setIsCvMenuOpen((event.currentTarget as HTMLDetailsElement).open)}
            >
              <summary className="list-none flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer [&::-webkit-details-marker]:hidden">
                <FileDown className="w-4 h-4" />
                CV
              </summary>
              <div className="absolute right-0 mt-2 w-52 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
                <a
                  href="/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf"
                  download
                  onClick={() => setIsCvMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-slate-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Descargar CV Tecnico
                </a>
                <a
                  href="/CV_Desarrollador_Jorge_Arequipa.pdf"
                  download
                  onClick={() => setIsCvMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-slate-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-t border-slate-200 dark:border-slate-700"
                >
                  Descargar CV Dev
                </a>
              </div>
            </details>
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
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 animate-menu-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-medium border-b border-slate-100 dark:border-slate-800/50 last:border-0 ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-gray-300 hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            <div className="pt-4 pb-2 flex flex-col gap-3 px-4">
              <a 
                href="#servicios" 
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-gray-300 hover:text-blue-500 block px-3 py-3 rounded-md text-base font-medium border border-slate-200 dark:border-slate-800/60"
              >
                Ver Servicios
              </a>
              <a 
                href="#logros" 
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-gray-300 hover:text-blue-500 block px-3 py-3 rounded-md text-base font-medium border border-slate-200 dark:border-slate-800/60"
              >
                Ver Logros
              </a>
              <a 
                href="/CV_Fullstack_Tecnico_Jorge_Arequipa.pdf" 
                download
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium"
              >
                <FileDown className="w-5 h-5" />
                Descargar CV Tecnico
              </a>
              <a 
                href="/CV_Desarrollador_Jorge_Arequipa.pdf" 
                download
                className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-gray-300 px-4 py-3 rounded-lg text-base font-medium"
              >
                <FileDown className="w-5 h-5" />
                Descargar CV Dev
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
