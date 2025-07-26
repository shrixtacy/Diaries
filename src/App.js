import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpotlightSection from './components/SpotlightSection';
import ExtraSection from './components/ExtraSection';
import Footer from './components/Footer';
import FlipbookSection from './components/flipbook/FlipbookSection';
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

  return (
    <ThemeProvider>
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main>
              <HeroSection />
              <FlipbookSection />
              <SpotlightSection />
              <ExtraSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;