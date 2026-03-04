import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

interface AchievementPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
}

const achievementPhotos: AchievementPhoto[] = [
  {
    id: 'icpc-1',
    image: '/icpc/icpc-uajms-1.webp',
    title: 'ICPC 2024 - UAJMS',
    caption: 'Participacion en la competencia ICPC 2024, Universidad Autonoma Juan Misael Saracho, Tarija - Bolivia.',
  },
  {
    id: 'icpc-2',
    image: '/icpc/icpc-uajms-2.webp',
    title: 'Equipo en Competencia',
    caption: 'Momento del evento ICPC 2024 representando a UAJMS en Tarija, Bolivia.',
  },
];

const AchievementCard = ({ image, title, caption }: AchievementPhoto) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm"
    >
      <div className="aspect-4/3 bg-slate-100 dark:bg-slate-900">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center p-6">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              foto de ICPC <code className="font-mono">public{image}</code>
            </p>
          </div>
        )}
      </div>
      <figcaption className="p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{caption}</p>
      </figcaption>
    </motion.figure>
  );
};

const Achievements = () => {
  return (
    <section id="logros" className="py-20 px-4 bg-slate-100/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-5">
            <Trophy className="w-4 h-4" />
            Logros y Competencias
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Participacion en ICPC 2024
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Experiencia en programacion competitiva durante el evento ICPC 2024 realizado en la Universidad Autonoma Juan Misael Saracho (UAJMS), Tarija - Bolivia.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Gestion 2024
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              UAJMS, Tarija - Bolivia
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievementPhotos.map((photo) => (
            <AchievementCard key={photo.id} {...photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
