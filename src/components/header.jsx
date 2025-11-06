import React from 'react'
import { Search, User, Play } from 'lucide-react'
import logo from '../img/logoo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-22 h-22 object-contain" />
        </div>
        <h2 
          className="text-2xl leading-tight mb-0 ml-4 whitespace-nowrap"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '0.5px white'
                  }}
                >
        </h2>
      </div>

      {/* Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-white font-medium">
          <Link to="/" className="text-lg hover:text-teal-200 transition">
            Home
          </Link>
          <Link to="/news" className="text-lg hover:text-teal-200 transition">
            News
          </Link>
          <Link to="/blog" className="text-lg hover:text-teal-200 transition">
            Blog
          </Link>
          <Link to="/reflections" className="text-lg hover:text-teal-200 transition flex items-center gap-2">
            Watch
          </Link>
          <Link to="#" className="text-lg hover:text-teal-200 transition">
            Project
          </Link>
          <Link to="#" className="text-lg hover:text-teal-200 transition">
            About
          </Link>
          <Link to="#" className="text-lg hover:text-teal-200 transition">
            Contact Us
          </Link>
        </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-white rounded-full px-6 py-3 pr-14 text-base text-gray-700 w-64 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          <Search className="absolute right-5 top-3.5 w-5 h-5 text-gray-400" />
        </div>
        <Link to="/Login" className="flex items-center gap-3 bg-white text-teal-700 px-7 py-3 rounded-full text-base font-medium hover:bg-teal-50 transition shadow-lg">
          <User className="w-5 h-5" />
          Log In
        </Link>
      </div>
    </nav>
  );
}