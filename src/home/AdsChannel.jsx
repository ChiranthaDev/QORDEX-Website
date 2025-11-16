import React from 'react';

const AdsChannel = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-500 to-green-900 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
              alt="Gaming"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Free Gaming Website 2023</h3>
              <p className="mb-4">For The First Ever In Records</p>
              <p className="text-sm mb-6">PUBG Free Code Leaked</p>
              <button className="bg-white text-green-900 px-6 py-2 rounded font-semibold hover:bg-green-500 hover:text-white">
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsChannel;