import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Apple, Facebook, Search } from 'lucide-react';

const Login = () => {
  const [contactMethod, setContactMethod] = useState('email'); // 'email' or 'phone'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    const loginData = {
      password,
      rememberMe
    };
    
    if (contactMethod === 'email') {
      loginData.email = email;
    } else {
      loginData.phone = phone;
    }
    
    console.log('Login attempt with:', loginData);
    // For now, redirect to home page after "login"
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Here you would integrate with actual OAuth providers
    // For now, we'll just log the action
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Contact method selection */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">Sign in with</label>
              <div className="flex gap-4 mb-4">
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border ${
                    contactMethod === 'email' 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'bg-gray-800 border-gray-700 text-gray-300'
                  }`}
                  onClick={() => setContactMethod('email')}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </button>
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border ${
                    contactMethod === 'phone' 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : 'bg-gray-800 border-gray-700 text-gray-300'
                  }`}
                  onClick={() => setContactMethod('phone')}
                >
                  <Phone className="w-4 h-4" />
                  Phone
                </button>
              </div>
              
              {/* Conditional input based on contact method */}
              {contactMethod === 'email' ? (
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              ) : (
                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-600 rounded bg-gray-700"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-green-500 hover:text-green-400">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
          
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => handleSocialLogin('google')}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition"
            >
              <Search className="w-5 h-5" />
              Google
            </button>
            <button
              onClick={() => handleSocialLogin('facebook')}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </button>
            <button
              onClick={() => handleSocialLogin('apple')}
              className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              <Apple className="w-5 h-5" />
              Apple
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <a href="/register" className="font-medium text-green-500 hover:text-green-400">
                Sign up
              </a>
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <a href="/" className="text-gray-400 hover:text-green-500 text-sm flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;