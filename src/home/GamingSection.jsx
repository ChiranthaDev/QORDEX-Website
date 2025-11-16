import React from 'react';
import { LayoutGridDemo } from '../components/ui/layout';

const GamingSection = ({ hotTrends }) => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-6xl font-bold tracking-tight text-white mb-8">
              GAMING
              <div className="flex gap-4 mt-2 mb-4">
                <div className="w-10 h-1 bg-teal-500 rounded"></div>
                <div className="w-6 h-1 bg-white rounded"></div>
                <div className="w-4 h-1 bg-teal-500 rounded"></div>
              </div>
            </h1>
            <div className="grid gap-8">
              {hotTrends.map((trend, index) => (
                <div key={index} className="flex gap-4 cursor-pointer group">
                  <img
                    src={trend.image}
                    alt={trend.title}
                    className="w-48 h-32 rounded-lg object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1">
                    <span className="inline-block bg-green-500 text-xs px-2 py-1 rounded mb-2">
                      GAMING
                    </span>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-green-300">
                      {trend.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {trend.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-400 font-light">
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
