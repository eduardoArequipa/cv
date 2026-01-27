import { motion } from 'framer-motion';
import { projects, type Project } from '../data/projects';

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
        loading="lazy"
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
    </div>
  </motion.div>
);

const Projects = () => {
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
