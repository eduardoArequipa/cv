import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', color: 'from-blue-400 to-blue-600' },
  { name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
  { name: 'Node.js', color: 'from-green-400 to-green-600' },
  { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-800' },
  { name: 'Python', color: 'from-yellow-400 to-blue-500' },
  { name: 'Docker', color: 'from-blue-500 to-cyan-500' },
  { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
  { name: 'Git', color: 'from-orange-500 to-red-600' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Technologies = () => (
  <section id="tecnologías" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-slate-400 dark:text-white mb-2 dark:opacity-50 uppercase tracking-widest">Stack Tecnológico</h2>
        <div className="w-10 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center shadow-sm"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            <span className="text-lg font-bold text-slate-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
              {tech.name}
            </span>
            <div className={`mt-2 h-1 w-0 group-hover:w-full bg-linear-to-r ${tech.color} mx-auto transition-all duration-300 rounded-full`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Technologies;