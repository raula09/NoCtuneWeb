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
      color: "from-emerald-500 to-green-500"
    },
    { 
      number: "0MB", 
      label: "Cloud Storage", 
      icon: <Lock className="w-7 h-7" />,
      color: "from-teal-500 to-emerald-500"
    },
    { 
      number: "∞", 
      label: "Library Size", 
      icon: <Zap className="w-7 h-7" />,
      color: "from-green-500 to-teal-500"
    },
    { 
      number: "100%", 
      label: "Privacy", 
      icon: <Shield className="w-7 h-7" />,
      color: "from-emerald-500 to-green-600"
    }
  ];

  const features = [
    {
      icon: <HardDrive className="w-7 h-7" />,
      title: "100% Offline",
      description: "No internet needed. Your music stays on your device, always accessible.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: <FileAudio className="w-7 h-7" />,
      title: "MP3 & FLAC Support",
      description: "Upload your music library in high-quality formats. Supports MP3 and FLAC.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Mic2 className="w-7 h-7" />,
      title: "Lyrics Display",
      description: "Add lyrics files and sing along with synchronized text display.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Maximize2 className="w-7 h-7" />,
      title: "Fullscreen Mode",
      description: "Immersive fullscreen experience for focused listening sessions.",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <ListMusic className="w-7 h-7" />,
      title: "Smart Playlists",
      description: "Create unlimited playlists and organize your music your way.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Like & Favorite",
      description: "Mark your favorite tracks and build your personal collection.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="bg-black text-white">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-40" />
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
                <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                  
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400 tracking-wide">FEATURES</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              Everything You Need,
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
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
                    ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20' 
                    : 'border-emerald-500/10 hover:border-emerald-500/30'
                } hover:scale-105`}>
                   
                  <div className="mb-5 inline-block">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
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
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500" />
              <span className="text-sm font-medium">And many more features coming soon</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}