import React from 'react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="p-8 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 group shadow-sm hover:shadow-md">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-500" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;