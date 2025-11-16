import React, { useState } from 'react';
import { Search, Upload, Bell, User, Home, Play, Clock, MoreVertical, Heart, MessageCircle, Share, Flame, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shorts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for short videos
  const shortVideos = Array(10).fill().map((_, index) => ({
    id: index + 1,
    title: `Short Video ${index + 1}`,
    channel: `Creator ${index % 3 + 1}`,
    views: `${Math.floor(Math.random() * 50)}K views`,
    likes: `${Math.floor(Math.random() * 10)}K`,
    comments: `${Math.floor(Math.random() * 1000)}`,
    thumbnail: `https://picsum.photos/320/580?random=${index + 100}`
  }));

  // Sidebar menu items
  const menuItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: Play, text: 'Shorts', path: '/shorts', active: true },
    { icon: Clock, text: 'Watchlist', path: '/watchlist' },
    { icon: Heart, text: 'Saved videos', path: '/saved-videos' },
    { icon: Flame, text: 'Trending', path: '/trending' },
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

        {/* Main Content - Short Videos Feed */}
        <main className={`flex-1 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} transition-all duration-300 pt-4`}>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {shortVideos.map((video) => (
                <div key={video.id} className="relative mb-4">
                  {/* Video Player Area */}
                  <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-[9/16]">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">{video.title}</h3>
                      <p className="text-gray-200 text-sm">{video.channel}</p>
                      <p className="text-gray-200 text-sm">{video.views} views</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center cursor-pointer">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-xs mt-1">Follow</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center cursor-pointer">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-xs mt-1">{video.likes}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center cursor-pointer">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-xs mt-1">{video.comments}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center cursor-pointer">
                        <Share className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white text-xs mt-1">Share</span>
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

export default Shorts;