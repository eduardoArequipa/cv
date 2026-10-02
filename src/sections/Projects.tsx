import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Github, Braces, Factory } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const ProjectCard = ({ title, category, description, image, tags, featured, documentationUrl, repositoryUrl, siteUrl }: Project) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group overflow-hidden rounded-2xl border bg-white dark:bg-slate-900 shadow-sm ${featured ? 'mb-8 grid lg:grid-cols-2 border-blue-200 dark:border-blue-900' : 'border-slate-200 dark:border-slate-800'}`}
    >
      {featured ? (
        <div className="relative flex items-center bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 p-6 sm:p-10">
          <div className="w-full min-w-0 rounded-xl border border-slate-700 bg-slate-950/80 p-5 sm:p-6 text-slate-200 shadow-xl">
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <span className="flex items-center gap-2 text-sm font-mono"><Braces size={18} className="text-blue-400" /> Semantic Validator</span>
              <span className="text-xs text-slate-400">SDK</span>
            </div>
            <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">Texto de entrada</p>
            <p className="mb-6 font-mono text-sm">&quot;Taladro Bosch de 750 W&quot;</p>
            <p className="mb-2 text-xs uppercase tracking-widest text-slate-400">Resultado ilustrativo</p>
            <pre className="overflow-x-auto text-sm leading-7 text-emerald-300"><code>{'{\n  "valid": true,\n  "confidence": 0.98,\n  "status": "valid"\n}'}</code></pre>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">Ejemplo de respuesta. Los resultados reales pueden variar.</p>
          </div>
        </div>
      ) : image ? (
        <div className="aspect-video overflow-hidden">
          <img src={image} alt={title} loading="lazy" decoding="async" width={800} height={450} className="h-full w-full object-cover motion-safe:group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="flex aspect-video flex-col justify-between bg-linear-to-br from-teal-950 via-slate-900 to-teal-800 p-6 text-white">
          <div className="flex items-center justify-between"><Factory size={28} className="text-teal-300" /><span className="text-xs uppercase tracking-widest text-teal-200">Industria textil</span></div>
          <div><p className="text-3xl font-bold tracking-wide">DHARMA</p><p className="mt-2 text-sm text-teal-100">Producción · Costura · Confección</p></div>
          <p className="text-xs text-teal-200">Portada del proyecto · Santa Cruz, Bolivia</p>
        </div>
      )}

      <div className={`flex flex-col ${featured ? 'justify-center p-6 sm:p-10' : 'p-6'}`}>
        {featured && <span className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">Proyecto destacado</span>}
        <span className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{category}</span>
        <h3 className={`mb-3 font-bold text-slate-900 dark:text-white ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{tag}</span>)}
        </div>
        {(documentationUrl || repositoryUrl || siteUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {siteUrl && <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">Ver sitio <ArrowUpRight size={16} /></a>}
            {documentationUrl && <a href={documentationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"><BookOpen size={17} /> Ver documentación <ArrowUpRight size={16} /></a>}
            {repositoryUrl && <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"><Github size={17} /> Ver código <ArrowUpRight size={16} /></a>}
          </div>
        )}
        {featured && <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">SDKs con clave propia (BYOK). El sitio público ofrece documentación; la API alojada está pausada.</p>}
      </div>
    </motion.article>
  );
};

const Projects = () => (
  <section id="proyectos" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Proyectos Destacados</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-gray-400 mt-4">Herramientas open source y soluciones tecnológicas para diferentes industrias.</p>
      </div>
      {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.title} {...project} />)}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.filter((project) => !project.featured).map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </div>
  </section>
);

export default Projects;
