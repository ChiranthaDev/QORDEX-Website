import React from 'react';

const CategoryHero = () => {
  return (
    <section className="py-24 text-center bg-white">
      {/* Consistent responsive container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-black leading-tight">
          CATEG
          <span className="relative inline-block mx-2">
            <span
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[18deg]
                w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#282828e6] to-[#141414e6]
                border border-black/15 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] z-[-1]"
            ></span>
            <span className="relative text-white z-[1]">O</span>
          </span>
          RIES
        </h1>

        {/* Optional subtitle or description */}
        <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
          Explore all categories — technology, gaming, AI, software, and more.
        </p>
      </div>
    </section>
  );
};

export default CategoryHero;
