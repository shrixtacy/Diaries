import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const inspirationalWords = [
  'Inspire',
  'Begin',
  'Resilience',
  'Dream',
  'Journey',
  'Memory',
  'Story',
  'Create'
];

const Loader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev + 1 >= inspirationalWords.length) {
          clearInterval(interval);
          return prev; // Keep the last word
        }
        return prev + 1;
      });
    }, 1500); // 1.5 seconds per word

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="loader-content">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentWordIndex}
            className="loader-word"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {inspirationalWords[currentWordIndex]}
          </motion.h1>
        </AnimatePresence>
        

      </div>
    </motion.div>
  );
};

export default Loader;