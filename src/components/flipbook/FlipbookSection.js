import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FlipbookSection.css';

const FlipbookSection = () => {
  const iframeRef = useRef(null);
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isAutoOpening, setIsAutoOpening] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    let scrollEndTimeout;

    const handleScroll = () => {
      // Clear any existing timeouts
      clearTimeout(scrollTimeout);
      clearTimeout(scrollEndTimeout);

      // Set a timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        // Wait a bit more to ensure scroll is completely finished
        scrollEndTimeout = setTimeout(() => {
          if (!hasTriggered && sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Check if the section is in the center of the viewport (indicating auto-scroll completed)
            const windowHeight = window.innerHeight;
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            
            // If section is roughly centered (within 100px), trigger flipbook opening
            if (Math.abs(sectionCenter - viewportCenter) < 100) {
              setHasTriggered(true);
              
              // Wait 3 seconds after scroll completes, then open the flipbook
              setTimeout(() => {
                setIsAutoOpening(true);
                if (iframeRef.current) {
                  iframeRef.current.contentWindow.postMessage(
                    { type: 'openFlipbook' },
                    '*'
                  );
                }
              }, 3000);
            }
          }
        }, 500); // Wait 500ms after scroll stops
      }, 100); // Wait 100ms after last scroll event
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also check periodically in case scroll events are missed
    const intervalCheck = setInterval(() => {
      if (!hasTriggered && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        
        // If section is centered and we haven't triggered yet
        if (Math.abs(sectionCenter - viewportCenter) < 100 && rect.top < windowHeight) {
          setHasTriggered(true);
          
          setTimeout(() => {
            setIsAutoOpening(true);
            if (iframeRef.current) {
              iframeRef.current.contentWindow.postMessage(
                { type: 'openFlipbook' },
                '*'
              );
            }
          }, 3000);
        }
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(scrollEndTimeout);
      clearInterval(intervalCheck);
    };
  }, [hasTriggered]);

  return (
    <section ref={sectionRef} id="flipbook" className="flipbook-section">
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
          ref={wrapperRef}
          className={`flipbook-wrapper ${isAutoOpening ? 'auto-opening' : ''}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            ref={iframeRef}
            src="/flipbook/flipbook.html"
            title="Weekly Zodiac Tarot Flipbook"
            className={`flipbook-iframe ${isAutoOpening ? 'auto-opening' : ''}`}
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