import React from 'react';

const Blospost = ({ newBlogPosts, trendingBlogPosts }) => {
  return (
    <section className="py-2 bg-white-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-6xl font-bold tracking-tight text-black">
              NEW BLOGS
              {/* Bottom decorative elements */}
              <div className="flex gap-6 mt-2 mb-4 ">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First two posts - one per row, slightly decreased size */}
              {newBlogPosts.slice(0, 2).map((post, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer group">
                  <div className="relative h-58">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300">{post.title}</h3>
                      <p className="text-white text-xs">{post.author} • {post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Other 3 posts - horizontal line, increased to more square size */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:col-span-2">
                {newBlogPosts.slice(2).map((post, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer group">
                    <div className="relative h-64">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-300">{post.title}</h3>
                        <p className="text-white text-xs">{post.author} • {post.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-white rounded-lg p-7">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                TRENDING BLOGS
                {/* Bottom decorative elements */}
                <div className="flex gap-6 mt-1 mb-4 ">
                  <div className="w-6 h-1 bg-teal-500 rounded"></div>
                  <div className="w-4 h-1 bg-teal-700 rounded"></div>
                  <div className="w-3 h-1 bg-teal-500 rounded"></div>
                </div>
              </h3>
              <div className="space-y-4">
                {trendingBlogPosts.map((news, index) => (
                  <div key={index} className="flex gap-3 cursor-pointer group">
                    <img src={news.image} alt={news.title} className="w-36 h-22 rounded object-cover" />
                    <div className="flex-1">
                      <h4 className="text-black text-sm font-semibold mb-1 group-hover:text-green-500 line-clamp-2">{news.title}</h4>
                      <p className="text-xs text-gray-500">{news.author} • {news.date}</p>
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