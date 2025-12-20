import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About CinemaSphere
          </h1>
          <p className="text-xl text-orange-100 leading-relaxed">
            Your premium destination for unlimited movie streaming
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Story</h2>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              CinemaSphere was born from a simple vision: to create the ultimate movie streaming experience that combines cutting-edge technology with a passion for cinema. Founded in 2024, we've revolutionized how people discover and enjoy movies online.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our platform brings together thousands of movies from every genre, era, and corner of the world, all accessible with crystal-clear HD quality and zero interruptions.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose CinemaSphere?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-white mb-3">Vast Library</h3>
              <p className="text-gray-300">Thousands of movies across all genres, from classics to latest releases.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-3">HD Quality</h3>
              <p className="text-gray-300">Crystal clear streaming with multiple quality options for every device.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-white mb-3">Ad-Free</h3>
              <p className="text-gray-300">Uninterrupted viewing experience without any advertisements.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Device</h3>
              <p className="text-gray-300">Watch on any device - phone, tablet, laptop, or smart TV.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Secure</h3>
              <p className="text-gray-300">Your data is protected with enterprise-grade security measures.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Streaming</h3>
              <p className="text-gray-300">Lightning-fast loading with multiple server options for reliability.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Mission</h2>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              To democratize access to quality entertainment by providing a seamless, affordable, and comprehensive movie streaming platform that brings the magic of cinema to everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
            <p className="text-gray-300">Movies Available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">1M+</div>
            <p className="text-gray-300">Happy Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">99.9%</div>
            <p className="text-gray-300">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <p className="text-gray-300">Support</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Watching?</h2>
            <p className="text-gray-300 text-lg mb-6">Join millions of movie lovers on CinemaSphere today.</p>
            <a 
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Start Watching Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;