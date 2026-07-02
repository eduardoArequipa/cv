import { motion } from 'framer-motion';
import { Server, Layers, GitBranch } from 'lucide-react';

interface TechItem {
  name: string;
  icon?: string;
  LucideIcon?: React.ElementType;
}

interface Category {
  name: string;
  items: TechItem[];
}

const categories: Category[] = [
  {
    name: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Angular", icon: "devicon-angularjs-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
    ],
  },
  {
    name: "Backend & Lenguajes",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Spring Boot", icon: "devicon-spring-original" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Go", icon: "devicon-go-original" },
      { name: "C# / .NET", icon: "devicon-csharp-plain" },
      { name: "C / C++", icon: "devicon-cplusplus-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
  },
  {
    name: "DevOps & Herramientas",
    items: [
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Odoo", icon: "devicon-odoo-plain" },
    ],
  },
  {
    name: "Arquitectura",
    items: [
      { name: "REST API", LucideIcon: Server },
      { name: "Clean Architecture", LucideIcon: Layers },
      { name: "Hexagonal", LucideIcon: GitBranch },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Technologies = () => (
  <section id="tecnologías" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Stack Tecnológico
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="space-y-14">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6 text-center">
              {cat.name}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {cat.items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="group relative p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 text-center cursor-default shadow-sm hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

                  <div className="relative flex flex-col items-center gap-2">
                    {item.icon ? (
                      <i className={`${item.icon} colored text-4xl md:text-5xl block`} />
                    ) : item.LucideIcon ? (
                      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <item.LucideIcon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                    ) : null}
                    <span className="text-sm font-semibold text-slate-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
