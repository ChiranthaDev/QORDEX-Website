import React from 'react';

const Blospost = ({ newBlogPosts, trendingBlogPosts }) => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: New Blogs */}
          <div className="lg:col-span-2">
            <h2 className="text-6xl font-bold tracking-tight text-black mb-8">
              NEW BLOGS
              <div className="flex gap-4 mt-2 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* First two posts */}
              {newBlogPosts.slice(0, 2).map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer group"
                >
                  <div className="relative h-58">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-1xl font-medium text-white mb-2 group-hover:text-green-300">
                        {post.title}
                      </h3>
                      <p className="text-white text-xs font-light">
                        {post.author} • {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Remaining posts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:col-span-2">
                {newBlogPosts.slice(2).map((post, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer group"
                  >
                    <div className="relative h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-1xl font-medium text-white mb-2 group-hover:text-green-300">
                          {post.title}
                        </h3>
                        <p className="text-white text-xs font-light font-light">
                          {post.author} • {post.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Trending Blogs */}
          <div>
            <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight text-black mb-4">
                TRENDING BLOGS
                <div className="flex gap-3 mt-2 mb-4">
                  <div className="w-6 h-1 bg-teal-500 rounded"></div>
                  <div className="w-4 h-1 bg-teal-700 rounded"></div>
                  <div className="w-3 h-1 bg-teal-500 rounded"></div>
                </div>
              </h3>

              <div className="space-y-4">
                {trendingBlogPosts.map((news, index) => (
                  <div key={index} className="flex gap-3 cursor-pointer group">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-36 h-22 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-black text-sm font-semibold mb-1 group-hover:text-green-500 line-clamp-2">
                        {news.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {news.author} • {news.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blospost;