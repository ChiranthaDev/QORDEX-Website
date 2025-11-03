import React from 'react';

const CategoryHero = () => {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-8xl font-bold tracking-tight text-black">
          CATEG
          <span className="relative inline-block mx-2">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[18deg] 
                          w-20 h-20 bg-gradient-to-br from-[#282828e6] to-[#141414e6] 
                          border border-black/15 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[-1]">
            </span>
            <span className="relative text-white z-[1]">O</span>
          </span>
          RIES
        </h1>
      </div>
    </section>
  );
};

export default CategoryHero;