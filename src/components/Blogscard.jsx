import React from 'react';

const Blogscard = () => {
  return (
    <div className="bg-white py-10 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl max-w-6xl w-full p-10">
        {/* Hero Section */}
        <div className="text-center relative">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 leading-tight mb-12 tracking-tight relative">
            A place to display your<br />master projects.
          </h1>

          {/* Cards Gallery */}
          <div className="my-12 md:my-16 relative h-60 md:h-72 flex items-center justify-center">
            {/* Card 1 */}
            <div className="absolute w-40 md:w-50 h-44 md:h-64 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2.5 z-10 transform -rotate-[15deg] -translate-x-40 md:-translate-x-72">
              <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-700 rounded-2xl flex items-center justify-center">
                <span className="text-white font-medium">Artwork 1</span>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="absolute w-40 md:w-50 h-44 md:h-64 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2.5 z-20 transform -rotate-[10deg] -translate-x-20 md:-translate-x-36">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl flex items-center justify-center">
                <span className="text-white font-medium">Artwork 2</span>
              </div>
            </div>
            
            {/* Card 3 (Center) */}
            <div className="absolute w-40 md:w-50 h-44 md:h-64 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2.5 z-30">
              <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-white font-medium">ArtWork 3</span>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="absolute w-40 md:w-50 h-44 md:h-64 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2.5 z-20 transform rotate-[10deg] translate-x-20 md:translate-x-36">
              <div className="w-full h-full bg-gradient-to-br from-red-300 to-red-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-medium">Artwork 4</span>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="absolute w-40 md:w-50 h-44 md:h-64 rounded-2xl shadow-xl transition-transform duration-500 hover:-translate-y-2.5 z-10 transform rotate-[15deg] translate-x-40 md:translate-x-72">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-medium">Artwork 5</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-md mx-auto text-gray-500 text-sm md:text-base leading-relaxed mb-10">
            Artists can display their master projects, and buyers can discover and purchase works that resonate with them.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3.5 bg-gray-900 text-white rounded-3xl text-sm font-bold transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              Join for $99/mo
            </button>
            <a href="#" className="bg-white shadow-2xl px-8 py-3 text-gray-900 border-black border-2 rounded-3xl text-sm font-bold transition-all duration-300 hover:text-green-500 hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogscard;