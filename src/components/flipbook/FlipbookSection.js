import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './FlipbookSection.css';

const FlipbookSection = () => {
  const iframeRef = useRef(null);

  return (
    <section id="flipbook" className="flipbook-section">
      <div className="flipbook-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Weekly Zodiac Tarot
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Explore the mystical world of tarot with our interactive flipbook featuring weekly zodiac readings
        </motion.p>

        <motion.div 
          className="flipbook-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            ref={iframeRef}
            src="/flipbook/flipbook.html"
            title="Weekly Zodiac Tarot Flipbook"
            className="flipbook-iframe"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>
        <div className="gradient-3"></div>
      </div>
    </section>
  );
};

export default FlipbookSection; 