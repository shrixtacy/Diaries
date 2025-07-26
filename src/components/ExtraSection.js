import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ExtraSection.css';

const ExtraSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const memories = [
    { id: 1, year: '2019', title: 'The Beginning', description: 'First line of code written' },
    { id: 2, year: '2020', title: 'The Challenge', description: 'Pivoting during uncertainty' },
    { id: 3, year: '2021', title: 'The Growth', description: 'Scaling beyond expectations' },
    { id: 4, year: '2022', title: 'The Impact', description: 'Touching millions of lives' },
    { id: 5, year: '2023', title: 'The Vision', description: 'Building for the future' },
    { id: 6, year: '2024', title: 'The Legacy', description: 'Inspiring the next generation' }
  ];

  return (
    <section id="extra" className="extra-section" ref={ref}>
      <div className="extra-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Memory Timeline
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Every journey is a collection of moments that define who we become
        </motion.p>

        <div className="timeline-container">
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
          />
          
          <div className="timeline-items">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ 
                  delay: 0.7 + (index * 0.2), 
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{memory.year}</div>
                  <h3 className="timeline-title">{memory.title}</h3>
                  <p className="timeline-description">{memory.description}</p>
                </div>
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7 + (index * 0.2), duration: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <h3 className="cta-title">Ready to Share Your Story?</h3>
          <p className="cta-description">
            Join thousands of founders and storytellers who have found their voice in our memory house
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Writing Today
          </motion.button>
        </motion.div>
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
        <div className="gradient-5"></div>
      </div>
    </section>
  );
};

export default ExtraSection;