import React, { useState, useEffect } from 'react'
import Header from './header'
import HeroSection from './herosection'
import CursorAnimation from './CursorAnimation'
import Blog from './blog'
import CategoryHero from './CategoryHero'
import Blogscard from './Blogscard'
import Footer from './footer'
import backgroundImage from '../img/2.jpg'
import { BentoGridDemo } from './ui/bento'
import { ArrowUp } from 'lucide-react'

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <CursorAnimation />
      <div>
        {/* Main Hero Container */}
        <div style={{ height: '600px' }}>
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/70 to-teal-900/50" />
          </div>

          {/* Header */}
          <Header />

          {/* Hero Content */}
          <HeroSection />

          {/* Blog & News */}
          <Blog />

        {/* Blog Cards Section */}
        <Blogscard />
        
        {/* Footer */}
        <Footer />

        </div>
      </div>
      
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  )
}