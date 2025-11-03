import React from 'react';

const BrowseCategories = ({ categoryItems }) => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-6xl font-bold tracking-tight text-black">
            CATEG
            <span className="relative inline-block mx-2">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[18deg] 
                            w-20 h-20 bg-gradient-to-br from-[#282828e6] to-[#141414e6] 
                            border border-black/15 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[1]">
              </span>
              <span className="relative text-white z-[2]">O</span>
            </span>
            RIES
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoryItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-32 h-32 rounded-3xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                {item.isVideo ? (
                  <video 
                    src={item.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                    onError={(e) => console.log("Video load error:", e)}
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                )}
              </div>
              <span className="text-1 font-medium text-black text-center group-hover:text-gray-700 transition-colors" style={{ fontFamily: "'MedievalSharp', cursive" }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;