import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import './HeroSection.css';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showGif, setShowGif] = useState(false);
  const [hideGif, setHideGif] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroText = "Welcome to Your Memory House";
  const words = heroText.split(' ');

  useEffect(() => {
    if (isInView) {
      // Show GIF after hero section appears
      const showTimer = setTimeout(() => {
        setShowGif(true);
      }, 2000); // 2 seconds after hero appears

      // Hide GIF after it plays once (3.5 seconds duration)
      const hideTimer = setTimeout(() => {
        setHideGif(true);
      }, 3500); // 3.5 seconds total (2s delay + 1.5s GIF duration)

      // Auto scroll after animation completes
      const scrollTimer = setTimeout(() => {
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

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearTimeout(scrollTimer);
      };
    }
  }, [isInView]);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate relative position (0-1)
        const relativeX = x / rect.width;
        const relativeY = y / rect.height;
        
        setMousePosition({ x: relativeX, y: relativeY });
      }
    };

    const heroSection = ref.current;
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

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

  const heroStyle = {
    backgroundImage: `url('/images2/tyeyr.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    position: 'relative',
    zIndex: 5
  };

  // Calculate pen position based on mouse movement
  const penStyle = {
    transform: `translate(${mousePosition.x * 60 - 30}px, ${mousePosition.y * 60 - 30}px)`,
    transition: 'transform 0.1s ease-out'
  };

  return (
    <section id="hero" className="hero-section" ref={ref} style={heroStyle}>
      {/* Pen GIF Background Overlay */}
      <motion.div 
        className="pen-gif-overlay"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={penStyle}
      >
        <img 
          src="/images2/pen.gif" 
          alt="Pen Animation" 
          className="pen-gif"
        />
      </motion.div>

      {/* Book Page GIF Top Left Corner */}
      <motion.div 
        className="book-page-overlay"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img 
          src="/images2/book page.gif" 
          alt="Book Page Animation" 
          className="book-page-gif"
        />
      </motion.div>

      {/* GIF Overlay */}
      {showGif && !hideGif && (
        <motion.div 
          className="gif-overlay"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/images2/fgbt.gif" 
            alt="Hero Animation" 
            className="hero-gif"
            onLoad={() => {
              // Ensure GIF plays only once
              const img = document.querySelector('.hero-gif');
              if (img) {
                img.style.animationIterationCount = '1';
              }
            }}
          />
        </motion.div>
      )}

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