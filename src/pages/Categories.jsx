import React, { useState } from 'react';
import { Search, Upload, Bell, User, Home, Play, Clock, MoreVertical, Flame, Settings as SettingsIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for categories
  const categories = [
    { id: 1, name: 'Music', icon: '🎵', videos: '12K videos' },
    { id: 2, name: 'Gaming', icon: '🎮', videos: '8.5K videos' },
    { id: 3, name: 'Sports', icon: '⚽', videos: '5.2K videos' },
    { id: 4, name: 'News', icon: '📰', videos: '15K videos' },
    { id: 5, name: 'Movies', icon: '🎬', videos: '7.8K videos' },
    { id: 6, name: 'Education', icon: '📚', videos: '9.3K videos' },
    { id: 7, name: 'Tech', icon: '💻', videos: '6.7K videos' },
    { id: 8, name: 'Fashion', icon: '👗', videos: '4.1K videos' },
    { id: 9, name: 'Cooking', icon: '👨‍🍳', videos: '3.9K videos' },
    { id: 10, name: 'Travel', icon: '✈️', videos: '6.2K videos' },
    { id: 11, name: 'Comedy', icon: '😂', videos: '11K videos' },
    { id: 12, name: 'Health', icon: '💪', videos: '5.6K videos' }
  ];

  // Sidebar menu items
  const menuItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: Play, text: 'Shorts', path: '/shorts' },
    { icon: Clock, text: 'Watchlist', path: '/watchlist' },
    { icon: Heart, text: 'Saved videos', path: '/saved-videos' },
    { icon: Flame, text: 'Trending', path: '/trending' },
    { icon: Play, text: 'Categories', path: '/categories', active: true },
    { icon: SettingsIcon, text: 'Settings', path: '/settings' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 w-8 h-8 rounded-full"></div>
            <span className="text-xl font-bold">QorStream</span>
          </div>
        </div>

        <div className="hidden md:flex items-center mx-6 flex-1 max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 rounded-full py-2 px-4 pl-5 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Upload className="w-6 h-6 cursor-pointer hover:text-gray-700" />
          <Bell className="w-6 h-6 cursor-pointer hover:text-gray-700" />
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Left Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} hidden md:block bg-white fixed top-16 left-0 h-full overflow-y-auto transition-all duration-300 border-r border-gray-200`}>
          <div className="py-4">
            {menuItems.map((item, index) => (
              <Link 
                to={item.path}
                key={index}
                className={`flex items-center px-4 py-3 cursor-pointer ${
                  item.active ? 'bg-gray-100 border-l-4 border-green-500' : 'hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-6 h-6" />
                {sidebarOpen && (
                  <span className="ml-4 font-medium">{item.text}</span>
                )}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} transition-all duration-300 pt-4`}>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Categories</h1>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className="group cursor-pointer bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-200"
                >
                  <div className="text-3xl mb-3 text-center">{category.icon}</div>
                  <h3 className="font-bold text-center mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{category.videos}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Categories;