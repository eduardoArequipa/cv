import { Mail, Facebook } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Contact = () => {
  const whatsappNumber = "+59172973548";
  const whatsappMessage = encodeURIComponent("Hola Jorge, me gustaría contactarte para un proyecto.");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 px-4 bg-blue-600/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">¿Tienes un proyecto en mente?</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Estoy disponible para nuevos proyectos y colaboraciones. Hablemos sobre cómo puedo ayudarte a materializar tu idea.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:jorgearecruz@gmail.com" 
            className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Enviar Correo
          </a>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all w-full sm:w-auto justify-center shadow-lg shadow-green-500/20"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>

          <a 
            href="https://www.facebook.com/profile.php?id=61585269801188"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all w-full sm:w-auto justify-center shadow-lg shadow-blue-500/20"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;