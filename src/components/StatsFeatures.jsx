import React, { useState, useEffect } from 'react';
import { HardDrive, FileAudio, Mic2, Maximize2, ListMusic, Heart, Shield, Zap, Lock, Sparkles } from 'lucide-react';

export default function NoctuneLandingPart2() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      number: "100%", 
      label: "Offline", 
      icon: <HardDrive className="w-7 h-7" />,
    },
    { 
      number: "0MB", 
      label: "Cloud Storage", 
      icon: <Lock className="w-7 h-7" />,
    },
    { 
      number: "∞", 
      label: "Library Size", 
      icon: <Zap className="w-7 h-7" />,
    },
    { 
      number: "100%", 
      label: "Privacy", 
      icon: <Shield className="w-7 h-7" />,
    }
  ];

  const features = [
    {
      icon: <HardDrive className="w-7 h-7" />,
      title: "100% Offline",
      description: "No internet needed. Your music stays on your device, always accessible.",
    },
    {
      icon: <FileAudio className="w-7 h-7" />,
      title: "MP3 & FLAC Support",
      description: "Upload your music library in high-quality formats. Supports MP3 and FLAC.",
    },
    {
      icon: <Mic2 className="w-7 h-7" />,
      title: "Lyrics Display",
      description: "Add lyrics files and sing along with synchronized text display.",
    },
    {
      icon: <Maximize2 className="w-7 h-7" />,
      title: "Fullscreen Mode",
      description: "Immersive fullscreen experience for focused listening sessions.",
    },
    {
      icon: <ListMusic className="w-7 h-7" />,
      title: "Smart Playlists",
      description: "Create unlimited playlists and organize your music your way.",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Like & Favorite",
      description: "Mark your favorite tracks and build your personal collection.",
    }
  ];

  return (
    <div className="bg-black text-white">
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="relative bg-neutral-900 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-4">
                    <div className="text-black">
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white tracking-wide">FEATURES</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Everything You Need,
              <br />
              <span className="text-white">
                Nothing You Don't
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Noctune is designed to be simple, powerful, and completely private
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`relative h-full bg-neutral-900 rounded-xl p-6 border transition-all ${
                  activeFeature === index 
                    ? 'border-white/30' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="mb-5 inline-block">
                    <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center">
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-xl bg-neutral-800">
                    <div className={`h-full bg-white transition-all duration-500 ${
                      activeFeature === index ? 'w-full' : 'w-0'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-600" />
              <span className="text-sm font-medium">And many more features coming soon</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-600" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}