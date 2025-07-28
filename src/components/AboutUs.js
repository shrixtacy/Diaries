import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const sections = useMemo(() => [
    {
      title: "WHERE STORIES START BREATHING",
      content: "At Cohopers — right in the buzz of DLF Cyber City, Patia — there's always more than just work happening. Ideas are flowing, coffee is brewing, and some of the most powerful untold stories are walking around unnoticed."
    },
    {
      title: "THIS IS DIARIES",
      content: "Diaries is where we slow things down — To sit across the table. To ask the real questions. To listen. Really listen. It's a series of raw conversations, podcasts, interviews, and event moments that dig into the journeys behind the titles — From founders to creatives, underdogs to visionaries. We don't glam it up. We don't filter it. We just write it down... like it deserves to be."
    },
    {
      title: "FOR THOSE WHO FEEL THE FIRE",
      content: "The ones chasing something bigger. The ones who've failed, rebuilt, and still show up. The ones quietly building legacies while the world scrolls past. Diaries was made for you. Because your story might be the spark someone else needs."
    },
    {
      title: "THE INSPIRATION DOESN'T SHOUT — IT WHISPERS",
      content: "You won't find clickbait here. You'll find moments. Reflections. That one line that hits different at 2:00 AM. The kind of stories that stay with you. That push you to work harder. Think deeper. And never settle."
    },
    {
      title: "READ BETWEEN THE GRIND",
      content: "Every page, every post, every voice we feature — It's not just content. It's legacy being written in real time. Here. Inside these walls. Around these people. And maybe, someday, your story too."
    }
  ], []);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentSection >= 0 && currentSection < sections.length) {
      setIsTyping(true);
      setTypedText('');
      setCharIndex(0);
      setCurrentTextIndex(currentSection);
    }
  }, [currentSection, sections.length]);

  useEffect(() => {
    if (isTyping && currentTextIndex < sections.length) {
      const currentText = sections[currentTextIndex].content;
      
      if (charIndex < currentText.length) {
        const timer = setTimeout(() => {
          setTypedText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 30); // Faster typing speed

        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
      }
    }
  }, [charIndex, isTyping, currentTextIndex, sections]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
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

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.5
      }
    }
  };

  // Create refs for each section
  const sectionRefsArray = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  
  const sectionInViewArray = [
    useInView(sectionRefsArray[0], { once: false, threshold: 0.3 }),
    useInView(sectionRefsArray[1], { once: false, threshold: 0.3 }),
    useInView(sectionRefsArray[2], { once: false, threshold: 0.3 }),
    useInView(sectionRefsArray[3], { once: false, threshold: 0.3 }),
    useInView(sectionRefsArray[4], { once: false, threshold: 0.3 })
  ];

  return (
    <div className="about-us-container">
      {sections.map((section, index) => {
        const isActive = currentSection === index;
        const isInView = sectionInViewArray[index];
        
        return (
          <motion.section
            key={index}
            ref={el => {
              sectionRefs.current[index] = el;
              sectionRefsArray[index].current = el;
            }}
            className={`about-section ${isActive ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-content">
              <motion.h1 
                className="section-title"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {section.title.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="title-word"
                    variants={titleVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              
              {isActive && (
                <motion.div 
                  className="section-text"
                  variants={textVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <span className="typed-text">{typedText}</span>
                  {isTyping && <span className="cursor">|</span>}
                </motion.div>
              )}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default AboutUs; 