import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AllSpotlights.css';

const AllSpotlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const allSpotlightItems = [
    {
      id: 1,
      title: "Tech Innovator",
      name: "Alex Thompson",
      description: "From coding bootcamp to unicorn startup - the journey of building a revolutionary AI platform that's changing how we work.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      category: "AI & Technology",
      fullStory: "Alex Thompson's journey began in a small apartment with nothing but a laptop and a dream. After graduating from a coding bootcamp, Alex spent countless nights learning and building. The breakthrough came when they developed an AI algorithm that could predict market trends with unprecedented accuracy. Today, their startup is valued at over $2 billion and employs hundreds of people worldwide."
    },
    {
      id: 2,
      title: "Social Impact Pioneer",
      name: "Maria Santos",
      description: "How one woman's vision to solve water scarcity led to a global movement affecting millions of lives across three continents.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=400&fit=crop",
      category: "Social Impact",
      fullStory: "Maria Santos grew up in a village where clean water was a luxury. After witnessing her grandmother's struggle with waterborne diseases, Maria dedicated her life to solving water scarcity. She developed a low-cost water purification system that uses solar energy and local materials. Her innovation now provides clean water to over 5 million people across Africa, Asia, and South America."
    },
    {
      id: 3,
      title: "Creative Visionary",
      name: "Sarah Chen",
      description: "Transforming digital art through innovative AI-driven design tools that empower creators worldwide.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop",
      category: "Creative Arts",
      fullStory: "Sarah Chen's passion for art and technology led her to create revolutionary AI tools for digital artists. Her platform, ArtFlow, uses machine learning to understand artistic styles and helps creators bring their visions to life faster than ever before. The platform now serves over 2 million artists globally and has been used in major film productions and digital art exhibitions."
    },
    {
      id: 4,
      title: "Healthcare Revolutionary",
      name: "Dr. James Wilson",
      description: "Pioneering telemedicine solutions that bring quality healthcare to remote communities globally.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop",
      category: "Healthcare",
      fullStory: "Dr. James Wilson witnessed the healthcare disparities in rural areas during his medical training. This inspired him to develop a comprehensive telemedicine platform that connects patients in remote areas with specialists worldwide. His system includes AI-powered diagnostic tools and has reduced healthcare costs by 40% while improving patient outcomes significantly."
    },
    {
      id: 5,
      title: "Environmental Champion",
      name: "Elena Rodriguez",
      description: "Leading the charge in sustainable urban development with innovative green building technologies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=400&fit=crop",
      category: "Environment",
      fullStory: "Elena Rodriguez's architectural firm specializes in sustainable urban development. Her innovative use of recycled materials and renewable energy systems has transformed how cities approach construction. Her projects have won international awards and serve as models for sustainable development worldwide."
    },
    {
      id: 6,
      title: "Education Innovator",
      name: "David Kim",
      description: "Revolutionizing online education with personalized learning algorithms that adapt to each student's needs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      category: "Education",
      fullStory: "David Kim's educational platform uses AI to create personalized learning experiences for students worldwide. The system adapts to each student's learning style and pace, making education more accessible and effective. Over 10 million students across 150 countries now benefit from his innovative approach to learning."
    },
    {
      id: 7,
      title: "Financial Inclusion Advocate",
      name: "Aisha Patel",
      description: "Building digital banking solutions that bring financial services to underserved communities globally.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop",
      category: "Finance",
      fullStory: "Aisha Patel's fintech startup focuses on bringing banking services to communities that traditional banks have overlooked. Her mobile banking app requires minimal documentation and provides microloans, savings accounts, and insurance products. The platform has helped over 3 million people access financial services for the first time."
    },
    {
      id: 8,
      title: "Food Security Pioneer",
      name: "Carlos Mendez",
      description: "Developing vertical farming technologies to address global food security challenges.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop",
      category: "Agriculture",
      fullStory: "Carlos Mendez's vertical farming technology allows crops to be grown in urban environments using minimal space and water. His systems use 95% less water than traditional farming and can produce food year-round. His technology is now deployed in over 50 cities worldwide, helping to address food security challenges."
    }
  ];

  return (
    <div className="all-spotlights-page">
      <div className="all-spotlights-container">
        {/* Header Section */}
        <motion.div 
          className="all-spotlights-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="all-spotlights-title">All Spotlights</h1>
          <p className="all-spotlights-subtitle">Discover the incredible stories of innovators, changemakers, and visionaries who are shaping our world.</p>
        </motion.div>

        {/* Spotlight Grid */}
        <div className="all-spotlights-grid" ref={ref}>
          {allSpotlightItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="all-spotlight-card"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
              transition={{ 
                delay: 0.1 + (index * 0.1), 
                duration: 0.8,
                ease: 'easeOut'
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="all-card-image">
                <img src={item.image} alt={item.name} />
                <div className="all-card-overlay">
                  <span className="all-card-category">{item.category}</span>
                </div>
              </div>
              
              <div className="all-card-content">
                <h3 className="all-card-title">{item.title}</h3>
                <h4 className="all-card-name">{item.name}</h4>
                <p className="all-card-description">{item.description}</p>
                
                <motion.button 
                  className="all-spotlight-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Story
                </motion.button>
              </div>
              
              <motion.div 
                className="all-card-glow"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        <motion.div 
          className="back-to-home"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="back-home-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="back-home-link-content">
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllSpotlights; 