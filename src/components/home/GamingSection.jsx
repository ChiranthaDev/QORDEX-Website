import React from 'react';
import { LayoutGridDemo } from '../ui/layout';

const GamingSection = ({ hotTrends }) => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            <div className="flex items-center  mb-12">
              <h1 className="text-6xl font-bold tracking-tight text-white">
                Gaming
                {/* Bottom decorative elements */}
                <div className="flex gap-6 mt-2 mb-4 ">
                  <div className="w-10 h-1 bg-teal-500 rounded"></div>
                  <div className="w-6 h-1 bg-white rounded"></div>
                  <div className="w-4 h-1 bg-teal-500 rounded"></div>
                </div>
              </h1>
            </div>
            
            <div className="grid gap-8">
              {hotTrends.map((trend, index) => (
                <div key={index} className="flex gap-4 cursor-pointer group">
                  <img src={trend.image} alt={trend.title} className="w-48 h-32 rounded-lg object-cover group-hover:scale-105 transition-transform" />
                  <div className="flex-1">
                    <span className="inline-block bg-green-500 text-xs px-2 py-1 rounded mb-2">GAMING</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-300">{trend.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">A British trade union group is accusing Rockstar Games of union busting after it reportedly fired over 30 employees across offices in the UK and Canada....</p>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>{trend.author}</span>
                      <span>•</span>
                      <span>{trend.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <LayoutGridDemo />
        </div>
      </div>
    </section>
  );
};

export default GamingSection;