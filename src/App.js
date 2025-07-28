import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpotlightSection from './components/SpotlightSection';
import QuoteSection from './components/QuoteSection';
import CTASection from './components/ExtraSection';
import Footer from './components/Footer';
import FlipbookSection from './components/flipbook/FlipbookSection';
import AllSpotlights from './components/AllSpotlights';
import MasonryGallery from './components/gallery/MasonryGallery';
import AboutUs from './components/AboutUs';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - show all 8 words (8 * 1.5 = 12 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const HomePage = () => (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FlipbookSection />
        <SpotlightSection />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );

  const SpotlightsPage = () => (
    <>
      <Navbar />
      <AllSpotlights />
      <Footer />
    </>
  );

  const GalleryPage = () => (
    <>
      <Navbar />
      <MasonryGallery />
      <Footer />
    </>
  );

  const AboutUsPage = () => (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );

  return (
    <ThemeProvider>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/spotlights" element={<SpotlightsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Routes>
          </Router>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;