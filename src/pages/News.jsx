import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowRight, Eye, Clock3, ArrowUp, Monitor, Gamepad2, Smartphone, Code, Wallet, MoreHorizontal } from 'lucide-react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const News = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Revolutionary Tech Trends Shaping 2025",
      excerpt: "Discover the cutting-edge technologies that are transforming industries and redefining our digital landscape.",
      date: "Nov 4, 2025",
      author: "Alex Johnson",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      views: "1.2K"
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions for Urban Cities",
      excerpt: "How innovative green energy initiatives are powering the future of metropolitan areas worldwide.",
      date: "Nov 2, 2025",
      author: "Maria Garcia",
      readTime: "7 min read",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      views: "850"
    },
    {
      id: 3,
      title: "The Future of Remote Work Post-Pandemic",
      excerpt: "Analyzing workplace evolution and the lasting impact of remote collaboration tools.",
      date: "Oct 30, 2025",
      author: "David Chen",
      readTime: "6 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.5K"
    },
    {
      id: 4,
      title: "Breakthrough in Quantum Computing Announced",
      excerpt: "Scientists reveal new quantum processor that could solve complex problems in minutes rather than years.",
      date: "Oct 28, 2025",
      author: "Sarah Williams",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.1K"
    },
    {
      id: 5,
      title: "Global Markets See Unprecedented Growth",
      excerpt: "Economic indicators show positive trends across major financial markets worldwide.",
      date: "Oct 25, 2025",
      author: "Robert Kim",
      readTime: "4 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "920"
    },
    {
      id: 6,
      title: "AI Revolutionizes Healthcare Diagnostics",
      excerpt: "Machine learning algorithms now detect diseases with higher accuracy than traditional methods.",
      date: "Oct 22, 2025",
      author: "Emily Parker",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.8K"
    },
    {
      id: 7,
      title: "New Startup Valuation Reaches $10 Billion",
      excerpt: "Tech unicorn achieves massive funding round in competitive market conditions.",
      date: "Oct 31, 2025",
      author: "Thomas Reed",
      readTime: "5 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.4K"
    },
    {
      id: 8,
      title: "Global Supply Chain Disruptions Easing",
      excerpt: "Logistics experts report improvement in shipping times and cost reductions across major trade routes.",
      date: "Nov 1, 2025",
      author: "Jennifer Wu",
      readTime: "6 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.1K"
    },
    {
      id: 9,
      title: "Global Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders unite on ambitious carbon reduction targets for the next decade.",
      date: "Nov 3, 2025",
      author: "Michael Torres",
      readTime: "6 min read",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1588345921523-e02d9d8a3d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.3K"
    },
    {
      id: 10,
      title: "New Legislation Aims to Reform Electoral Process",
      excerpt: "Proposed changes would modernize voting systems and increase accessibility for all citizens.",
      date: "Nov 2, 2025",
      author: "Amanda Foster",
      readTime: "7 min read",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1588345921523-e02d9d8a3d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.9K"
    },
    {
      id: 11,
      title: "International Trade Deal Signed Between Major Economies",
      excerpt: "Landmark agreement expected to boost global commerce and reduce tariffs significantly.",
      date: "Oct 30, 2025",
      author: "David Chen",
      readTime: "8 min read",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1588345921523-e02d9d8a3d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.1K"
    },
    {
      id: 12,
      title: "Education Reform Bill Passes Committee Review",
      excerpt: "New measures focus on digital literacy and vocational training for future workforce needs.",
      date: "Oct 28, 2025",
      author: "Sarah Williams",
      readTime: "5 min read",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1588345921523-e02d9d8a3d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.7K"
    },
    {
      id: 13,
      title: "Healthcare Initiative Receives Federal Funding",
      excerpt: "Multi-billion dollar program aims to expand mental health services in underserved communities.",
      date: "Oct 25, 2025",
      author: "Robert Kim",
      readTime: "6 min read",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1588345921523-e02d9d8a3d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.8K"
    },
    {
      id: 14,
      title: "Exploring the Hidden Gems of Southeast Asia",
      excerpt: "Discover lesser-known destinations that offer authentic cultural experiences and breathtaking landscapes.",
      date: "Nov 1, 2025",
      author: "Jessica Wong",
      readTime: "8 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.7K"
    },
    {
      id: 15,
      title: "Sustainable Tourism Practices in European Cities",
      excerpt: "How major European destinations are balancing visitor influx with environmental conservation efforts.",
      date: "Oct 30, 2025",
      author: "Marco Rossi",
      readTime: "6 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "1.5K"
    },
    {
      id: 16,
      title: "Adventure Tourism on the Rise in South America",
      excerpt: "Thrill-seekers are discovering new destinations for hiking, climbing, and extreme sports experiences.",
      date: "Oct 28, 2025",
      author: "Carlos Mendez",
      readTime: "7 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      views: "1.9K"
    },
    {
      id: 17,
      title: "Cultural Heritage Sites Open to Public After Restoration",
      excerpt: "Historic landmarks around the world welcome visitors following major preservation efforts.",
      date: "Oct 25, 2025",
      author: "Isabella Rossi",
      readTime: "6 min read",
      category: "business",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      views: "1.1K"
    },
    // Adding 3 more technology news articles
    {
      id: 18,
      title: "Next-Gen Smartphones Feature Revolutionary Foldable Display Technology",
      excerpt: "Major manufacturers unveil devices with ultra-thin glass and enhanced durability for foldable screens.",
      date: "Nov 5, 2025",
      author: "Tech Reporter",
      readTime: "4 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      views: "2.4K"
    },
    {
      id: 19,
      title: "Cybersecurity Firm Discovers Critical Vulnerability in Popular Software Suite",
      excerpt: "Patch released to address zero-day exploit affecting millions of users worldwide.",
      date: "Nov 4, 2025",
      author: "Security Analyst",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "3.1K"
    },
    {
      id: 20,
      title: "SpaceX Successfully Deploys Advanced Satellite Constellation for Global Internet",
      excerpt: "Latest launch brings total operational satellites to 2,000, expanding coverage to remote regions.",
      date: "Nov 3, 2025",
      author: "Space Correspondent",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1454789548928-9a7310581f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "4.2K"
    },
    // Adding gaming news articles
    {
      id: 21,
      title: "New AAA Game Breaks Sales Records on Launch Day",
      excerpt: "Highly anticipated RPG surpasses 5 million copies sold within first 24 hours of release.",
      date: "Nov 5, 2025",
      author: "Gaming Insider",
      readTime: "5 min read",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      views: "5.7K"
    },
    {
      id: 22,
      title: "Esports Tournament Offers Record $10 Million Prize Pool",
      excerpt: "International gaming competition attracts top teams from around the globe.",
      date: "Nov 4, 2025",
      author: "Esports Weekly",
      readTime: "4 min read",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "3.2K"
    },
    {
      id: 23,
      title: "Virtual Reality Gaming Reaches New Milestone with Haptic Feedback Suits",
      excerpt: "Next-generation VR equipment provides full-body tactile sensations for immersive gameplay.",
      date: "Nov 3, 2025",
      author: "VR Enthusiast",
      readTime: "6 min read",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "4.8K"
    },
    {
      id: 24,
      title: "Indie Developer Wins Prestigious Game of the Year Award",
      excerpt: "Small studio's innovative puzzle game beats major publishers to take top honor.",
      date: "Nov 2, 2025",
      author: "Indie Watch",
      readTime: "5 min read",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "2.9K"
    },
    {
      id: 25,
      title: "Cloud Gaming Service Expands to 50 Additional Countries",
      excerpt: "Major platform now accessible to over 2 billion potential subscribers worldwide.",
      date: "Nov 1, 2025",
      author: "Cloud Tech Reporter",
      readTime: "4 min read",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      views: "3.7K"
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter news based on active category
  const filteredNews = activeCategory === 'All' 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory);

  const featuredNews = filteredNews[0] || newsData[0];
  const heroLeftPosts = filteredNews.slice(1, 3);
  const heroRightPosts = filteredNews.slice(5, 7);
  const technologyNews = filteredNews.filter(news => news.category === "Technology").slice(0, 4);
  const gamingNews = filteredNews.filter(news => news.category === "Gaming");
  const gamingFeatured = gamingNews[0];
  const gamingList = gamingNews.slice(1, 6);
  const businessNews = filteredNews.filter(news => news.category === "business").slice(0, 4);

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
      {/* Header with button-like radius background specific to news page */}
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Latest News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            </p>
          </div>

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
              <button
                onClick={() => setActiveCategory('Technology')}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'Technology'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <Monitor className="w-4 h-4" />
                Tech
              </button>
              <button
                onClick={() => setActiveCategory('Gaming')}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'Gaming'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                Gaming & Entertainment
              </button>
              <button
                onClick={() => setActiveCategory('Devices')}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'Devices'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Brands & Devices
              </button>
              <button
                onClick={() => setActiveCategory('Developer')}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'Developer'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <Code className="w-4 h-4" />
                Developer & Creator Zone
              </button>
              <button
                onClick={() => setActiveCategory('Finance')}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'Finance'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <Wallet className="w-4 h-4" />
                Finance & Digital Life
              </button>
              <button
                onClick={() => setActiveCategory('Extra')}
                className={`px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition ${
                  activeCategory === 'Extra'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                Extra / Miscellaneous
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black mb-8">
              {activeCategory === 'All' ? 'Top News' : activeCategory}
              <div className="flex gap-4 mt-4 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Left Column: 2 vertical small post cards */}
              <div className="md:col-span-3 flex flex-col gap-5">
                {heroLeftPosts.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300 flex flex-col h-full">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                        {news.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mt-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{news.date}</span>
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
                      src={featuredNews.image} 
                      alt={featuredNews.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {featuredNews.category}
                      </span>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredNews.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock3 className="w-4 h-4" />
                          <span>{featuredNews.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">{featuredNews.title}</h2>
                    <p className="text-gray-600 mb-6 flex-grow">{featuredNews.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-green-700" />
                        <span className="text-green-700">{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-700" />
                        <span className="text-gray-500">{featuredNews.date}</span>
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
                {heroRightPosts.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300 flex flex-col h-full">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm">
                        {news.title}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mt-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Section (formerly Business Section) */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-black mb-8">
              Technology
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
              {technologyNews.map((news) => (
                <div 
                  key={news.id} 
                  className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming Section (formerly Politics Section) */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-black mb-8">
              Gaming
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
              {/* Left Column: Featured Article */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden border border-green-500 h-full flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={gamingFeatured?.image} 
                      alt={gamingFeatured?.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">
                      {gamingFeatured?.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {gamingFeatured?.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{gamingFeatured?.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{gamingFeatured?.author}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {gamingFeatured?.excerpt}
                    </p>
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 mt-auto w-fit">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Mini-List of Articles */}
              <div className="md:col-span-1 flex flex-col gap-4">
                {gamingList.map((news) => (
                  <div key={news.id} className="flex gap-3 group cursor-pointer bg-white rounded-lg p-3 border border-green-500 hover:border-green-600 transition-all duration-300 flex-grow">
                    <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1 line-clamp-2 text-sm flex-grow">
                        {news.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-500 text-xs mt-auto">
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* business Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-bold tracking-tight text-black mb-8">
              Business
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
              {businessNews.map((news) => (
                <div 
                  key={news.id} 
                  className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{news.date}</span>
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
            Get the latest news delivered straight to your inbox.
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

export default News;