import React from 'react';
import footerVideo from '../img/footer.mp4';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background video with dark green overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={footerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/90"></div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo / Name */}
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <h2
              className="font-bold text-white"
              style={{ fontSize: '160px', lineHeight: '1' }}
            >
              Qordex
            </h2>
            <p className="text-gray-300 mt-4 text-lg font-medium italic">
            </p>
          </div>

          {/* Navigation / Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center sm:text-left">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'News', 'Blog', 'Projects', 'Promos', 'About', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a
                      href={item === 'About' ? '/about' : '#'}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
              <ul className="space-y-2">
                {['Facebook', 'TikTok', 'YouTube', 'LinkedIn', 'Instagram', 'GitHub'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} <strong>Qordex</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
