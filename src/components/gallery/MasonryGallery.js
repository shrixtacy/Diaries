import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import './MasonryGallery.css';

const MasonryGallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Unsplash images with different aspect ratios for masonry effect
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      alt: 'Mountain landscape',
      title: 'Mountain Dreams',
      category: 'Nature'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
      alt: 'Forest path',
      title: 'Forest Path',
      category: 'Nature'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop',
      alt: 'Sunset over mountains',
      title: 'Golden Hour',
      category: 'Landscape'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop',
      alt: 'Ocean waves',
      title: 'Ocean Waves',
      category: 'Ocean'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=700&fit=crop',
      alt: 'City skyline',
      title: 'Urban Dreams',
      category: 'City'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop',
      alt: 'Desert dunes',
      title: 'Desert Sands',
      category: 'Desert'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=650&fit=crop',
      alt: 'Waterfall',
      title: 'Cascading Waters',
      category: 'Water'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop',
      alt: 'Aurora borealis',
      title: 'Northern Lights',
      category: 'Aurora'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=750&fit=crop',
      alt: 'Meadow flowers',
      title: 'Wild Flowers',
      category: 'Nature'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=480&fit=crop',
      alt: 'Snowy peaks',
      title: 'Alpine Peaks',
      category: 'Mountains'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
      alt: 'Tropical beach',
      title: 'Tropical Paradise',
      category: 'Beach'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=520&fit=crop',
      alt: 'Autumn forest',
      title: 'Autumn Colors',
      category: 'Nature'
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=680&fit=crop',
      alt: 'Sunset sky',
      title: 'Twilight Sky',
      category: 'Sky'
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=420&fit=crop',
      alt: 'Mountain lake',
      title: 'Crystal Lake',
      category: 'Lake'
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=720&fit=crop',
      alt: 'Valley view',
      title: 'Hidden Valley',
      category: 'Valley'
    }
  ];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const handleImageHover = (imageId) => {
    setHoveredImage(imageId);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  const handleImageClick = (image) => {
    console.log('Image clicked:', image);
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  // Infinite scrolling animation effect - only scroll down
  useEffect(() => {
    setScrollDirection('down');
  }, []);

  // Duplicate images for infinite scrolling effect
  const extendedImages = [...images, ...images, ...images];

  return (
    <div className="gallery-container">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>The Lane of Frozen Moments</h1>
        <p>Discover the beauty of nature through our curated collection</p>
      </motion.div>

      <div className="infinite-scroll-container">
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid scroll-down"
          columnClassName="masonry-grid_column"
        >
          {extendedImages.map((image, index) => {
            // Generate random tilt between -30 and 30 degrees
            const randomTilt = (Math.random() - 0.5) * 60; // -30 to +30 degrees
            const randomRotation = Math.random() * 10 - 5; // -5 to +5 degrees for subtle variation
            
            return (
              <motion.div
                key={`${image.id}-${index}`}
                className="gallery-item polaroid-style"
                style={{
                  transform: `rotate(${randomTilt}deg)`,
                  zIndex: Math.floor(Math.random() * 10) + 1
                }}
                initial={{ opacity: 0, scale: 0.8, rotate: randomTilt }}
                animate={{ opacity: 1, scale: 1, rotate: randomTilt }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: randomTilt + randomRotation,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => handleImageHover(image.id)}
                onHoverEnd={handleImageLeave}
                onClick={() => handleImageClick(image)}
              >
              <div className="image-container">
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`gallery-image ${hoveredImage === image.id ? 'chroma-effect' : ''}`}
                />
                <motion.div
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredImage === image.id ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <span className="category">{image.category}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
        </Masonry>
      </div>

      {/* Minimalistic Popup */}
      {isPopupOpen && selectedImage && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            className="minimal-popup"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-content">
              <div className="popup-image-container">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="popup-image"
                />
              </div>
              <div className="popup-info">
                <h2 className="popup-title">{selectedImage.title}</h2>
                <p className="popup-description">
                  A beautiful capture showcasing the essence of {selectedImage.category.toLowerCase()}.
                </p>
              </div>
            </div>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MasonryGallery; 