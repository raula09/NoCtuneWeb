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
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
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
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500"
    },
    { 
      number: "0MB", 
      label: "Cloud Storage", 
      icon: <Lock className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-500"
    },
    { 
      number: "∞", 
      label: "Library Size", 
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    { 
      number: "100%", 
      label: "Privacy", 
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600"
    }
  ];

  const features = [
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "100% Offline",
      description: "No internet needed. Your music stays on your device, always accessible.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: <FileAudio className="w-8 h-8" />,
      title: "MP3 & FLAC Support",
      description: "Upload your music library in high-quality formats. Supports MP3 and FLAC.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Lyrics Display",
      description: "Add lyrics files and sing along with synchronized text display.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Maximize2 className="w-8 h-8" />,
      title: "Fullscreen Mode",
      description: "Immersive fullscreen experience for focused listening sessions.",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <ListMusic className="w-8 h-8" />,
      title: "Smart Playlists",
      description: "Create unlimited playlists and organize your music your way.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Like & Favorite",
      description: "Mark your favorite tracks and build your personal collection.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="bg-black text-white">
     
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
 
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                id={`stat-${index}`}
                data-animate
                className="group relative"
                style={{
                  animation: isVisible[`stat-${index}`] ? `slideUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              > 
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                    
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-black">
                      {stat.icon}
                    </div>
                  </div>
                   
                  <div className="relative mb-2">
                    <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                  </div>
                   
                  <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                   
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20`} 
                         style={{
                           animation: 'borderShine 2s linear infinite',
                           clipPath: 'polygon(0 0, 100% 0, 100% 2px, 0 2px)'
                         }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section id="features" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        
          <div className="text-center mb-20 space-y-6" data-animate id="features-header">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400 tracking-wide">FEATURES</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              Everything You Need,
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-50" />
                <span className="relative bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Nothing You Don't
                </span>
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              NoCtune is designed to be simple, powerful, and completely private
            </p>
          </div>

         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                id={`feature-${index}`}
                data-animate
                className="group relative"
                style={{
                  animation: isVisible[`feature-${index}`] ? `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` : 'none'
                }}
              >
               
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl`} />
                 
                <div className={`relative h-full bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-700 ${
                  activeFeature === index 
                    ? 'border-emerald-500/50 shadow-2xl shadow-emerald-500/20 scale-105' 
                    : 'border-emerald-500/10 hover:border-emerald-500/30 hover:scale-105'
                }`}>
                 
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
 
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
 
                  <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-3xl">
                    <div className={`h-full bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  </div>

                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100`} />
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-br ${feature.gradient}`}
                      style={{
                        top: `${20 + i * 30}%`,
                        right: `${10 + i * 5}%`,
                        animation: `floatParticle ${2 + i * 0.5}s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-animate id="features-cta">
            <div className="inline-flex items-center gap-2 text-emerald-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500" />
              <span className="text-sm font-medium">And many more features coming soon</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.3) 25%, rgba(16, 185, 129, 0.3) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.3) 75%, rgba(16, 185, 129, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.3) 25%, rgba(16, 185, 129, 0.3) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.3) 75%, rgba(16, 185, 129, 0.3) 76%, transparent 77%, transparent)`,
                 backgroundSize: '50px 50px'
               }} />
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes borderShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            transform: translate(10px, -20px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}