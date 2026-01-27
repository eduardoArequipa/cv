export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Sistema POS Farmacéutico",
    category: "Punto de Venta",
    description: "Gestión integral de farmacias con control de lotes, alertas de vencimiento, manejo de psicotrópicos y facturación electrónica integrada.",
    image: "/imgFarmacia.webp",
    tags: ["React", "Node.js", "PostgreSQL", "Electron"]
  },
  {
    title: "Facturación Electrónica",
    category: "Fintech / ERP",
    description: "Módulo de facturación en línea con firma digital, validación XML en tiempo real y conexión directa con impuestos nacionales.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FastAPI", "XML Sign", "Redis"]
  },
  {
    title: "App de Taxis & Transporte",
    category: "Movilidad Urbana",
    description: "Plataforma tipo Uber con apps para conductor y pasajero, geolocalización en tiempo real y cálculo de tarifas dinámicas.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase", "Google Maps API", "NestJS"]
  },
  {
    title: "ERP Comercial Integral",
    category: "Gestión Empresarial",
    description: "Sistema administrativo completo: Compras, Ventas, Inventarios multialmacén, Cuentas por Cobrar/Pagar y Reportes BI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "C# .NET", "PostgreSql", "Docker"]
  },
  {
    title: "Sistema de Reservas",
    category: "SaaS / Agenda",
    description: "Gestión de citas y calendarios para clínicas y servicios. Recordatorios automáticos por WhatsApp y pagos online.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Supabase", "Tailwind", "Twilio"]
  },
  {
    title: "App de Pedidos & Delivery",
    category: "E-commerce",
    description: "Solución para restaurantes con menú digital, carrito de compras, seguimiento de repartidores y panel de cocina.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Express", "MongoDB", "Socket.io"]
  }
];
