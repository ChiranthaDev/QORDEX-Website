import React from 'react'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import accWEBM from '../img/acc.webm'

export default function HeroSection() {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

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

  return (
    <div className="relative z-10 flex flex-col md:flex-row items-start px-4 sm:px-6 md:px-8 pt-6 md:pt-10 h-full gap-6">

      {/* Left Social Icons */}
      <div className="flex flex-row md:flex-col gap-4 pt-2 order-2 md:order-1">
        {/* Simple valid SVG icons to avoid parsing errors */}
        <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-teal-700/80 hover:bg-teal-600 rounded-lg flex items-center justify-center text-white transition" aria-label="social-1">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>

        <a href="#" className="w-8 h-8 md:w-9 md:h-9 bg-teal-700/80 hover:bg-teal-600 rounded flex items-center justify-center text-white transition" aria-label="social-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>

        <a href="#" className="w-8 h-8 md:w-9 md:h-9 bg-teal-700/80 hover:bg-teal-600 rounded flex items-center justify-center text-white transition" aria-label="social-3">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 7.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>

        <a href="#" className="w-8 h-8 md:w-9 md:h-9 bg-teal-700/80 hover:bg-teal-600 rounded flex items-center justify-center text-white transition" aria-label="social-4">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 7.5v9A2 2 0 0 0 5 19.5h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 10.5l4 3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Center Text Section */}
      <div className="flex-1 px-2 sm:px-6 md:px-10 order-1 md:order-2">
        <div className="border-l-4 border-white pl-4 sm:pl-6 md:pl-8">

          <div className="flex gap-2 mb-4 sm:mb-6">
            {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full" />)}
            <div className="w-6 h-2 sm:w-8 sm:h-3 bg-teal-700 rounded-full" />
            {[...Array(2)].map((_, i) => <div key={i} className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full" />)}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-0">THINK.</h2>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-0">CREATE.</h2>

          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-10 sm:mb-12"
            style={{ color: 'transparent', WebkitTextStroke: '2.5px white' }}
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

          <button className="text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base flex items-center gap-3 mt-2 sm:mt-4 transition shadow-lg bg-[var(--light-green)] hover:bg-[var(--bright-green)]">
            EXPLORE
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
              <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-teal-600" />
            </div>
          </button>
        </div>

        <div className="flex gap-3 mt-5 sm:mt-8 ml-4 sm:ml-8">
          <div className="w-6 sm:w-10 h-1 bg-teal-500 rounded" />
          <div className="w-4 sm:w-6 h-1 bg-teal-700 rounded" />
          <div className="w-3 sm:w-4 h-1 bg-teal-500 rounded" />
        </div>
      </div>

      {/* Right Cards */}
      <div className="flex justify-center md:justify-start order-3">
        <motion.div
          className="flex gap-4 sm:gap-6 mt-4 sm:mt-8 overflow-x-auto pb-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              className="bg-white rounded-lg shadow-xl min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] overflow-hidden hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
            >
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-24 sm:h-28 md:h-32" />
              <div className="p-4 sm:p-5">
                <h3 className="font-semibold text-teal-900 text-sm sm:text-base mb-1 sm:mb-2">New AI Agent Released.</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4">Chirantha J Ellepola</p>

                <button className="text-white w-full py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition bg-[var(--light-green)] hover:bg-[var(--dark-forest-green)]">
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

      {/* Walking Animation Lower */}
      <motion.video 
  src={accWEBM}
  className="absolute -bottom-34 sm:-bottom-36 md:-bottom-40 h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain pointer-events-none left-0 right-0"
  animate="walk"
  variants={walkingVariants}
  loop
  autoPlay
  muted
/>

    </div>
  );
}
