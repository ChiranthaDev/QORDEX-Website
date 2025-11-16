import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Blog() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-b-2xl shadow-sm">
        <Header />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-3xl">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog Coming Soon
            </h1>
            
            <p className="text-xl text-gray-600 mb-2">
              We're working hard to bring you our amazing blog
            </p>
            
            <p className="text-lg text-gray-500 mb-8">
              Our blog section is currently under development and will be available within 3 months
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-gray-600">Months</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-gray-600">Weeks</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">0</div>
                <div className="text-gray-600">Days</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              Go Back
            </button>
            
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}