import React, { useState } from 'react';
import { Search, Upload, Bell, User, Home, Play, Clock, MoreVertical, Settings as SettingsIcon, Flame, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [quality, setQuality] = useState('auto');

  // Sidebar menu items
  const menuItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: Play, text: 'Shorts', path: '/shorts' },
    { icon: Clock, text: 'Watchlist', path: '/watchlist' },
    { icon: Heart, text: 'Saved videos', path: '/saved-videos' },
    { icon: Flame, text: 'Trending', path: '/trending' },
    { icon: Play, text: 'Categories', path: '/categories' },
    { icon: SettingsIcon, text: 'Settings', path: '/settings', active: true }
  ];

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

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
          <div className="p-4 max-w-4xl">
            <div className="flex items-center mb-6">
              <SettingsIcon className="w-8 h-8 text-green-500 mr-3" />
              <h1 className="text-2xl font-bold">Settings</h1>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Playback Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Auto-play next video</h3>
                    <p className="text-gray-600 text-sm">Automatically play the next video in queue</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={autoPlay}
                      onChange={() => setAutoPlay(!autoPlay)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Video Quality</h3>
                    <p className="text-gray-600 text-sm">Select preferred video quality</p>
                  </div>
                  <select 
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="auto">Auto</option>
                    <option value="1080p">1080p</option>
                    <option value="720p">720p</option>
                    <option value="480p">480p</option>
                    <option value="360p">360p</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Appearance</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-gray-600 text-sm">Enable dark theme for the app</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Notifications</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Enable Notifications</h3>
                    <p className="text-gray-600 text-sm">Receive notifications for new videos and updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={notifications}
                      onChange={() => setNotifications(!notifications)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition duration-200"
              >
                Save Settings
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;