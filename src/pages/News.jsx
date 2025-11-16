import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { Heart, MessageCircle, Share2, Monitor, Gamepad2, Smartphone, Code, Wallet, MoreHorizontal } from 'lucide-react';

const newsData = [
  {
    id: 1,
    title: "Latest Tech Innovations Changing the Industry",
    excerpt: "Discover how new technological breakthroughs are reshaping the way we interact with digital platforms and what it means for the future.",
    category: "Tech",
    date: "2023-06-15",
    author: "Alex Johnson",
    likes: 24,
    comments: 8,
    shares: 12,
    image: "../img/172.jpg"
  },
  {
    id: 2,
    title: "Gaming Revolution: Next-Gen Consoles Performance Review",
    excerpt: "We dive deep into the latest gaming consoles and analyze their performance, graphics capabilities, and user experience.",
    category: "Gaming & Entertainment",
    date: "2023-06-12",
    author: "Sarah Williams",
    likes: 42,
    comments: 15,
    shares: 7,
    image: "../img/gaming.webm"
  },
  {
    id: 3,
    title: "Top Smartphone Trends for 2023",
    excerpt: "From foldable screens to AI-powered cameras, we explore the latest smartphone innovations that are changing the mobile landscape.",
    category: "Brands & Devices",
    date: "2023-06-10",
    author: "Michael Chen",
    likes: 31,
    comments: 12,
    shares: 9,
    image: "../img/joystick.webm"
  },
  {
    id: 4,
    title: "Developer Tools That Will Boost Your Productivity",
    excerpt: "A comprehensive guide to the best developer tools and frameworks that can significantly improve your coding workflow.",
    category: "Developer & Creator Zone",
    date: "2023-06-08",
    author: "Emma Rodriguez",
    likes: 38,
    comments: 17,
    shares: 14,
    image: "../img/chatbot.webm"
  },
  {
    id: 5,
    title: "Cryptocurrency Market Analysis: What's Next?",
    excerpt: "An in-depth analysis of current cryptocurrency trends and predictions for the upcoming quarter.",
    category: "Finance & Digital Life",
    date: "2023-06-05",
    author: "David Thompson",
    likes: 56,
    comments: 22,
    shares: 18,
    image: "../img/projects.webm"
  },
  {
    id: 6,
    title: "The Future of Digital Entertainment",
    excerpt: "Exploring how streaming services, VR, and AR are transforming the entertainment industry.",
    category: "Extra / Miscellaneous",
    date: "2023-06-01",
    author: "Jennifer Park",
    likes: 29,
    comments: 9,
    shares: 6,
    image: "../img/news.webm"
  },
  {
    id: 7,
    title: "Cybersecurity Threats You Should Know About",
    excerpt: "Understanding the latest cybersecurity risks and how to protect your digital assets in an increasingly connected world.",
    category: "Tech",
    date: "2023-05-28",
    author: "Robert Kim",
    likes: 47,
    comments: 14,
    shares: 11,
    image: "../img/other.webm"
  },
  {
    id: 8,
    title: "Indie Game Development: Success Stories",
    excerpt: "How independent game developers are creating innovative experiences and building successful careers.",
    category: "Gaming & Entertainment",
    date: "2023-05-25",
    author: "Lisa Anderson",
    likes: 33,
    comments: 11,
    shares: 8,
    image: "../img/172.jpg"
  }
];

