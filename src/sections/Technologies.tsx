
const Technologies = () => (
  <section id="tecnologías" className="py-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-white mb-10 opacity-50 uppercase tracking-widest">Stack Tecnológico</h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'Docker'].map((tech) => (
            <span key={tech} className="text-xl font-semibold text-gray-400">{tech}</span>
          ))}
      </div>
    </div>
  </section>
);

export default Technologies;