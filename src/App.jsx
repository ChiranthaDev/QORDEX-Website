import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import AuthPage from './components/AuthPage.jsx'
import About from './pages/About.jsx'
import News from './pages/News.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import Project from './pages/Project.jsx'
import Blog from './pages/Blog.jsx'
import Watch from './pages/Watch.jsx'
import Shorts from './pages/Shorts.jsx'
import Watchlist from './pages/Watchlist.jsx'
import SavedVideos from './pages/SavedVideos.jsx'
import Trending from './pages/Trending.jsx'
import Categories from './pages/Categories.jsx'
import Settings from './pages/Settings.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/register",
    element: <AuthPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <NewsDetail />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/watch",
    element: <Watch />,
  },
  {
    path: "/shorts",
    element: <Shorts />,
  },
  {
    path: "/watchlist",
    element: <Watchlist />,
  },
  {
    path: "/saved-videos",
    element: <SavedVideos />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}