import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './QuoteSection.css';

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="quote" className="quote-section" ref={ref}>
      <div className="quote-container">
        <motion.div 
          className="quote-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="quote-mark opening"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            "
          </motion.div>
          
          <motion.h2 
            className="quote-text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Stories that inspire, innovations that transform
          </motion.h2>
          
          <motion.div 
            className="quote-mark closing"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            "
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="quote-author"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="author-line"></span>
          <p className="author-text">Cohoper Diaries</p>
        </motion.div>
        
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>
    </section>
  );
};

export default QuoteSection; 