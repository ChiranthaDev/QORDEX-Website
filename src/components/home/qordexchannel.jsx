import React from 'react';

const Qordexchannel = () => {
  return (
    <section>
      <div className="container mx-auto px-16">
        <div className="flex items-center justify-between bg-gradient-to-r from-green-900 to-green-500 rounded-lg p-8 overflow-hidden relative">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">The Best Tech Youtube Channel</h3>
            <p className="text-white text-2xl font-bold mb-4">In This Year</p>
            <button className="bg-white px-6 py-2 rounded hover:bg-green-600 hover:text-white">
              SUBSCRIBE
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop" 
            alt="Gaming" 
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Qordexchannel;