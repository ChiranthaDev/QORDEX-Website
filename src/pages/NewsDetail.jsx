import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { Heart, MessageCircle, Share2, Send, ArrowLeft } from 'lucide-react';

const newsData = [
  {
    id: 1,
    title: "Latest Tech Innovations Changing the Industry",
    excerpt: "Discover how new technological breakthroughs are reshaping the way we interact with digital platforms and what it means for the future.",
    content: "Technology continues to evolve at a rapid pace, transforming industries and reshaping our daily lives. From artificial intelligence to quantum computing, the innovations emerging today are laying the foundation for tomorrow's world. In this comprehensive analysis, we explore the most significant technological advancements that are currently making waves across various sectors. Our research team has been closely monitoring developments in AI, machine learning, blockchain, and other cutting-edge technologies to understand their potential impact on business operations and consumer behavior. The findings reveal a landscape of unprecedented opportunities and challenges that organizations must navigate to stay competitive. As we delve deeper into each innovation, we'll examine real-world applications, potential benefits, and considerations for implementation. Whether you're a tech enthusiast, business leader, or simply curious about the future, this article provides valuable insights into the transformative power of modern technology.",
    category: "Tech",
    date: "2023-06-15",
    author: "Alex Johnson",
    likes: 24,
    comments: 8,
    shares: 12,
    image: "../img/1.jpg"
  },
  {
    id: 2,
    title: "Gaming Revolution: Next-Gen Consoles Performance Review",
    excerpt: "We dive deep into the latest gaming consoles and analyze their performance, graphics capabilities, and user experience.",
    content: "The gaming industry has reached new heights with the latest generation of consoles that promise unparalleled performance and immersive experiences. In this detailed review, we put each console through rigorous testing to evaluate their capabilities across various metrics. Graphics quality, processing power, load times, and user interface design are just a few of the factors we examined. Our testing methodology included both casual and hardcore gaming scenarios to provide a comprehensive assessment of each system's strengths and weaknesses. The results reveal significant improvements over previous generations, with enhanced ray tracing, faster SSD storage, and more responsive controllers. We also explored the backward compatibility features and the growing library of exclusive titles that showcase the hardware's capabilities. For gamers considering an upgrade or new purchase, this review offers essential insights to inform your decision. Additionally, we analyzed the subscription services and online capabilities that have become increasingly important in the modern gaming ecosystem.",
    category: "Gaming & Entertainment",
    date: "2023-06-12",
    author: "Sarah Williams",
    likes: 42,
    comments: 15,
    shares: 7,
    image: "../img/3.jpg"
  },
  {
    id: 3,
    title: "Top Smartphone Trends for 2023",
    excerpt: "From foldable screens to AI-powered cameras, we explore the latest smartphone innovations that are changing the mobile landscape.",
    content: "The smartphone market in 2023 is characterized by remarkable innovation and fierce competition among manufacturers. This year has seen the introduction of groundbreaking features that push the boundaries of what mobile devices can accomplish. Foldable displays have matured significantly, offering users larger screen real estate in a compact form factor. Camera technology has reached new levels of sophistication with AI-powered photography that can automatically enhance images and adapt to various shooting conditions. Battery life has improved dramatically with more efficient processors and larger capacity cells, while fast charging technologies continue to evolve. We examined the flagship devices from leading manufacturers to identify the key trends shaping the industry. Our analysis covers hardware specifications, software features, and user experience aspects that differentiate each offering. The integration of 5G connectivity has also influenced design decisions and performance optimizations. As we move through the year, these trends are expected to become more refined and accessible across different price segments, making advanced features available to a broader audience.",
    category: "Brands & Devices",
    date: "2023-06-10",
    author: "Michael Chen",
    likes: 31,
    comments: 12,
    shares: 9,
    image: "../img/4.jpg"
  }
];

const sampleComments = [
  {
    id: 1,
    author: "TechEnthusiast92",
    content: "This is exactly what I've been waiting for! The advancements in AI are truly mind-blowing. Can't wait to see how these innovations will impact our daily lives.",
    timestamp: "2 hours ago",
    likes: 5
  },
  {
    id: 2,
    author: "DigitalNomad",
    content: "Great analysis! I particularly appreciate the section on implementation challenges. Many articles gloss over the practical difficulties of adopting new technologies.",
    timestamp: "4 hours ago",
    likes: 3
  },
  {
    id: 3,
    author: "FutureThinker",
    content: "The potential applications mentioned here are fascinating. I'm especially interested in how quantum computing might revolutionize data security.",
    timestamp: "1 day ago",
    likes: 8
  }
];

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsItem = newsData.find(item => item.id === parseInt(id)) || newsData[0];
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState([]);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    
    const comment = {
      id: comments.length + 1,
      author: "CurrentUser",
      content: newComment,
      timestamp: "Just now",
      likes: 0
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLikeComment = (commentId) => {
    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter(id => id !== commentId));
    } else {
      setLikedComments([...likedComments, commentId]);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-b-2xl shadow-sm">
        <Header />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={handleGoBack}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6"
          >
            <ArrowLeft size={20} />
            Back to News
          </button>
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {newsItem.category}
              </span>
              <span className="text-gray-500 text-sm">{newsItem.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {newsItem.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>By {newsItem.author}</span>
            </div>
          </div>
          
          {/* Article Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/800x600/3DBE62/FFFFFF?text=News+Image';
              }}
            />
          </div>
          
          {/* Article Content */}
          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {newsItem.content}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The implications of these technological advances extend far beyond their immediate applications. As we continue to integrate these innovations into our daily routines, we must also consider the broader societal impact. Privacy concerns, digital divide issues, and the need for updated regulatory frameworks are just a few of the challenges that accompany rapid technological progress. However, the potential benefits—improved healthcare outcomes, enhanced educational opportunities, and more efficient business operations—make the journey worthwhile. The key lies in thoughtful implementation and responsible innovation that prioritizes human welfare alongside technological advancement.
            </p>
          </div>
          
          {/* Social Actions */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-12">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart size={20} />
                <span>{newsItem.likes}</span>
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageCircle size={20} />
                <span>{newsItem.comments}</span>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                <Share2 size={20} />
                <span>{newsItem.shares}</span>
              </button>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Share Article
            </button>
          </div>
          
          {/* Comments Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h2>
            
            {/* Add Comment Form */}
            <form onSubmit={handleAddComment} className="mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                </div>
                <div className="flex-grow">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                    rows="3"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
                    >
                      <Send size={16} />
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                        <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{comment.content}</p>
                      <button
                        onClick={() => handleLikeComment(comment.id)}
                        className={`flex items-center gap-1 text-sm ${
                          likedComments.includes(comment.id)
                            ? 'text-red-500'
                            : 'text-gray-500 hover:text-red-500'
                        }`}
                      >
                        <Heart
                          size={16}
                          fill={likedComments.includes(comment.id) ? 'currentColor' : 'none'}
                        />
                        <span>{likedComments.includes(comment.id) ? comment.likes + 1 : comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}