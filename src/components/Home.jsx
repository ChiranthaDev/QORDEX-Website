import React, { useState, useEffect } from 'react';
import Header from './header';
import HeroSection from './herosection';
import CursorAnimation from './CursorAnimation';
import Blog from './blog';
import CategoryHero from './CategoryHero';
import Blogscard from './Blogscard';
import Footer from './footer';
import backgroundImage from '../img/2.jpg';
// import { BentoGridDemo } from './ui/bento';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">

      <CursorAnimation />

      {/* HERO SECTION WITH BACKGROUND */}
      <section className="relative w-full min-h-[108vh] sm:min-h-[103vh] md:min-h-[105vh] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/70 to-teal-900/50" />

        <Header />

        {/* Hero content should stack, not overflow */}
        <div className="relative w-full h-full pt-6 sm:pt-10">
          <HeroSection />
        </div>
      </section>

      {/* BLOG & CONTENT SECTIONS */}
      <div className="relative bg-gray-900 w-full overflow-hidden">
        <Blog />
        <Blogscard />
      </div>

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TOP BUTTON */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
