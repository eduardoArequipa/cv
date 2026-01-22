import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingWhatsApp = () => {
  const whatsappNumber = "59172973548";
  const whatsappMessage = encodeURIComponent("Hola Jorge, vi tu portafolio y me interesa cotizar un sistema.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-green-600 transition-colors"
      title="Chat en WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;