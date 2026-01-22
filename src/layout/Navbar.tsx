import { Terminal } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-xl tracking-tight text-white">Jorge.dev</span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {[
              { name: 'Inicio', href: '#inicio' },
              { name: 'Sobre Mí', href: '#sobre-mí' },
              { name: 'Servicios', href: '#servicios' },
              { name: 'Proyectos', href: '#proyectos' },
              { name: 'Tecnologías', href: '#tecnologías' },
              { name: 'Contacto', href: '#contacto' },
            ].map((item) => (
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
        <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
          Cotizar Proyecto
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;