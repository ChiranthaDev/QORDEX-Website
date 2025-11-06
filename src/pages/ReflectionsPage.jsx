import React, { useState } from 'react';
import { Search, User, Play, Facebook, Twitter, Linkedin, Instagram, ChevronDown, ChevronRight, Calendar, Eye, Clock3 } from 'lucide-react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const ReflectionsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample data for articles
  const articles = [
    {
      id: 1,
      category: 'Technology',
      title: 'The Future of AI in Everyday Life',
      excerpt: 'Exploring how artificial intelligence is becoming seamlessly integrated into our daily routines and what it means for the future.',
      author: 'Alex Johnson',
      date: 'May 15, 2023',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      category: 'Travel',
      title: 'Hidden Gems of Southeast Asia',
      excerpt: 'Discovering the lesser-known destinations that offer authentic cultural experiences and breathtaking landscapes.',
      author: 'Maria Garcia',
      date: 'May 12, 2023',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '8 min read'
    },
    {
      id: 3,
      category: 'Business',
      title: 'Building Resilient Startups in 2023',
      excerpt: 'Key strategies for creating sustainable business models that can withstand market fluctuations and global challenges.',
      author: 'David Chen',
      date: 'May 10, 2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '6 min read'
    },
    {
      id: 4,
      category: 'Management',
      title: 'Remote Team Leadership Best Practices',
      excerpt: 'Effective techniques for managing distributed teams and maintaining productivity in a hybrid work environment.',
      author: 'Sarah Williams',
      date: 'May 8, 2023',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '7 min read'
    },
    {
      id: 5,
      category: 'Trends',
      title: 'Sustainable Fashion: The Next Big Wave',
      excerpt: 'How eco-consciousness is reshaping the fashion industry and what consumers can do to support positive change.',
      author: 'Emma Rodriguez',
      date: 'May 5, 2023',
      image: 'https://images.unsplash.com/photo-1445205170234-1010d42d49bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '4 min read'
    },
    {
      id: 6,
      category: 'Startups',
      title: 'Funding Your Vision: A Founder\'s Guide',
      excerpt: 'Navigating the complex world of startup financing from seed rounds to IPOs with expert insights and real examples.',
      author: 'Michael Torres',
      date: 'May 3, 2023',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Technology', 'Travel', 'Sport', 'Business', 'Management', 'Trends', 'Startups', 'News'];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  // Sidebar data
  const author = {
    name: 'Jane Smith',
    bio: 'Award-winning writer with over 10 years of experience in storytelling. Passionate about human experiences and digital innovation.',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
  };

  const featuredPost = {
    title: 'The Art of Mindful Living',
    excerpt: 'How incorporating mindfulness into daily routines can transform your perspective on life.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  };

  const workExperience = [
    { role: 'Senior Editor', company: 'Digital Insights', period: '2020 - Present' },
    { role: 'Content Strategist', company: 'Creative Minds', period: '2018 - 2020' },
    { role: 'Writer', company: 'Storytellers Inc.', period: '2015 - 2018' }
  ];

  const technologies = ['Figma', 'Notion', 'Photoshop', 'Illustrator'];

  const creatingSections = [
    { title: 'Heartfelt Reflections', link: '#' },
    { title: 'Latest Tech Gadgets', link: '#' },
    { title: 'Travel Diaries', link: '#' },
    { title: 'Business Insights', link: '#' }
  ];

  const homepages = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'News', link: '/news' }
  ];

  const categoriesFooter = [
    { name: 'Technology', link: '#' },
    { name: 'Travel', link: '#' },
    { name: 'Business', link: '#' },
    { name: 'Management', link: '#' }
  ];

  const pages = [
    { name: 'About', link: '#' },
    { name: 'Contact', link: '#' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Terms of Service', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header with button-like radius background specific to blog page */}
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-2xl shadow-lg">
            <Header />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Heartfelt Reflections: <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Stories of Love, Loss, and Growth</span>
          </h1>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden border border-green-500 hover:border-green-600 transition-all duration-300">
                <div className="relative">
                  <span className="absolute top-4 left-4 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="flex items-center text-green-600 font-medium hover:text-green-700">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About Author Card */}
            <div className="bg-white rounded-lg overflow-hidden border border-green-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">About Author</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={author.image} 
                    alt={author.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{author.name}</h4>
                    <p className="text-sm text-gray-500">{author.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{author.bio}</p>
                <div className="flex gap-3">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer" />
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-green-600 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Featured Post */}
            <div className="bg-white rounded-lg overflow-hidden border border-green-500">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{featuredPost.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{featuredPost.excerpt}</p>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white rounded-lg overflow-hidden border border-green-500 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Work Experience</h3>
              <div className="space-y-4">
                {workExperience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-green-200 pl-4 py-1">
                    <h4 className="font-bold text-gray-900">{exp.role}</h4>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-lg overflow-hidden border border-green-500 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Creating Section */}
            <div className="bg-white rounded-lg overflow-hidden border border-green-500 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Creating</h3>
              <div className="space-y-3">
                {creatingSections.map((section, index) => (
                  <a 
                    key={index} 
                    href={section.link} 
                    className="block py-2 text-gray-600 hover:text-green-600 font-medium"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pagination */}
      <section className="px-8 pb-16">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-100 font-bold">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-100 font-bold">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest blog posts delivered straight to your inbox.
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReflectionsPage;