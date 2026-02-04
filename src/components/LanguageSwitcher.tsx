import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-black/50 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="font-michroma text-sm text-white/70">
        {i18n.language === 'pl' ? 'PL' : 'EN'}
      </span>
      <span className="text-purple-400">|</span>
      <span className="font-michroma text-sm text-white/40">
        {i18n.language === 'pl' ? 'EN' : 'PL'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;
