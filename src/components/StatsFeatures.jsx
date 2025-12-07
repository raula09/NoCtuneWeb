import React, { useState, useEffect } from 'react';
import { HardDrive, FileAudio, Mic2, Maximize2, ListMusic, Heart, Shield, Zap, Lock, Sparkles } from 'lucide-react';

export default function NoctuneLandingPart2() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      number: "100%", 
      label: "Offline", 
      icon: <HardDrive className="w-7 h-7" />,
      color: "from-black to-white"
    },
    { 
      number: "0MB", 
      label: "Cloud Storage", 
      icon: <Lock className="w-7 h-7" />,
      color: "from-white to-black"
    },
    { 
      number: "∞", 
      label: "Library Size", 
      icon: <Zap className="w-7 h-7" />,
      color: "from-white to-black"
    },
    { 
      number: "100%", 
      label: "Privacy", 
      icon: <Shield className="w-7 h-7" />,
      color: "from-black to-white"
    }
  ];

  const features = [
    {
      icon: <HardDrive className="w-7 h-7" />,
      title: "100% Offline",
      description: "No internet needed. Your music stays on your device, always accessible.",
      gradient: "from-black to-white"
    },
    {
      icon: <FileAudio className="w-7 h-7" />,
      title: "MP3 & FLAC Support",
      description: "Upload your music library in high-quality formats. Supports MP3 and FLAC.",
      gradient: "from-white to-black"
    },
    {
      icon: <Mic2 className="w-7 h-7" />,
      title: "Lyrics Display",
      description: "Add lyrics files and sing along with synchronized text display.",
      gradient: "from-white to-black"
    },
    {
      icon: <Maximize2 className="w-7 h-7" />,
      title: "Fullscreen Mode",
      description: "Immersive fullscreen experience for focused listening sessions.",
      gradient: "from-black to-white"
    },
    {
      icon: <ListMusic className="w-7 h-7" />,
      title: "Smart Playlists",
      description: "Create unlimited playlists and organize your music your way.",
      gradient: "from-white to-black"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Like & Favorite",
      description: "Mark your favorite tracks and build your personal collection.",
      gradient: "from-black to-white"
    }
  ];

  return (
    <div className="bg-black text-white">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-40" />
      </div>
   
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate
                className="group relative"
                style={{
                  opacity: isVisible[`stat-${index}`] ? 1 : 0,
                  transform: isVisible[`stat-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <div className="text-black">
                      {stat.icon}
                    </div>
                  </div>
                   
                  <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                   
                  <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
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
          
          <div 
            className="text-center mb-16 space-y-6" 
            data-animate 
            id="features-header"
            style={{
              opacity: isVisible['features-header'] ? 1 : 0,
              transform: isVisible['features-header'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">FEATURES</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent">
                Nothing You Don't
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              NoCtune is designed to be simple, powerful, and completely private
            </p>
          </div>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                id={`feature-${index}`}
                data-animate
                className="group relative"
                style={{
                  opacity: isVisible[`feature-${index}`] ? 1 : 0,
                  transform: isVisible[`feature-${index}`] ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className={`relative h-full bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-white/50 shadow-lg shadow-white/20' 
                    : 'border-white/10 hover:border-white/30'
                } hover:scale-105`}>
                   
                  <div className="mb-5 inline-block">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
  
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-2xl">
                    <div className={`h-full bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          <div 
            className="mt-12 text-center" 
            data-animate 
            id="features-cta"
            style={{
              opacity: isVisible['features-cta'] ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s'
            }}
          >
            <div className="inline-flex items-center gap-2 text-white">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-white" />
              <span className="text-sm font-medium">And many more features coming soon</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}