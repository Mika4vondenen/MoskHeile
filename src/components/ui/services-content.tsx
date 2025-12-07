import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ServicesContentProps {
  children: ReactNode;
  tabKey: string;
}

export function ServicesContent({ children, tabKey }: ServicesContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