const categories = [
  { name: "All Categories", icon: null },
  { name: "Tech", icon: Monitor },
  { name: "Gaming & Entertainment", icon: Gamepad2 },
  { name: "Brands & Devices", icon: Smartphone },
  { name: "Developer & Creator Zone", icon: Code },
  { name: "Finance & Digital Life", icon: Wallet },
  { name: "Extra / Miscellaneous", icon: MoreHorizontal },
  { name: "Other", icon: null }
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [likedPosts, setLikedPosts] = useState([]);

  const filteredNews = activeCategory === "All Categories" 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory);

  const handleLike = (id) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(postId => postId !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-b-2xl shadow-sm">
        <Header />
      </div>
      

      {/* TODAY'S HOT NEWS SECTION */}
      <section className="bg-white text-white">
        <div className="text-center mb-12 pt-16">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Today's Hot News</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 px-4 sm:px-6 lg:px-8">
          {/* Featured Article - Large Card */}
          <Link to="/news/1" className="lg:col-span-2 overflow-hidden rounded-2xl shadow-2xl transform transition-all hover:scale-[1.02] duration-300 relative block">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/80 z-10"></div>
            <img 
              src="../img/172.jpg" 
              alt="Today's Hot News" 
              className="w-full h-80 object-cover rounded-2xl"
              onError={(e) => {
                e.target.src = 'https://placehold.co/800x600/3DBE62/FFFFFF?text=Hot+News';
              }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">HOT</span>
                  <span className="text-gray-300 text-sm">June 15, 2023</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Revolutionary AI Technology Breaks New Ground in Healthcare</h3>
                <p className="text-gray-200 text-base mb-4 line-clamp-2">Scientists have developed a groundbreaking AI system that can predict patient outcomes with 95% accuracy, revolutionizing how medical professionals approach treatment plans.</p>
                <div className="flex gap-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 flex items-center gap-2">
                    Read Full Story
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Side Articles - 4 Cards Grid */}
          <div className="grid grid-cols-1 gap-4 pl-6">
            {/* Article 1 */}
            <Link to="/news/2" className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 block">
              <div className="flex gap-3 p-3">
                <div className="flex-shrink-0">
                  <img 
                    src="../img/172.jpg" 
                    alt="Quantum Computing" 
                    className="rounded-lg w-12 h-12 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/200x200/3DBE62/FFFFFF?text=Tech';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-semibold text-green-600">TECH</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-500 text-xs">2 hours ago</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 text-xs">Quantum Computing Milestone Achieved</h4>
                  <p className="text-gray-600 text-xs line-clamp-2">Researchers reach new qubit stability record, bringing quantum computers closer to practical applications.</p>
                </div>
              </div>
            </Link>
            
            {/* Article 2 */}
            <Link to="/news/3" className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 block">
              <div className="flex gap-3 p-3">
                <div className="flex-shrink-0">
                  <img 
                    src="../img/gaming.webm" 
                    alt="Gaming Console" 
                    className="rounded-lg w-12 h-12 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/200x200/3DBE62/FFFFFF?text=Gaming';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-semibold text-blue-600">GAMING</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-500 text-xs">5 hours ago</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 text-xs">Next-Gen Console Sales Break Records</h4>
                  <p className="text-gray-600 text-xs line-clamp-2">New gaming platform surpasses 1 million pre-orders in first 24 hours, signaling strong market demand.</p>
                </div>
              </div>
            </Link>
            
            {/* Article 3 */}
            <Link to="/news/4" className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 block">
              <div className="flex gap-3 p-3">
                <div className="flex-shrink-0">
                  <img 
                    src="../img/joystick.webm" 
                    alt="Cryptocurrency" 
                    className="rounded-lg w-12 h-12 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/200x200/3DBE62/FFFFFF?text=Finance';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-semibold text-purple-600">FINANCE</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-500 text-xs">1 day ago</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 text-xs">Cryptocurrency Regulation Framework Announced</h4>
                  <p className="text-gray-600 text-xs line-clamp-2">Government unveils comprehensive digital asset regulations, providing clarity for investors and businesses.</p>
                </div>
              </div>
            </Link>
            
            {/* Article 4 */}
            <Link to="/news/5" className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 block">
              <div className="flex gap-3 p-3">
                <div className="flex-shrink-0">
                  <img 
                    src="../img/chatbot.webm" 
                    alt="Gene Therapy" 
                    className="rounded-lg w-12 h-12 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/200x200/3DBE62/FFFFFF?text=Health';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-semibold text-orange-600">HEALTH</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-500 text-xs">3 hours ago</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 text-xs">Breakthrough in Gene Therapy Shows Promise</h4>
                  <p className="text-gray-600 text-xs line-clamp-2">New treatment approach demonstrates significant improvement in clinical trials for rare genetic disorders.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


                    {/* FILTER SECTION */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.name
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {IconComponent && <IconComponent size={18} />}
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* NEWS CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredNews.map((news) => (
            <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:sadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/3DBE62/FFFFFF?text=News+Image';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{news.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {news.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handleLike(news.id)}
                      className={`flex items-center gap-1 text-sm ${
                        likedPosts.includes(news.id) 
                          ? 'text-red-500' 
                          : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        size={18} 
                        fill={likedPosts.includes(news.id) ? 'currentColor' : 'none'} 
                      />
                      <span>{likedPosts.includes(news.id) ? news.likes + 1 : news.likes}</span>
                    </button>
                    
                    <Link to={`/news/${news.id}`} className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer">
                      <MessageCircle size={18} />
                      <span className="text-sm">{news.comments}</span>
                    </Link>
                    
                    <div className="flex items-center gap-1 text-gray-500 hover:text-green-500 cursor-pointer">
                      <Share2 size={18} />
                      <span className="text-sm">{news.shares}</span>
                    </div>
                  </div>
                  
                  <Link to={`/news/${news.id}`} className="text-green-600 hover:text-green-700 font-medium text-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No news found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}