import React from 'react'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import accWEBM from '../img/acc.webm'

export default function HeroSection() {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Stagger effect for cards
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Walking animation variants
  const walkingVariants = {
    walk: {
      x: [-100, 1400],
      transition: {
        duration: 35,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    }
  };

  // Typing animation for INNOVATE text
  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Pop animation for Explore button
  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  // Pulsing animation for decorative dots
  const dotVariants = {
    pulse: {
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Staggered animation for navigation arrows
  const arrowVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Container variants for staggered arrow animation
  const arrowContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative z-10 flex items-start px-8 pt-8 h-full">
      {/* Left Side - Social Icons */}
      <div className="flex flex-col gap-4 pt-2">
        <a href="#" className="w-12 h-12 bg-teal-700/80 hover:bg-teal-600 rounded-lg flex items-center justify-center text-white transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
        <a href="#" className="w-9 h-9 bg-teal-700/80 hover:bg-teal-600 rounded flex items-center justify-center text-white transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        <a href="#" className="w-9 h-9 bg-teal-700/80 hover:bg-teal-600 rounded flex items-center justify-center text-white transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
        </a>
        <a href="#" className="w-9 h-9 bg-teal-700/80 hover:bg-teal-600 rounded flex items-center justify-center text-white transition">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"/>
          </svg>
        </a>
      </div>

      {/* Center - Main Content */}
      <div className="flex-1 px-12">
        <div className="border-l-4 border-white pl-8">
          {/* Decorative dots - new design without animation */}
          <div className="flex gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-teal-500 rounded-full"></div>
            ))}
            <div className="w-8 h-3 bg-teal-700 rounded-full"></div>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-teal-500 rounded-full"></div>
            ))}
          </div>

          <h2 className="text-7xl font-bold text-white leading-tight mb-0">THINK.</h2>
          <h2 className="text-7xl font-bold text-white leading-tight mb-0">CREATE.</h2>
          
          {/* INNOVATE with typing animation */}
          <h2 
            className="text-7xl font-bold leading-tight mb-12"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2.5px white'
            }}
          >
            <motion.span
              initial="hidden"
              animate="visible"
              variants={typingVariants}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              INNOVATE.
            </motion.span>
          </h2>

          <p className="text-white text-lg leading-relaxed max-w-xl mb-12 opacity-90">
          </p>

          {/* EXPLORE */}
          <button className="text-white px-10 py-4 rounded-lg font-semibold text-base flex items-center gap-3 transition shadow-lg bg-[var(--light-green)] hover:bg-[var(--bright-green)]">
            EXPLORE
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-teal-600" />
            </div>
          </button>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex gap-3 mt-8 ml-8">
          <div className="w-10 h-1 bg-teal-500 rounded"></div>
          <div className="w-6 h-1 bg-teal-700 rounded"></div>
          <div className="w-4 h-1 bg-teal-500 rounded"></div>
        </div>
      </div>

      {/* Right Side - Cards and Navigation Arrows */}
      <div className="flex flex-col">
        {/* Navigation Arrows - new design without animation */}
        <div className="flex gap-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45"></div>
          ))}
        </div>

        {/* Cards - Horizontal Layout with Animation */}
        <motion.div 
          className="flex gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((num) => (
            <motion.div 
              key={num} 
              className="bg-white rounded-lg shadow-xl w-56 overflow-hidden transform hover:scale-102 transition-transform duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-32" />
              <div className="p-5">
                <h3 className="font-semibold text-teal-900 text-base mb-2">New AI Agent Released.</h3>
                <p className="text-gray-500 text-sm mb-5">Chirantha J Ellepola</p>
                <button className="text-white w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition bg-[var(--light-green)] hover:bg-[var(--dark-forest-green)]">
                  READ MORE
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <ChevronRight className="w-2.5 h-2.5 text-teal-700" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Walking Animation at Bottom - Extended path to reach right edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-visible">
        <motion.video 
          src={accWEBM}
          className="h-32 w-auto"
          animate="walk"
          variants={walkingVariants}
          loop
          autoPlay
          muted
        />
      </div>
    </div>
  );
}