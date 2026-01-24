import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ title, category, description, image, tags }: Project) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">{category}</span>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
        <button className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-400 transition-colors">
          <ExternalLink className="w-4 h-4" /> Ver Detalles
        </button>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Sistema POS Farmacéutico",
      category: "Punto de Venta",
      description: "Gestión integral de farmacias con control de lotes, alertas de vencimiento, manejo de psicotrópicos y facturación electrónica integrada.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Electron"]
    },
    {
      title: "Facturación Electrónica",
      category: "Fintech / ERP",
      description: "Módulo de facturación en línea con firma digital, validación XML en tiempo real y conexión directa con impuestos nacionales.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "FastAPI", "XML Sign", "Redis"]
    },
    {
      title: "App de Taxis & Transporte",
      category: "Movilidad Urbana",
      description: "Plataforma tipo Uber con apps para conductor y pasajero, geolocalización en tiempo real y cálculo de tarifas dinámicas.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      tags: ["Flutter", "Firebase", "Google Maps API", "NestJS"]
    },
    {
      title: "ERP Comercial Integral",
      category: "Gestión Empresarial",
      description: "Sistema administrativo completo: Compras, Ventas, Inventarios multialmacén, Cuentas por Cobrar/Pagar y Reportes BI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "C# .NET", "SQL Server", "Docker"]
    },
    {
      title: "Sistema de Reservas",
      category: "SaaS / Agenda",
      description: "Gestión de citas y calendarios para clínicas y servicios. Recordatorios automáticos por WhatsApp y pagos online.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "Supabase", "Tailwind", "Twilio"]
    },
    {
      title: "App de Pedidos & Delivery",
      category: "E-commerce",
      description: "Solución para restaurantes con menú digital, carrito de compras, seguimiento de repartidores y panel de cocina.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "Express", "MongoDB", "Socket.io"]
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Soluciones tecnológicas desarrolladas a medida para diferentes industrias.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;