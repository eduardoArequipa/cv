import { ShoppingCart, Package, Laptop, Code2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Sistemas de Ventas (POS)",
      description: "Desarrollo de puntos de venta intuitivos, gestión de facturación, reportes de ventas en tiempo real y múltiples métodos de pago."
    },
    {
      icon: Package,
      title: "Control de Inventarios",
      description: "Sistemas robustos para el seguimiento de stock, alertas de stock bajo, gestión de proveedores y movimientos de almacén."
    },
    {
      icon: Laptop,
      title: "Software Administrativo",
      description: "CRMs y ERPs a medida para optimizar los procesos internos de tu negocio, automatizando tareas repetitivas."
    },
    {
      icon: Code2,
      title: "Desarrollo Web & Apps",
      description: "Creación de plataformas web modernas y aplicaciones móviles personalizadas con las últimas tecnologías."
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Soluciones Informáticas</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Especializado en crear herramientas que impulsan el crecimiento y la organización de tu negocio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;