import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, description, image, tags }: any) => (
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
          <ExternalLink className="w-4 h-4" /> Demo
        </button>
        {/* Opcional: Solo si el código es público */}
        {/* <button className="flex items-center gap-2 text-white text-sm font-semibold hover:text-blue-400 transition-colors">
          <Github className="w-4 h-4" /> Código
        </button> */}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Sistema POS Farmacia",
      category: "Sistema de Escritorio / Web",
      description: "Sistema completo de punto de venta con control de lotes, fecha de vencimiento y facturación electrónica integrada.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "PostgreSQL", "Electron"]
    },
    {
      title: "Gestión de Inventarios Bodega",
      category: "Aplicación Web",
      description: "Plataforma para el control de stock en tiempo real, múltiples almacenes y generación de reportes automáticos.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Django", "React", "Docker"]
    },
    {
      title: "E-commerce Autopartes",
      category: "Tienda Online",
      description: "Tienda virtual con catálogo filtrable por modelo de vehículo, pasarela de pagos y panel administrativo.",
      image: "https://images.unsplash.com/photo-1556740758-90de2742e1e2?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "Tailwind", "Stripe"]
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Algunas de las soluciones que he desarrollado.</p>
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