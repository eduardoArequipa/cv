import { motion } from 'framer-motion';
import { ChevronRight, Facebook, Mail } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Hero = () => {
  const whatsappNumber = "59172973548";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="inicio" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-3">Ingeniero en Informática</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Construyo Soluciones <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Escalables</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Especializado en el desarrollo de <b>sistemas de ventas, control de inventarios</b> y soluciones de software a medida para optimizar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#servicios" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all group">
              Ver Servicios
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center gap-6 px-8 py-4 bg-slate-800 rounded-xl border border-slate-700">
              <a href="https://www.facebook.com/profile.php?id=61585269801188" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              </a>
              <a href="mailto:jorgearecruz@gmail.com">
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;