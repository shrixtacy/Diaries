import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './ExtraSection.css';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    story: '',
    category: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactDetails = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "hello@cohoperdiaries.com",
      description: "Send us your story ideas"
    },
    {
      icon: "📱",
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Speak with our team"
    },
    {
      icon: "📍",
      title: "Visit Us",
      detail: "123 Memory Lane, Story City",
      description: "Come share your journey"
    },
    {
      icon: "💬",
      title: "Social Media",
      detail: "@cohoperdiaries",
      description: "Connect with our community"
    }
  ];

  return (
    <section id="cta" className="cta-section" ref={ref}>
      <div className="cta-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Want us to cover your story? Contact Us.
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Share your journey with the world. Let us help you tell your story in a way that inspires others.
        </motion.p>

        <div className="cta-content">
          {/* Contact Details */}
          <motion.div 
            className="contact-details"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="contact-title">Get in Touch</h3>
            <div className="contact-grid">
              {contactDetails.map((contact, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-info">
                    <h4 className="contact-name">{contact.title}</h4>
                    <p className="contact-detail">{contact.detail}</p>
                    <p className="contact-description">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Tell Us Your Story</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone (Optional)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Story Category</option>
                  <option value="startup">Startup Journey</option>
                  <option value="innovation">Innovation & Technology</option>
                  <option value="social-impact">Social Impact</option>
                  <option value="personal-growth">Personal Growth</option>
                  <option value="business">Business Success</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="story"
                  value={formData.story}
                  onChange={handleInputChange}
                  placeholder="Tell us about your story (Brief overview)"
                  required
                  rows="4"
                  className="form-textarea"
                />
              </div>

              <motion.button 
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Your Story
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="cta-footer"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>We'll get back to you within 24 hours to discuss your story</p>
        </motion.div>
        
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
        <div className="gradient-5"></div>
      </div>
    </section>
  );
};

export default CTASection;