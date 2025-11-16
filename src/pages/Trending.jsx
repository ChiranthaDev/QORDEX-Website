import React, { useState } from 'react';
import { Search, Upload, Bell, User, Home, Play, Clock, MoreVertical, Flame, Settings as SettingsIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for trending videos
  const trendingVideos = Array(20).fill().map((_, index) => ({
    id: index + 1,
    title: `Trending Video ${index + 1}`,
    channel: `Channel ${index % 6 + 1}`,
    views: `${Math.floor(Math.random() * 500)}K views`,
    time: `${Math.floor(Math.random() * 5) + 1} days ago`,
    duration: `${Math.floor(Math.random() * 25) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    thumbnail: `https://picsum.photos/320/180?random=${index + 400}`
  }));

  // Sidebar menu items
  const menuItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: Play, text: 'Shorts', path: '/shorts' },
    { icon: Clock, text: 'Watchlist', path: '/watchlist' },
    { icon: Heart, text: 'Saved videos', path: '/saved-videos' },
    { icon: Flame, text: 'Trending', path: '/trending', active: true },
    { icon: Play, text: 'Categories', path: '/categories' },
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
            <div className="flex items-center mb-6">
              <Flame className="w-8 h-8 text-red-500 mr-3" />
              <h1 className="text-2xl font-bold">Trending</h1>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingVideos.map((video) => (
                <div 
                  key={video.id}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-9 h-9 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 group-hover:font-bold line-clamp-2 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">{video.channel}</p>
                      <p className="text-gray-600 text-sm">{video.views} • {video.time}</p>
                    </div>
                    
                    <div className="flex-shrink-0 ml-2">
                      <MoreVertical className="w-5 h-5 text-gray-500 hover:text-gray-900" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Trending;