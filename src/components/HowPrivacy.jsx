import React, { useState, useEffect } from 'react';
import { Shield, HardDrive, Lock, Check, Download, Upload, FileAudio, Play, Sparkles, ArrowRight } from 'lucide-react';

export default function NoctuneLandingPart3() {
  const [isVisible, setIsVisible] = useState({});
  const [activeStep, setActiveStep] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const howItWorks = [
    { 
      step: "1", 
      title: "Download & Install", 
      description: "Get NoCtune in seconds. No account required.",
      icon: <Download className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500"
    },
    { 
      step: "2", 
      title: "Upload Your Music", 
      description: "Drag and drop MP3 or FLAC files into the app.",
      icon: <Upload className="w-6 h-6" />,
      color: "from-teal-500 to-emerald-500"
    },
    { 
      step: "3", 
      title: "Add Lyrics (Optional)", 
      description: "Import lyrics files for synchronized display.",
      icon: <FileAudio className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    { 
      step: "4", 
      title: "Enjoy Offline", 
      description: "Listen anytime, anywhere. No internet needed.",
      icon: <Play className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600"
    }
  ];

  const privacyFeatures = [
    {
      title: "No Internet Connection",
      description: "Works offline, no data sent anywhere",
      icon: <HardDrive className="w-5 h-5" />
    },
    {
      title: "No Account Required",
      description: "Download and start using immediately",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Local Storage Only",
      description: "All data stays on your computer",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
     
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl opacity-40" />
      </div>
 
      <section id="how-it-works" className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        
          <div 
            className="text-center mb-16 space-y-6" 
            data-animate 
            id="how-header"
            style={{
              opacity: isVisible['how-header'] ? 1 : 0,
              transform: isVisible['how-header'] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400 tracking-wide">HOW IT WORKS</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight">
              Get Started in{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Setting up NoCtune is incredibly easy. Follow these steps and start enjoying your music in minutes.
            </p>
          </div>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div 
                key={index}
                id={`step-${index}`}
                data-animate
                className="relative group"
                style={{
                  opacity: isVisible[`step-${index}`] ? 1 : 0,
                  transform: isVisible[`step-${index}`] ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease-out ${index * 0.15}s`
                }}
              >
              
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 z-10">
                    <ArrowRight className="w-5 h-5 text-emerald-500/30 group-hover:text-emerald-500/60 transition-colors" />
                  </div>
                )}
 
                <div className={`relative h-full bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20' 
                    : 'border-emerald-500/10 hover:border-emerald-500/30'
                } hover:scale-105`}>
                   
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <span className="text-xl font-black text-black">{item.step}</span>
                    </div>
                  </div>
 
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 mt-4 transition-transform duration-300 group-hover:scale-110`}>
                    <div className="text-black">
                      {item.icon}
                    </div>
                  </div>
 
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
 
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500 ${
                        activeStep === index ? 'w-full' : 'w-0'
                      }`} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          <div 
            className="mt-12 flex justify-center" 
            data-animate 
            id="how-decoration"
            style={{
              opacity: isVisible['how-decoration'] ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s'
            }}
          >
            <div className="flex items-center gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === i 
                      ? 'bg-emerald-500 scale-150' 
                      : 'bg-emerald-500/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-emerald-500/20 overflow-hidden">
             
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
               
              <div 
                className="space-y-6" 
                data-animate 
                id="privacy-content"
                style={{
                  opacity: isVisible['privacy-content'] ? 1 : 0,
                  transform: isVisible['privacy-content'] ? 'translateX(0)' : 'translateX(-30px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-400 tracking-wide">PRIVACY FIRST</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Your Music,
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Your Privacy
                  </span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  NoCtune works completely offline. Your music library never leaves your device. No cloud uploads, no tracking, no accounts. Just pure, private music listening.
                </p>
 
                <div className="space-y-3 pt-2">
                  {privacyFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 group cursor-pointer"
                      style={{
                        opacity: isVisible['privacy-content'] ? 1 : 0,
                        transform: isVisible['privacy-content'] ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.5s ease-out ${index * 0.1 + 0.2}s`
                      }}
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                        <Check className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-0.5 group-hover:text-emerald-400 transition-colors">
                          {feature.title}
                        </div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
 
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl px-5 py-3 backdrop-blur-sm">
                  <Shield className="w-7 h-7 text-emerald-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">100% Privacy Guaranteed</div>
                    <div className="text-xs text-gray-400">Open source and auditable</div>
                  </div>
                </div>
              </div>
 
              <div 
                className="relative" 
                data-animate 
                id="privacy-visual"
                style={{
                  opacity: isVisible['privacy-visual'] ? 1 : 0,
                  transform: isVisible['privacy-visual'] ? 'translateX(0)' : 'translateX(30px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <div className="space-y-6">
                   
                  <div className="relative group">
                    <div className="relative bg-gradient-to-br from-neutral-900 to-black rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                          <HardDrive className="w-7 h-7 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg text-white mb-1">Local Storage</div>
                          <div className="text-sm text-gray-400">All files on your device</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
                          <Check className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>
 
                      <div className="mt-4 flex items-center gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="flex-1 h-1.5 bg-gradient-to-r from-emerald-500/50 to-green-500/50 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
 
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                    <span className="text-sm text-gray-500 font-semibold">VS</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-emerald-500/30 to-transparent" />
                  </div>
 
                  <div className="relative opacity-50">
                    <div className="relative bg-gradient-to-br from-neutral-900 to-black rounded-2xl p-6 border border-red-500/20">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center relative">
                          <svg className="w-7 h-7 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-0.5 bg-red-500 rotate-45" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg text-gray-400 line-through mb-1">Cloud Upload</div>
                          <div className="text-sm text-gray-600">Not used • Not needed</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}