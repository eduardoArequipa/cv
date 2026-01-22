import { User, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre-mí" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-400">¡Hola! Soy Jorge Eduardo</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Soy <b>Ingeniero en Informática</b>, apasionado por la creación de soluciones tecnológicas que transforman negocios. Me especializo en el desarrollo de sistemas robustos y eficientes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mi enfoque no es solo escribir código, sino entender los problemas de mis clientes para entregar software que realmente aporte valor, desde el control de inventarios hasta la automatización de ventas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <User className="text-blue-500 w-5 h-5" />
                <span>Jorge Eduardo Arequipa Cruz</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="text-blue-500 w-5 h-5" />
                <span>26 años (19 de Octubre, 1999)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-500 w-5 h-5" />
                <span>Tarija, Bolivia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="text-blue-500 w-5 h-5" />
                <span>Ingeniero en Informática</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-linear-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
               <User className="w-40 h-40 text-blue-500/40 group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-2xl">
                 <p className="text-blue-400 font-bold">"La ingeniería es el arte de hacer realidad lo imposible."</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;