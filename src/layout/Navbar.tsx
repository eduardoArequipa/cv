import { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight text-white">Jorge.dev</span>
          </div>
          
          {/* Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
              Cotizar Proyecto
            </a>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-500 block px-3 py-4 rounded-md text-base font-medium border-b border-slate-800/50 last:border-0"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white block px-4 py-3 rounded-lg text-base font-medium mx-4"
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