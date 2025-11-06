import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Lock, User, Eye, EyeOff, Search, Facebook, Apple } from 'lucide-react';
import backgroundImage from '../img/2.jpg';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleTransition = (toLogin) => {
    if (toLogin !== isLogin) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLogin(toLogin);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log('Login attempt with:', { email, password, rememberMe });
    } else {
      // Handle registration logic here
      console.log('Registration attempt with:', { name, email, password, confirmPassword, acceptedTerms });
    }
    // For now, redirect to home page after "login/registration"
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Here you would integrate with actual OAuth providers
    // For now, we'll just log the action
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row w-[900px] h-[560px] bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out">
        {/* Form Side */}
        <div className={`w-full lg:w-1/2 p-6 md:p-8 transition-all duration-500 ease-in-out ${isLogin ? 'order-1' : 'order-2'}`}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">{isLogin ? 'Sign In' : 'Sign Up'}</h1>
            <button 
              onClick={() => handleTransition(!isLogin)}
              className="text-green-500 hover:text-green-400 font-medium text-sm transition-colors duration-300"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-gray-300 text-xs font-medium mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-8 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-gray-300 text-xs font-medium mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-8 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-gray-300 text-xs font-medium mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full pl-8 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-gray-300 text-xs font-medium mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  className="w-full pl-8 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={!isLogin}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            
            {isLogin ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-3 w-3 text-green-500 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-300">
                    Remember me
                  </label>
                </div>
                <div className="text-xs">
                  <a href="#" className="font-medium text-green-500 hover:text-green-400 transition-colors duration-300">
                    Forgot password?
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-3 w-3 text-green-500 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    required
                  />
                </div>
                <div className="ml-2 text-xs">
                  <label htmlFor="terms" className="text-gray-300">
                    I agree to the <a href="#" className="text-green-500 hover:text-green-400 transition-colors duration-300">Terms of Service</a> and <a href="#" className="text-green-500 hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
                  </label>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-gray-800 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleSocialLogin('google')}
              className="flex items-center justify-center gap-1 bg-white text-gray-700 py-1.5 rounded-lg hover:bg-gray-200 transition text-xs"
            >
              <Search className="w-4 h-4" />
              <span>Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin('facebook')}
              className="flex items-center justify-center gap-1 bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition text-xs"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </button>
            <button
              onClick={() => handleSocialLogin('apple')}
              className="flex items-center justify-center gap-1 bg-black text-white py-1.5 rounded-lg hover:bg-gray-800 transition text-xs"
            >
              <Apple className="w-4 h-4" />
              <span>Apple</span>
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <a href="/" className="text-gray-400 hover:text-green-500 text-xs flex items-center justify-center gap-1 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
        
        {/* Image/Text Side */}
        <div className={`w-full lg:w-1/2 relative overflow-hidden transition-all duration-700 ease-in-out ${isLogin ? 'order-2' : 'order-1'} ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-90"></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 text-white">
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isLogin ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  )}
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p className="text-gray-300 text-sm">{isLogin ? 'Manage your account effortlessly and access exclusive features.' : 'Join our community and unlock exclusive features.'}</p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{isLogin ? 'Secure & Reliable' : 'Get Started Today'}</h3>
                  <p className="text-gray-300 text-xs">{isLogin ? 'Your data is protected with industry-leading security measures.' : 'Create your account in seconds and start enjoying our services.'}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-auto">
              <button
                onClick={() => handleSocialLogin('google')}
                className="flex items-center justify-center gap-1 bg-white bg-opacity-20 text-white py-1.5 rounded-lg hover:bg-opacity-30 transition text-xs"
              >
                <Search className="w-3 h-3" />
                <span>Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin('facebook')}
                className="flex items-center justify-center gap-1 bg-white bg-opacity-20 text-white py-1.5 rounded-lg hover:bg-opacity-30 transition text-xs"
              >
                <Facebook className="w-3 h-3" />
                <span>Facebook</span>
              </button>
              <button
                onClick={() => handleSocialLogin('apple')}
                className="flex items-center justify-center gap-1 bg-white bg-opacity-20 text-white py-1.5 rounded-lg hover:bg-opacity-30 transition text-xs"
              >
                <Apple className="w-3 h-3" />
                <span>Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;