import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      className="border-b border-white/10 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-start justify-between gap-6 text-left group focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg px-4 -mx-4 transition-all"
        aria-expanded={isOpen}
      >
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-michroma text-white group-hover:text-purple-400 transition-colors duration-300 flex-1 leading-snug">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown
            size={28}
            className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-4 sm:pr-12 pl-4">
              <p className="text-base md:text-lg text-white/70 leading-relaxed" style={{ lineHeight: 1.7 }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      question: t('faq.questions.cost.question'),
      answer: t('faq.questions.cost.answer'),
    },
    {
      question: t('faq.questions.fitBusiness.question'),
      answer: t('faq.questions.fitBusiness.answer'),
    },
    {
      question: t('faq.questions.complexity.question'),
      answer: t('faq.questions.complexity.answer'),
    },
    {
      question: t('faq.questions.control.question'),
      answer: t('faq.questions.control.answer'),
    },
    {
      question: t('faq.questions.mistakes.question'),
      answer: t('faq.questions.mistakes.answer'),
    },
    {
      question: t('faq.questions.time.question'),
      answer: t('faq.questions.time.answer'),
    },
    {
      question: t('faq.questions.waiting.question'),
      answer: t('faq.questions.waiting.answer'),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <motion.div
        className="absolute top-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/5 rounded-full blur-[60px] md:blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20 px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-michroma text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {t('faq.headline')}
          </h2>
          <p className="text-lg md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-0">
          {questions.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
