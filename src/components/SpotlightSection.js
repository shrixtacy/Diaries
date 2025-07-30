import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SpotlightSection.css';

const SpotlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const spotlightItems = [
    {
      id: 1,
      title: "Tech Innovator",
      name: "Alex Thompson",
      description: "From coding bootcamp to unicorn startup - the journey of building a revolutionary AI platform that's changing how we work.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      category: "AI & Technology"
    },
    {
      id: 2,
      title: "Social Impact Pioneer",
      name: "Maria Santos",
      description: "How one woman's vision to solve water scarcity led to a global movement affecting millions of lives across three continents.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=400&fit=crop",
      category: "Social Impact"
    },
    {
      id: 3,
      title: "Creative Visionary",
      name: "Sarah Chen",
      description: "Transforming digital art through innovative AI-driven design tools that empower creators worldwide.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop",
      category: "Creative Arts"
    },
    {
      id: 4,
      title: "Healthcare Revolutionary",
      name: "Dr. James Wilson",
      description: "Pioneering telemedicine solutions that bring quality healthcare to remote communities globally.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop",
      category: "Healthcare"
    }
  ];

  return (
    <section id="spotlight" className="spotlight-section" ref={ref}>
      {/* Background Spotlight Image */}
      <motion.div 
        className="spotlight-background-image"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.3
        }}
      >
        <img 
          src="/images2/spotlights.png" 
          alt="Spotlight" 
          className="spotlight-bg-img"
        />
      </motion.div>
      
      {/* PEOPLE.gif positioned at bottom behind top components */}
      <div className="people-background-image">
        <img 
          src="/images2/PEOPLE.gif" 
          alt="People" 
          className="people-bg-img"
        />
      </div>
      
      <div className="spotlight-container">
        {/* View More Spotlights Header */}
        <motion.div 
          className="view-more-spotlights"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="view-more-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/spotlights" className="view-more-link-content">
              <span className="arrow-icon">↑</span>
              <span className="view-more-text">View More Spotlights</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="spotlight-layout">
          <div className="spotlight-grid">
            {spotlightItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="spotlight-card"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
                transition={{ 
                  delay: 0.3 + (index * 0.1), 
                  duration: 0.8,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.name} />
                  <div className="card-overlay">
                    <span className="card-category">{item.category}</span>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-name">{item.name}</h4>
                  <p className="card-description">{item.description}</p>
                  
                  <motion.button 
                    className="spotlight-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Full Story
                  </motion.button>
                </div>
                
                <motion.div 
                  className="card-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="spotlight-footer"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
        </motion.div>
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
      </div>
    </section>
  );
};

export default SpotlightSection;