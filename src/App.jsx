import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import AuthPage from './components/AuthPage.jsx'
import About from './components/About.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}