import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import AuthPage from './components/AuthPage.jsx'
import News from './pages/News.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPost from './pages/blogpages/TechPost.jsx'
import ReflectionsPage from './pages/ReflectionsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blogpost" element={<BlogPost />} />
      <Route path="/reflections" element={<ReflectionsPage />} />
    </Routes>
  )
}