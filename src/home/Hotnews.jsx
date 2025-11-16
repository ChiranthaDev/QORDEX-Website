import React from 'react';
import { Facebook, Music, Youtube, Linkedin, Github, Instagram } from 'lucide-react';

const Hotnews = ({ todaysPicks }) => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-6xl font-bold tracking-tight text-black mb-8">
              HOT NEWS
              <div className="flex gap-4 mt-2 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-teal-700 rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h1>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 cursor-pointer group">
                <div className="relative h-[600px] rounded-xl overflow-hidden mb-4 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop"
                    alt="Featured"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-green-300">
                      Far Cry 6 Game Released.
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-300 font-light">
                      <span>CJ Games</span>
                      <span>•</span>
                      <span>2 August, 2023</span>
                      <span>•</span>
                      <span>10 minute read</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col gap-6">
                {todaysPicks.map((post, index) => (
                  <div key={index} className="cursor-pointer group flex-1">
                    <div className="h-[180px] flex gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex-1">
                        <h3 className="text-1x1 font-medium text-black mb-2 group-hover:text-green-600">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500 font-light">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="relative w-44 h-34 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-black mb-4">
                FOLLOW
                <div className="flex gap-2 mt-2 mb-4">
                  <div className="w-5 h-1 bg-teal-500 rounded"></div>
                  <div className="w-3 h-1 bg-teal-700 rounded"></div>
                  <div className="w-2 h-1 bg-teal-500 rounded"></div>
                </div>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded hover:bg-blue-700">
                  <Facebook className="w-4 h-4" /> Facebook
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white py-4 rounded hover:bg-gray-800">
                  <Music className="w-4 h-4" /> TikTok
                </button>
                <button className="flex items-center justify-center gap-2 bg-red-600 text-white py-4 rounded hover:bg-red-700">
                  <Youtube className="w-4 h-4" /> YouTube
                </button>
                <button className="flex items-center justify-center gap-2 bg-blue-700 text-white py-4 rounded hover:bg-blue-800">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded hover:bg-black">
                  <Github className="w-4 h-4" /> GitHub
                </button>
                <button className="flex items-center justify-center gap-2 bg-pink-600 text-white py-4 rounded hover:bg-pink-700">
                  <Instagram className="w-4 h-4" /> Instagram
                </button>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-8 mb-6">
              <h3 className="text-xl font-bold mb-4">Daily Newsletter</h3>
              <p className="text-gray-400 text-sm mb-6">
                Discover trending tech stories and gaming highlights. Subscribe to stay updated!
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-slate-800 text-white mb-3 outline-none"
              />
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-white hover:text-green-500">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotnews;