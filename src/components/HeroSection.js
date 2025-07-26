import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import './HeroSection.css';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const heroText = "Welcome to Your Memory House";
  const words = heroText.split(' ');

  useEffect(() => {
    if (isInView) {
      // Auto scroll after animation completes
      const timer = setTimeout(() => {
        const flipbookSection = document.getElementById('flipbook');
        if (flipbookSection) {
          // Calculate the position to center the flipbook section
          const flipbookRect = flipbookSection.getBoundingClientRect();
          const flipbookHeight = flipbookRect.height;
          const windowHeight = window.innerHeight;
          
          // Get the current scroll position
          const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          
          // Calculate the target scroll position to center the flipbook
          const flipbookTop = flipbookSection.offsetTop;
          const targetScroll = flipbookTop - (windowHeight / 2) + (flipbookHeight / 2);
          
          // Smooth scroll to the calculated position
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(20px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="hero" className="hero-section" ref={ref}>
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="hero-word"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          Where stories come alive and memories find their home
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 4, duration: 0.6 }}
        >
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
      <div className="gradient-3"></div>
    </section>
  );
};

export default HeroSection;