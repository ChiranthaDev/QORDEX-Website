import React, { useState } from 'react'
import { Search, User, Menu, X } from 'lucide-react'
import logo from '../img/logoo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-20 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        <h2
          className="hidden sm:block text-xl sm:text-2xl leading-tight"
          style={{ color: 'transparent', WebkitTextStroke: '0.5px white' }}
        >
          {/* Optional Title */}
        </h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6 text-white font-medium">
        <Link to="/" className="hover:text-teal-200 transition">Home</Link>
        <Link to="/news" className="hover:text-teal-200 transition">News</Link>
        <Link to="/blog" className="hover:text-teal-200 transition">Blog</Link>
        <Link to="/reflections" className="hover:text-teal-200 transition">Watch</Link>
        <Link to="#" className="hover:text-teal-200 transition">Project</Link>
        <Link to="/about" className="hover:text-teal-200 transition">About</Link>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* Desktop Search */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-full px-5 py-2 pr-12 w-40 md:w-60 text-gray-700 focus:ring-2 focus:ring-teal-300"
          />
          <Search className="absolute right-4 top-2.5 w-4 h-4 text-gray-500" />
        </div>

        {/* Login Button */}
        <Link 
          to="/Login" 
          className="hidden sm:flex items-center gap-2 bg-white text-teal-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-50 transition shadow-md"
        >
          <User className="w-4 h-4"/>
          Log In
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-teal-900/95 backdrop-blur-md text-white font-medium flex flex-col items-center gap-5 py-6 lg:hidden transition-all">
          
          {/* Mobile Search */}
          <div className="relative w-11/12">
            <input
              type="text"
              placeholder="Search"
              className="bg-white rounded-full px-5 py-2 pr-12 w-full text-gray-700 focus:ring-2 focus:ring-teal-300"
            />
            <Search className="absolute right-4 top-2.5 w-4 h-4 text-gray-500" />
          </div>

          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/news">News</Link>
          <Link onClick={() => setIsOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setIsOpen(false)} to="/reflections">Watch</Link>
          <Link onClick={() => setIsOpen(false)} to="#">Project</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          
          <Link 
            to="/Login" 
            onClick={() => setIsOpen(false)}
            className="bg-white text-teal-700 px-7 py-2 rounded-full"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}
