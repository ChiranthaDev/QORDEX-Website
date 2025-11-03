import React from 'react';
import footerVideo from '../img/footer.mp4';

const Footer = () => {
  return (
    <footer className="relative py-12">
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center pr-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 
              className="font-bold text-white"
              style={{ fontSize: '200px', lineHeight: '1' }}
            >
              Qordex
            </h2>
            <p className="text-gray-300 mt-4 text-lg font-medium italic">
             {/* Connecting you to what matters */}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Project</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Promos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-lg">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Qordex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;