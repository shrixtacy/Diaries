import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './QuoteSection.css';

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const quotes = [
    "Stories that inspire, innovations that transform",
    "Every voice matters, every story counts",
    "Building legacies one conversation at a time",
    "Where ideas meet reality, magic happens",
    "The future belongs to those who dare to dream",
    "Innovation is not just about technology, it's about people",
    "Your story could be someone else's inspiration",
    "Great things happen when we listen to each other",
    "The best ideas come from unexpected conversations",
    "We don't just work here, we create here"
  ];

  return (
    <section id="quote" className="quote-section" ref={ref}>
      <div className="quote-container">
        <motion.div 
          className="quote-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of quotes */}
              {quotes.map((quote, index) => (
                <div key={`first-${index}`} className="marquee-item">
                  <span className="quote-mark">"</span>
                  <span className="quote-text">{quote}</span>
                  <span className="quote-mark">"</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {quotes.map((quote, index) => (
                <div key={`second-${index}`} className="marquee-item">
                  <span className="quote-mark">"</span>
                  <span className="quote-text">{quote}</span>
                  <span className="quote-mark">"</span>
                </div>
              ))}
            </div>
          </div>
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