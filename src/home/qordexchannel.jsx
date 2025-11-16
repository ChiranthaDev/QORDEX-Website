import React from 'react';

const Qordexchannel = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between bg-gradient-to-r from-green-900 to-green-500 rounded-xl p-8 overflow-hidden relative">
          <div className="z-10">
            <h3 className="text-white text-2xl font-medium mb-2">The Best Tech YouTube Channel</h3>
            <p className="text-white text-2xl font-medium mb-4">In This Year</p>
            <button className="bg-white px-6 py-2 rounded hover:bg-green-600 hover:text-white">
              SUBSCRIBE
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
            alt="Channel"
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-90 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Qordexchannel;