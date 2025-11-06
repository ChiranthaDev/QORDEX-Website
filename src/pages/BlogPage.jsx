import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, Eye, Clock3, ArrowUp, Monitor, Gamepad2, Smartphone, Code, Wallet, MoreHorizontal, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const BlogPage = () => {
  const navigate = useNavigate();
  const blogData = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
      date: "Nov 5, 2025",
      author: "Alex Johnson",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      views: "2.4K"
    },
    {
      id: 2,
      title: "Mastering Responsive Design: A Complete Guide",
      excerpt: "Learn how to create websites that look stunning on all devices with these advanced responsive design techniques.",
      date: "Nov 3, 2025",
      author: "Sarah Williams",
      readTime: "10 min read",
      category: "Design & UI/UX",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
       views: "3.1K"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      excerpt: "A comprehensive guide to creating web applications that are accessible to all users, including those with disabilities.",
      date: "Oct 30, 2025",
      author: "David Chen",
      readTime: "12 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1555066932-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.8K"
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Modern Web Applications",
      excerpt: "Discover the fundamental design principles that make web applications both beautiful and functional.",
      date: "Oct 28, 2025",
      author: "Maria Garcia",
      readTime: "7 min read",
      category: "Design & UI/UX",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.9K"
    },
    {
      id: 5,
      title: "Optimizing JavaScript Performance for Large Applications",
      excerpt: "Advanced techniques to improve the performance of large-scale JavaScript applications.",
      date: "Oct 25, 2025",
      author: "Robert Kim",
      readTime: "9 min read",
      category: "Programming & Coding",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "3.5K"
    },
    {
      id: 6,
      title: "The Rise of Progressive Web Apps (PWAs)",
      excerpt: "How PWAs are bridging the gap between web and mobile applications with native-like experiences.",
      date: "Oct 22, 2025",
      author: "Emily Parker",
      readTime: "6 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.7K"
    },
    {
      id: 7,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "A practical guide to understanding when to use CSS Grid and when Flexbox is the better choice.",
      date: "Oct 18, 2025",
      author: "Thomas Reed",
      readTime: "11 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "4.2K"
    },
    {
      id: 8,
      title: "Serverless Architecture: Benefits and Use Cases",
      excerpt: "Understanding serverless computing and how it can reduce costs while improving scalability.",
      date: "Oct 15, 2025",
      author: "Jennifer Wu",
      readTime: "8 min read",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.1K"
    },
    {
      id: 9,
      title: "Mobile-First Design: A Developer's Perspective",
      excerpt: "Why mobile-first design is crucial in today's mobile-dominated world and how to implement it effectively.",
      date: "Oct 12, 2025",
      author: "Michael Torres",
      readTime: "9 min read",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "3.8K"
    },
    {
      id: 10,
      title: "JavaScript Frameworks Comparison: React vs Vue vs Angular",
      excerpt: "An in-depth comparison of the three most popular JavaScript frameworks to help you choose the right one.",
      date: "Oct 10, 2025",
      author: "Amanda Foster",
      readTime: "10 min read",
      category: "Programming & Coding",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "4.5K"
    },
    {
      id: 11,
      title: "Web Security Best Practices for 2025",
      excerpt: "Essential security measures every web developer should implement to protect their applications.",
      date: "Oct 8, 2025",
      author: "David Chen",
      readTime: "12 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.9K"
    },
    {
      id: 12,
      title: "The Art of Code Documentation",
      excerpt: "Learn how to write documentation that actually helps other developers understand and use your code.",
      date: "Oct 5, 2025",
      author: "Sarah Williams",
      readTime: "8 min read",
      category: "Programming & Coding",
      image: "https://images.unsplash.com/photo-1555066935-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.3K"
    },
    {
      id: 13,
      title: "Understanding Micro Frontends Architecture",
      excerpt: "How micro frontends are changing the way we think about large-scale web application development.",
      date: "Nov 5, 2025",
      author: "James Wilson",
      readTime: "6 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.9K"
    },
    {
      id: 14,
      title: "Building Scalable APIs with GraphQL",
      excerpt: "A practical guide to designing and implementing GraphQL APIs that can handle enterprise-level traffic.",
      date: "Nov 3, 2025",
      author: "Robert Kim",
      readTime: "11 min read",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      views: "3.2K"
    },
    {
      id: 15,
      title: "The Future of AI in Gaming",
      excerpt: "How artificial intelligence is revolutionizing the gaming industry with smarter NPCs and procedural content generation.",
      date: "Nov 1, 2025",
      author: "Michael Torres",
      readTime: "9 min read",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      views: "3.7K"
    },
    {
      id: 16,
      title: "Esports Tournament Strategies",
      excerpt: "Professional insights into winning strategies for competitive esports tournaments.",
      date: "Oct 29, 2025",
      author: "Amanda Foster",
      readTime: "7 min read",
      category: "Esports & Tournaments",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.8K"
    },
    {
      id: 17,
      title: "Mobile Gaming Revolution",
      excerpt: "How mobile gaming is changing the landscape of the entertainment industry.",
      date: "Oct 26, 2025",
      author: "James Wilson",
      readTime: "6 min read",
      category: "Mobile Games",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      views: "4.1K"
    },
    {
      id: 18,
      title: "Apple's Latest Innovations",
      excerpt: "A deep dive into Apple's newest products and how they're shaping the tech industry.",
      date: "Oct 23, 2025",
      author: "Sarah Williams",
      readTime: "8 min read",
      category: "Apple",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      views: "3.2K"
    },
    {
      id: 19,
      title: "Google's AI Breakthroughs",
      excerpt: "Latest advancements in artificial intelligence from Google's research labs.",
      date: "Oct 20, 2025",
      author: "Robert Kim",
      readTime: "10 min read",
      category: "Google",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      views: "4.5K"
    },
    {
      id: 20,
      title: "Cryptocurrency Market Analysis",
      excerpt: "In-depth analysis of the current state and future prospects of the cryptocurrency market.",
      date: "Oct 17, 2025",
      author: "David Chen",
      readTime: "12 min read",
      category: "Crypto & Blockchain",
      image: "https://images.unsplash.com/photo-1555066935-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "3.9K"
    }
  ];

  // State for active category and dropdown visibility
  const [activeCategory, setActiveCategory] = useState('All');
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showGamingDropdown, setShowGamingDropdown] = useState(false);
  const [showDevicesDropdown, setShowDevicesDropdown] = useState(false);
  const [showDeveloperDropdown, setShowDeveloperDropdown] = useState(false);
  const [showFinanceDropdown, setShowFinanceDropdown] = useState(false);
  const [showExtraDropdown, setShowExtraDropdown] = useState(false);

  // Filter blogs based on active category
  const filteredBlogs = activeCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => {
        // Map subcategories to their main categories
        const categoryMap = {
          'Web Development': 'Tech',
          'Mobile Apps': 'Tech',
          'AI & Machine Learning': 'Tech',
          'Cybersecurity': 'Tech',
          'Gaming': 'Gaming',
          'Esports & Tournaments': 'Gaming',
          'Game Reviews': 'Gaming',
          'Mobile Games': 'Gaming',
          'PC & Console Gaming': 'Gaming',
          'Apple': 'Devices',
          'Google': 'Devices',
          'Microsoft': 'Devices',
          'Samsung': 'Devices',
          'Xiaomi': 'Devices',
          'OnePlus': 'Devices',
          'Huawei': 'Devices',
          'Realme': 'Devices',
          'Oppo': 'Devices',
          'Sony': 'Devices',
          'App Development': 'Developer',
          'Programming & Coding': 'Developer',
          'Design & UI/UX': 'Developer',
          'Creator Hub': 'Developer',
          'Crypto & Blockchain': 'Finance',
          'E-Money & Fintech': 'Finance',
          'Online Business': 'Finance',
          'Digital Marketing': 'Finance',
          'Tech Lifestyle': 'Finance',
          'Automotive Tech': 'Extra',
          'Space & Astronomy': 'Extra',
          'Opinion & Editorials': 'Extra',
          'Future Tech': 'Extra',
          'Trending Now': 'Extra'
        };
        
        // Check if the blog category matches the active category or its mapped main category
        return blog.category === activeCategory || categoryMap[blog.category] === activeCategory;
      });

  // Get main category for breadcrumb
  const getMainCategory = (category) => {
    if (category === 'All') return 'Home';
    
    const mainCategories = {
      'Tech': 'Technology',
      'Gaming': 'Gaming & Entertainment',
      'Devices': 'Brands & Devices',
      'Developer': 'Developer & Creator Zone',
      'Finance': 'Finance & Digital Life',
      'Extra': 'Extra / Miscellaneous'
    };
    
    // If it's a main category
    if (mainCategories[category]) return mainCategories[category];
    
    // If it's a subcategory, find its main category
    const subCategoryMap = {
      'Web Development': 'Tech',
      'Mobile Apps': 'Tech',
      'AI & Machine Learning': 'Tech',
      'Cybersecurity': 'Tech',
      'Esports & Tournaments': 'Gaming',
      'Game Reviews': 'Gaming',
      'Mobile Games': 'Gaming',
      'PC & Console Gaming': 'Gaming',
      'Apple': 'Devices',
      'Google': 'Devices',
      'Microsoft': 'Devices',
      'Samsung': 'Devices',
      'Xiaomi': 'Devices',
      'OnePlus': 'Devices',
      'Huawei': 'Devices',
      'Realme': 'Devices',
      'Oppo': 'Devices',
      'Sony': 'Devices',
      'App Development': 'Developer',
      'Programming & Coding': 'Developer',
      'Design & UI/UX': 'Developer',
      'Creator Hub': 'Developer',
      'Crypto & Blockchain': 'Finance',
      'E-Money & Fintech': 'Finance',
      'Online Business': 'Finance',
      'Digital Marketing': 'Finance',
      'Tech Lifestyle': 'Finance',
      'Automotive Tech': 'Extra',
      'Space & Astronomy': 'Extra',
      'Opinion & Editorials': 'Extra',
      'Future Tech': 'Extra',
      'Trending Now': 'Extra'
    };
    
    const mainCategory = subCategoryMap[category];
    return mainCategories[mainCategory] || category;
  };

  const featuredBlog = filteredBlogs[0] || blogData[0];
  const heroLeftPosts = filteredBlogs.slice(1, 3);
  const heroRightPosts = filteredBlogs.slice(3, 5);
  const technologyBlogs = filteredBlogs.filter(blog => 
    blog.category === "Web Development" || 
    blog.category === "Mobile Apps" || 
    blog.category === "AI & Machine Learning" ||
    blog.category === "Cybersecurity"
  ).slice(0, 4);
  
  const designBlogs = filteredBlogs.filter(blog => 
    blog.category === "Design & UI/UX" || 
    blog.category === "Creator Hub"
  ).slice(0, 4);
  
  const architectureBlogs = filteredBlogs.filter(blog => 
    blog.category === "App Development" || 
    blog.category === "Programming & Coding"
  ).slice(0, 4);

  // Back to top button state
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
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
              <li className="text-green-600 font-medium">
                {getMainCategory(activeCategory)}
              </li>
            </ol>
          </nav>

          {/* Category Header Section */}
          {(activeCategory !== 'All') && (
            <div className="mb-12 flex items-center gap-5 bg-green-50 rounded-2xl p-6">
              <div className="bg-green-100 rounded-full p-4">
                <Monitor className="w-12 h-12 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {getMainCategory(activeCategory)}
                </h1>
                <p className="text-gray-600">
                  Stay ahead of the curve with the newest developments in {getMainCategory(activeCategory).toLowerCase()}...
                </p>
              </div>
            </div>
          )}

          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCategory('All')}
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
                    // Navigate to BlogPost page when Tech main category is clicked
                    navigate('/blogpost');
                  }}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                    activeCategory === 'Tech' || 
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
                      onClick={() => {
                        setActiveCategory('Web Development');
                        navigate('/blogpost');
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Web Development'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() => {
                        setActiveCategory('Mobile Apps');
                        navigate('/blogpost');
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Mobile Apps'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Mobile Apps
                    </button>
                    <button
                      onClick={() => {
                        setActiveCategory('AI & Machine Learning');
                        navigate('/blogpost');
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'AI & Machine Learning'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      AI & Machine Learning
                    </button>
                    <button
                      onClick={() => {
                        setActiveCategory('Cybersecurity');
                        navigate('/blogpost');
                      }}
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
                    // Navigate to BlogPost page when Gaming main category is clicked
                    setActiveCategory('Gaming');
                    navigate('/blogpost');
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
                      onClick={() => setActiveCategory('Gaming')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Gaming'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Gaming
                    </button>
                    <button
                      onClick={() => setActiveCategory('Esports & Tournaments')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Esports & Tournaments'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Esports & Tournaments
                    </button>
                    <button
                      onClick={() => setActiveCategory('Game Reviews')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Game Reviews'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Game Reviews
                    </button>
                    <button
                      onClick={() => setActiveCategory('Mobile Games')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Mobile Games'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Mobile Games
                    </button>
                    <button
                      onClick={() => setActiveCategory('PC & Console Gaming')}
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
                    // Navigate to BlogPost page when Devices main category is clicked
                    setActiveCategory('Devices');
                    navigate('/blogpost');
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
                      onClick={() => setActiveCategory('Apple')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Apple'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Apple
                    </button>
                    <button
                      onClick={() => setActiveCategory('Google')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Google'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Google
                    </button>
                    <button
                      onClick={() => setActiveCategory('Microsoft')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Microsoft'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Microsoft
                    </button>
                    <button
                      onClick={() => setActiveCategory('Samsung')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Samsung'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Samsung
                    </button>
                    <button
                      onClick={() => setActiveCategory('Xiaomi')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Xiaomi'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Xiaomi
                    </button>
                    <button
                      onClick={() => setActiveCategory('OnePlus')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'OnePlus'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      OnePlus
                    </button>
                    <button
                      onClick={() => setActiveCategory('Huawei')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Huawei'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Huawei
                    </button>
                    <button
                      onClick={() => setActiveCategory('Realme')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Realme'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Realme
                    </button>
                    <button
                      onClick={() => setActiveCategory('Oppo')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Oppo'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Oppo
                    </button>
                    <button
                      onClick={() => setActiveCategory('Sony')}
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
                    // Navigate to BlogPost page when Developer main category is clicked
                    setActiveCategory('Developer');
                    navigate('/blogpost');
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
                      onClick={() => setActiveCategory('Web Development')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Web Development'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Web Development
                    </button>
                    <button
                      onClick={() => setActiveCategory('App Development')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'App Development'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      App Development
                    </button>
                    <button
                      onClick={() => setActiveCategory('Programming & Coding')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Programming & Coding'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Programming & Coding
                    </button>
                    <button
                      onClick={() => setActiveCategory('Design & UI/UX')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Design & UI/UX'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Design & UI/UX
                    </button>
                    <button
                      onClick={() => setActiveCategory('Creator Hub')}
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
                    // Navigate to BlogPost page when Finance main category is clicked
                    setActiveCategory('Finance');
                    navigate('/blogpost');
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
                      onClick={() => setActiveCategory('Crypto & Blockchain')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Crypto & Blockchain'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Crypto & Blockchain
                    </button>
                    <button
                      onClick={() => setActiveCategory('E-Money & Fintech')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'E-Money & Fintech'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      E-Money & Fintech
                    </button>
                    <button
                      onClick={() => setActiveCategory('Online Business')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Online Business'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Online Business
                    </button>
                    <button
                      onClick={() => setActiveCategory('Digital Marketing')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Digital Marketing'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Digital Marketing
                    </button>
                    <button
                      onClick={() => setActiveCategory('Tech Lifestyle')}
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
                    // Navigate to BlogPost page when Extra main category is clicked
                    setActiveCategory('Extra');
                    navigate('/blogpost');
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
                      onClick={() => setActiveCategory('Automotive Tech')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Automotive Tech'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Automotive Tech
                    </button>
                    <button
                      onClick={() => setActiveCategory('Space & Astronomy')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Space & Astronomy'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Space & Astronomy
                    </button>
                    <button
                      onClick={() => setActiveCategory('Opinion & Editorials')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Opinion & Editorials'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Opinion & Editorials
                    </button>
                    <button
                      onClick={() => setActiveCategory('Future Tech')}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === 'Future Tech'
                          ? 'bg-green-50 text-green-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Future Tech
                    </button>
                    <button
                      onClick={() => setActiveCategory('Trending Now')}
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

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black mb-8">
              {activeCategory === 'All' ? 'Featured Articles' : activeCategory}
              <div className="flex gap-4 mt-4 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Left Column: 2 vertical small post cards */}
              <div className="md:col-span-3 flex flex-col gap-5">
                {heroLeftPosts.map((blog) => (
                  <div key={blog.id} className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300 flex flex-col h-full">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                        }}
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mt-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle Column: Main feature article */}
              <div className="md:col-span-6">
                <div className="bg-white rounded-2xl overflow-hidden border border-green-500 h-full flex flex-col">
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={featuredBlog.image} 
                      alt={featuredBlog.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';
                      }}
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {featuredBlog.category}
                      </span>
                      <div className="flex items-center gap-4 text-gray-500 text-sm mt-auto">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredBlog.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock3 className="w-4 h-4" />
                          <span>{featuredBlog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">{featuredBlog.title}</h2>
                    <p className="text-gray-600 mb-6 flex-grow">{featuredBlog.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-green-700" />
                        <span className="text-green-700">{featuredBlog.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-700" />
                        <span className="text-gray-500">{featuredBlog.date}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 mt-auto w-fit">
                      Read Full Story
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: 2 vertical small post cards */}
              <div className="md:col-span-3 flex flex-col gap-5">
                {heroRightPosts.map((blog) => (
                  <div key={blog.id} className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300 flex flex-col h-full">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1555066932-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                        }}
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mt-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-black mb-8">
              Development
              <div className="flex gap-4 mt-4 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h2>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                All <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {technologyBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-black mb-8">
              Design & UX
              <div className="flex gap-4 mt-4 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h2>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                All <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {designBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-black mb-8">
              Architecture
              <div className="flex gap-4 mt-4 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h2>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                All <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {architectureBlogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;