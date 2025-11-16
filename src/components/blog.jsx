import React, { useState } from 'react';
import { Search, Facebook, Twitter, Youtube, Instagram, ShoppingCart, User, Music, Linkedin, Github } from 'lucide-react';
// import { LayoutGridDemo } from './ui/layout';
import joystickVideo from '../img/joystick.webm';
import gamingVideo from '../img/gaming.webm';
import chatbotVideo from '../img/chatbot.webm';
import newsVideo from '../img/news.webm';
import otherVideo from '../img/other.webm';
import projectsVideo from '../img/projects.webm';

// Import section components
import HeroPost from '../home/HeroPost';
import BrowseCategories from '../home/BrowseCategories';
import Qordexchannel from '../home/qordexchannel';
import Hotnews from '../home/Hotnews';
import Blospost from '../home/blospost';
import AdsChannel from '../home/AdsChannel';
import GamingSection from '../home/GamingSection';

export default function ZairaGamingBlog() {
  const [email, setEmail] = useState('');

  const heroArticles = [
    {
      title: "Mobile Apple Planning Big Mac Redesign Under Jony Hallfdshire",
      category: "Featured",
      author: "CJ Games",
      date: "2 August, 2023",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
    },
    {
      title: "How To Build a Magazine Layout With CSS Grid Areas",
      category: "Featured",
      author: "CJ Games",
      date: "2 August, 2023",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop"
    }
  ];

  const categoryItems = [
    { name: "News", image: newsVideo, isVideo: true},
    { name: "Blog", image: chatbotVideo, isVideo: true},
    { name: "Project", image: projectsVideo, isVideo: true},
    { name: "Game", image: joystickVideo, isVideo: true },
    { name: "Podcast", image: gamingVideo, isVideo: true},
    { name: "Other", image: otherVideo, isVideo: true}
  ];

  const todaysPicks = [
    {
      title: "Horrible Ratings Fire Emblem Engage's Fully",
      des: "Gaming World",
      author: "CJ Games",
      date: "2 August, 2023",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop"
    },
    {
      title: "Everything You Need to Know About",
      author: "CJ Games",
      date: "2 August, 2023",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop"
    },
    {
      title: "We Can't Wait To Try This Dragon Age?",
      author: "CJ Games",
      date: "2 August, 2023",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop"
    }
  ];

  const newBlogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2023",
      author: "Tech Insights",
      date: "5 August, 2023",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&h=300&fit=crop"
    },
    {
      title: "Building Scalable Applications with Modern JavaScript Frameworks",
      author: "Dev Masters",
      date: "4 August, 2023",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
    },
    {
      title: "Understanding the Power of CSS Grid and Flexbox",
      author: "Design Pro",
      date: "3 August, 2023",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    },
    {
      title: "Optimizing React Performance: Best Practices",
      author: "React Experts",
      date: "2 August, 2023",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop"
    },
    {
      title: "The Rise of Progressive Web Apps in Modern Web Design",
      author: "Web Wizards",
      date: "1 August, 2023",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop"
    }
  ];

  const trendingBlogPosts = [
    { 
      title: "10 JavaScript Concepts Every Developer Should Master", 
      author: "Code Academy", 
      date: "5 August, 2023", 
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" 
    },
    { 
      title: "CSS Animations: A Complete Guide for Beginners", 
      author: "Style Gurus", 
      date: "4 August, 2023", 
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" 
    },
    { 
      title: "Building Accessible Web Applications", 
      author: "Inclusive Design", 
      date: "3 August, 2023", 
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" 
    },
    { 
      title: "The State of Frontend Development in 2023", 
      author: "Frontend Focus", 
      date: "2 August, 2023", 
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" 
    }
  ];

  const trendingNews = [
    { title: "Observation Problems For Pc And Ps4", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" },
    { title: "Observation Problems For Pc And Ps4", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" },
    { title: "Observation Problems For Pc And Ps4", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" },
    { title: "Observation Problems For Pc And Ps4", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" },
    { title: "Observation Problems For Pc And Ps4", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop" },
  ];

  const sidebarPosts = [
    { title: "A Guide To Gaming Data Scraping Technology", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150&h=100&fit=crop" },
    { title: "Pilot Typography: Rendering & Aligning With Your User's Zoom In", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=150&h=100&fit=crop" },
    { title: "Exploring CSS Logical Properties On Web Apps", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=150&h=100&fit=crop" }
  ];

  const hotTrends = [
    { title: "GTA 6 Denies Union Busting After Firing Dozens Of Developers", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&h=300&fit=crop" },
    { title: "GTA 6 Denies Union Busting After Firing Dozens Of Developers", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop" },
    { title: "GTA 6 Denies Union Busting After Firing Dozens Of Developers", author: "CJ Games", date: "2 August, 2023", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroPost heroArticles={heroArticles} />
      <BrowseCategories categoryItems={categoryItems} />
      <Qordexchannel />
      <Hotnews todaysPicks={todaysPicks} />
      <Blospost newBlogPosts={newBlogPosts} trendingBlogPosts={trendingBlogPosts} />
      <AdsChannel />
      <GamingSection hotTrends={hotTrends} />
    </div>
  );
}