import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageBackground from '../components/PageBackground';

const NotFound = () => {
  return (
    <>
      <PageBackground />
      <div className="min-h-screen flex items-center justify-center relative z-10 px-6">
        <motion.div
          className="text-center max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-michroma text-7xl sm:text-9xl font-bold text-white/10 mb-4 select-none">
            404
          </p>
          <h1 className="font-michroma text-xl sm:text-2xl text-white mb-4">
            Strona nie istnieje
          </h1>
          <p className="text-white/50 mb-10 leading-relaxed text-sm sm:text-base">
            Podany adres nie został znaleziony. Sprawdź URL lub wróć na stronę główną.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-michroma text-sm tracking-wider text-white/80 hover:text-white border border-white/15 hover:border-white/30 bg-white/3 hover:bg-white/6 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Wróć na stronę główną
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
