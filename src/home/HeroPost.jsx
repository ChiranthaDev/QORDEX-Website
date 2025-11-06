import React from 'react';

const HeroPost = ({ heroArticles }) => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {heroArticles.map((article, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded mb-3">
                  {article.category}
                </span>
                <h3 className="text-2xl text-white font-medium mb-2">{article.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-300 font-light">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
