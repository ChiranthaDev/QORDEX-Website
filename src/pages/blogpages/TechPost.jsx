import React, { useState, useEffect } from 'react';
import { Calendar, User, ChevronDown, Monitor, Gamepad2, Smartphone, Code, Wallet, MoreHorizontal, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

const TechPost = () => {
  // Sample blog post data for different categories
  const allBlogPosts = [
    {
      id: 1,
      title: "The Impact of Automation on Business Management Efficiency",
      excerpt: "Learn how automation is boosting business management efficiency and driving growth in various sectors.",
      date: "September 20, 2024",
      author: "Ethan Caldwell",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1619535550327-bfdfd245a3c4"
    },
    {
      id: 2,
      title: "How 5G Technology Will Impact the Travel Industry in 2024",
      excerpt: "Discover how 5G technology is set to revolutionize connectivity and enhance travel experiences.",
      date: "August 20, 2024",
      author: "Ethan Caldwell",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
    },
    {
      id: 3,
      title: "The Future of Startups: What Entrepreneurs Need to Know in 2024",
      excerpt: "Learn what startup founders must consider as they navigate the tech-driven business landscape in 2024.",
      date: "August 1, 2024",
      author: "Ethan Caldwell",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1607703703674-1c48b6b79c7d"
    },
    {
      id: 4,
      title: "Revolutionary Gaming Console Announced",
      excerpt: "The latest gaming console promises to change how we play games with cutting-edge graphics and performance.",
      date: "July 15, 2024",
      author: "Michael Torres",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
    },
    {
      id: 5,
      title: "Apple's New Device Breaks Sales Records",
      excerpt: "The latest Apple release has shattered all previous sales records in its first week.",
      date: "June 30, 2024",
      author: "Sarah Williams",
      category: "Apple",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
    },
    {
      id: 6,
      title: "Blockchain Technology in Finance",
      excerpt: "How blockchain is revolutionizing the financial industry with secure and transparent transactions.",
      date: "June 10, 2024",
      author: "David Chen",
      category: "Crypto & Blockchain",
      image: "https://images.unsplash.com/photo-1555066935-4365d14bab8c"
    },
    {
      id: 7,
      title: "The Rise of Quantum Computing",
      excerpt: "Quantum computing is set to solve problems that are impossible for classical computers to handle.",
      date: "May 28, 2024",
      author: "Alex Johnson",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
    },
    {
      id: 8,
      title: "Cybersecurity Threats in 2024",
      excerpt: "New cybersecurity threats are emerging as technology advances, requiring new defense strategies.",
      date: "May 15, 2024",
      author: "Robert Kim",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-156301727-70a08a52c4f8"
    },
    {
      id: 9,
      title: "Mobile App Development Trends",
      excerpt: "The latest trends in mobile app development are shaping how we interact with technology daily.",
      date: "April 30, 2024",
      author: "Maria Garcia",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
    },
    {
      id: 10,
      title: "AI in Healthcare: Transforming Patient Care",
      excerpt: "Artificial intelligence is revolutionizing healthcare with faster diagnoses and personalized treatments.",
      date: "April 18, 2024",
      author: "Jennifer Wu",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },
    {
      id: 11,
      title: "The Evolution of Cloud Computing",
      excerpt: "Cloud computing continues to evolve, offering more scalable and cost-effective solutions for businesses.",
      date: "April 5, 2024",
      author: "Thomas Reed",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      id: 12,
      title: "Sustainable Tech: Green Solutions",
      excerpt: "Technology companies are developing eco-friendly solutions to reduce their environmental impact.",
      date: "March 22, 2024",
      author: "Amanda Foster",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      id: 13,
      title: "Virtual Reality in Education",
      excerpt: "VR technology is transforming education by providing immersive learning experiences.",
      date: "March 10, 2024",
      author: "James Wilson",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
    },
    {
      id: 14,
      title: "The Future of Electric Vehicles",
      excerpt: "Electric vehicles are becoming more accessible and efficient, changing the automotive industry.",
      date: "February 28, 2024",
      author: "Michael Torres",
      category: "Automotive Tech",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      id: 15,
      title: "Space Tourism: A New Frontier",
      excerpt: "Commercial space travel is becoming a reality, opening new possibilities for exploration.",
      date: "February 15, 2024",
      author: "Sarah Williams",
      category: "Space & Astronomy",
      image: "https://images.unsplash.com/photo-1454789548928-9a7310581f48"
    }
  ];

  const location = useLocation();
  const navigate = useNavigate();
  
  // State for dropdown visibility
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showGamingDropdown, setShowGamingDropdown] = useState(false);
  const [showDevicesDropdown, setShowDevicesDropdown] = useState(false);
  const [showDeveloperDropdown, setShowDeveloperDropdown] = useState(false);
  const [showFinanceDropdown, setShowFinanceDropdown] = useState(false);
  const [showExtraDropdown, setShowExtraDropdown] = useState(false);

  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15; // 3 columns x 5 rows

  // Set active category based on URL or default
  useEffect(() => {
    // In a real app, you might get this from URL params or state
    // For now, we'll just use the default 'All'
    setActiveCategory('All');
  }, [location]);

  // Filter posts based on active category
  const filteredPosts = allBlogPosts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
    // Close all dropdowns
    setShowTechDropdown(false);
    setShowGamingDropdown(false);
    setShowDevicesDropdown(false);
    setShowDeveloperDropdown(false);
    setShowFinanceDropdown(false);
    setShowExtraDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-2xl shadow-lg">
            <Header />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-green-600">Home</a>
              </li>
              <li className="text-gray-400">›</li>
              <li className="text-green-600 font-medium">{activeCategory === 'All' ? 'All Categories' : activeCategory}</li>
            </ol>
          </nav>

          {/* Category Filters with Dropdowns */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setActiveCategory('All');
                  navigate('/blog');
                }}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'All'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <MoreHorizontal className="w-4 h-4" />
                All Categories
              </button>
              
              {/* Tech Category with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    handleCategoryChange('Technology');
                    setShowTechDropdown(!showTechDropdown);
                    // Close other dropdowns
                    setShowGamingDropdown(false);
                    setShowDevicesDropdown(false);
                    setShowDeveloperDropdown(false);
                    setShowFinanceDropdown(false);
                    setShowExtraDropdown(false);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Technology' || 
                    activeCategory === 'Web Development' || 
                    activeCategory === 'Mobile Apps' || 
                    activeCategory === 'AI & Machine Learning' || 
                    activeCategory === 'Cybersecurity'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  Tech
                  <ChevronDown className={`w-4 h-4 transition-transform ${showTechDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Tech Sub-options Dropdown */}
                {showTechDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleCategoryChange('Web Development')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Web Development'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Mobile Apps')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Mobile Apps'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Mobile Apps
                    </button>
                    <button
                      onClick={() => handleCategoryChange('AI & Machine Learning')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'AI & Machine Learning'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      AI & Machine Learning
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Cybersecurity')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Cybersecurity'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Cybersecurity
                    </button>
                  </div>
                )}
              </div>
              
              {/* Gaming Category with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    handleCategoryChange('Gaming');
                    setShowGamingDropdown(!showGamingDropdown);
                    // Close other dropdowns
                    setShowTechDropdown(false);
                    setShowDevicesDropdown(false);
                    setShowDeveloperDropdown(false);
                    setShowFinanceDropdown(false);
                    setShowExtraDropdown(false);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Gaming' || 
                    activeCategory === 'Esports & Tournaments' || 
                    activeCategory === 'Game Reviews' || 
                    activeCategory === 'Mobile Games' || 
                    activeCategory === 'PC & Console Gaming'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Gamepad2 className="w-4 h-4" />
                  Gaming & Entertainment
                  <ChevronDown className={`w-4 h-4 transition-transform ${showGamingDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Gaming Sub-options Dropdown */}
                {showGamingDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleCategoryChange('Gaming')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Gaming'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Gaming
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Esports & Tournaments')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Esports & Tournaments'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Esports & Tournaments
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Game Reviews')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Game Reviews'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Game Reviews
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Mobile Games')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Mobile Games'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Mobile Games
                    </button>
                    <button
                      onClick={() => handleCategoryChange('PC & Console Gaming')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'PC & Console Gaming'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      PC & Console Gaming
                    </button>
                  </div>
                )}
              </div>
              
              {/* Devices Category with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    handleCategoryChange('Devices');
                    setShowDevicesDropdown(!showDevicesDropdown);
                    // Close other dropdowns
                    setShowTechDropdown(false);
                    setShowGamingDropdown(false);
                    setShowDeveloperDropdown(false);
                    setShowFinanceDropdown(false);
                    setShowExtraDropdown(false);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Devices' || 
                    activeCategory === 'Apple' || 
                    activeCategory === 'Google' || 
                    activeCategory === 'Microsoft' || 
                    activeCategory === 'Samsung' || 
                    activeCategory === 'Xiaomi' || 
                    activeCategory === 'OnePlus' || 
                    activeCategory === 'Huawei' || 
                    activeCategory === 'Realme' || 
                    activeCategory === 'Oppo' || 
                    activeCategory === 'Sony'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  Brands & Devices
                  <ChevronDown className={`w-4 h-4 transition-transform ${showDevicesDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Devices Sub-options Dropdown */}
                {showDevicesDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleCategoryChange('Apple')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Apple'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Apple
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Google')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Google'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Google
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Microsoft')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Microsoft'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Microsoft
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Samsung')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Samsung'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Samsung
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Xiaomi')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Xiaomi'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Xiaomi
                    </button>
                    <button
                      onClick={() => handleCategoryChange('OnePlus')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'OnePlus'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      OnePlus
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Huawei')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Huawei'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Huawei
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Realme')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Realme'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Realme
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Oppo')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Oppo'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Oppo
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Sony')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Sony'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Sony
                    </button>
                  </div>
                )}
              </div>
              
              {/* Developer Category with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    handleCategoryChange('Developer');
                    setShowDeveloperDropdown(!showDeveloperDropdown);
                    // Close other dropdowns
                    setShowTechDropdown(false);
                    setShowGamingDropdown(false);
                    setShowDevicesDropdown(false);
                    setShowFinanceDropdown(false);
                    setShowExtraDropdown(false);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Developer' || 
                    activeCategory === 'Web Development' || 
                    activeCategory === 'App Development' || 
                    activeCategory === 'Programming & Coding' || 
                    activeCategory === 'Design & UI/UX' || 
                    activeCategory === 'Creator Hub'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  Developer & Creator Zone
                  <ChevronDown className={`w-4 h-4 transition-transform ${showDeveloperDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Developer Sub-options Dropdown */}
                {showDeveloperDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleCategoryChange('Web Development')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Web Development'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() => handleCategoryChange('App Development')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'App Development'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      App Development
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Programming & Coding')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Programming & Coding'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Programming & Coding
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Design & UI/UX')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Design & UI/UX'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Design & UI/UX
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Creator Hub')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Creator Hub'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Creator Hub (YouTubers, Streamers)
                    </button>
                  </div>
                )}
              </div>
              
              {/* Finance Category with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    handleCategoryChange('Finance');
                    setShowFinanceDropdown(!showFinanceDropdown);
                    // Close other dropdowns
                    setShowTechDropdown(false);
                    setShowGamingDropdown(false);
                    setShowDevicesDropdown(false);
                    setShowDeveloperDropdown(false);
                    setShowExtraDropdown(false);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Finance' || 
                    activeCategory === 'Crypto & Blockchain' || 
                    activeCategory === 'E-Money & Fintech' || 
                    activeCategory === 'Online Business' || 
                    activeCategory === 'Digital Marketing' || 
                    activeCategory === 'Tech Lifestyle'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  <Wallet className="w-4 h-4" />
                  Finance & Digital Life
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFinanceDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Finance Sub-options Dropdown */}
                {showFinanceDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleCategoryChange('Crypto & Blockchain')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Crypto & Blockchain'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Crypto & Blockchain
                    </button>
                    <button
                      onClick={() => handleCategoryChange('E-Money & Fintech')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'E-Money & Fintech'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      E-Money & Fintech
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Online Business')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Online Business'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Online Business
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Digital Marketing')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Digital Marketing'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Digital Marketing
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Tech Lifestyle')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Tech Lifestyle'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Tech Lifestyle
                    </button>
                  </div>
                )}
              </div>
              
              {/* Extra Category with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    handleCategoryChange('Extra');
                    setShowExtraDropdown(!showExtraDropdown);
                    // Close other dropdowns
                    setShowTechDropdown(false);
                    setShowGamingDropdown(false);
                    setShowDevicesDropdown(false);
                    setShowDeveloperDropdown(false);
                    setShowFinanceDropdown(false);
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Extra' || 
                    activeCategory === 'Automotive Tech' || 
                    activeCategory === 'Space & Astronomy' || 
                    activeCategory === 'Opinion & Editorials' || 
                    activeCategory === 'Future Tech' || 
                    activeCategory === 'Trending Now'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  Extra / Miscellaneous
                  <ChevronDown className={`w-4 h-4 transition-transform ${showExtraDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Extra Sub-options Dropdown */}
                {showExtraDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button
                      onClick={() => handleCategoryChange('Automotive Tech')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Automotive Tech'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Automotive Tech
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Space & Astronomy')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Space & Astronomy'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Space & Astronomy
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Opinion & Editorials')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Opinion & Editorials'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Opinion & Editorials
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Future Tech')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Future Tech'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Future Tech
                    </button>
                    <button
                      onClick={() => handleCategoryChange('Trending Now')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Trending Now'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Trending Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Category Header Section */}
          <div className="mb-12 flex items-center gap-5 bg-green-50 rounded-2xl p-6">
            <div className="bg-green-100 rounded-full p-4">
              <Monitor className="w-12 h-12 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{activeCategory}</h1>
              <p className="text-gray-600">
                Stay ahead of the curve with the newest developments in {activeCategory.toLowerCase()}...
              </p>
            </div>
          </div>

          {/* Post Grid Section - 3 columns x 5 rows */}
          <div className="posts-grid mb-12" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {currentPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-2xl overflow-hidden border border-green-200 hover:border-green-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // Only show first, last, current, and nearby pages
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`w-10 h-10 rounded-full ${
                      currentPage === pageNumber
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return <span key={pageNumber} className="px-2 py-2">...</span>;
              }
              return null;
            })}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              Next
            </button>
          </div>

          {/* Responsive behavior */}
          <style jsx>{`
            @media (max-width: 768px) {
              .posts-grid {
                grid-template-columns: 1fr;
              }
              
              .category-header {
                flex-direction: column;
                align-items: flex-start;
              }
              
              .category-header img {
                width: 70px;
                height: 70px;
              }
            }
          `}</style>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TechPost;