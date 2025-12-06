import React, { useState, useEffect } from 'react';
import { Music, Sparkles, Radio, TrendingUp, Users, ChevronRight } from 'lucide-react';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Unlimited Music",
      description: "Access millions of songs from every genre imaginable"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Recommendations",
      description: "Discover new music tailored perfectly to your taste"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Live Radio",
      description: "Stream live from stations around the world"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">NoCtune</span>
          </h2>
          <p className="text-xl text-slate-400">Everything you need for the perfect listening experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                activeFeature === index 
                  ? 'border-purple-500 bg-white/10 scale-105' 
                  : 'border-white/10 hover:border-purple-500/50'
              }`}
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Trending Playlists</h3>
            <p className="text-slate-300 mb-4">Stay up to date with the hottest tracks and curated playlists from around the world.</p>
            <button className="text-purple-400 font-semibold flex items-center group">
              Explore Now 
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Social Listening</h3>
            <p className="text-slate-300 mb-4">Share your favorite tracks with friends and see what everyone is vibing to.</p>
            <button className="text-blue-400 font-semibold flex items-center group">
              Connect Now 
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}