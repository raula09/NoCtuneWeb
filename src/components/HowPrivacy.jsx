import React, { useState, useEffect } from 'react';
import { Shield, HardDrive, Lock, Check, Download, Upload, FileAudio, Play, Sparkles, ArrowRight } from 'lucide-react';

export default function NoctuneLandingPart3() {
  const [activeStep, setActiveStep] = useState(0);

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
      description: "Get Noctune in seconds. No account required.",
      icon: <Download className="w-6 h-6" />,
    },
    { 
      step: "2", 
      title: "Upload Your Music", 
      description: "Drag and drop MP3 or FLAC files into the app.",
      icon: <Upload className="w-6 h-6" />,
    },
    { 
      step: "3", 
      title: "Add Lyrics (Optional)", 
      description: "Import lyrics files for synchronized display.",
      icon: <FileAudio className="w-6 h-6" />,
    },
    { 
      step: "4", 
      title: "Enjoy Offline", 
      description: "Listen anytime, anywhere. No internet needed.",
      icon: <Play className="w-6 h-6" />,
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
      <section id="how-it-works" className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white tracking-wide">HOW IT WORKS</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Get Started in{' '}
              <span className="text-white">
                4 Simple Steps
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Setting up Noctune is incredibly easy. Follow these steps and start enjoying your music in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 z-10">
                    <ArrowRight className="w-5 h-5 text-gray-600" />
                  </div>
                )}

                {/* Step card */}
                <div className={`relative h-full bg-neutral-900 rounded-xl p-6 border transition-all ${
                  activeStep === index 
                    ? 'border-white/30' 
                    : 'border-white/10 hover:border-white/20'
                }`}>
                  <div className="absolute -top-3 -left-3 z-10">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                      <span className="text-lg font-bold text-black">{item.step}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4 mt-4">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl overflow-hidden bg-neutral-800">
                    <div 
                      className={`h-full bg-white transition-all duration-500 ${
                        activeStep === index ? 'w-full' : 'w-0'
                      }`} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeStep === i 
                      ? 'bg-white w-8' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-neutral-900 rounded-2xl p-8 lg:p-12 border border-white/10 overflow-hidden">
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white tracking-wide">PRIVACY FIRST</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Your Music,
                  <br />
                  <span className="text-white">
                    Your Privacy
                  </span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Noctune works completely offline. Your music library never leaves your device. No cloud uploads, no tracking, no accounts. Just pure, private music listening.
                </p>

                <div className="space-y-3 pt-2">
                  {privacyFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white mb-0.5">
                          {feature.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-3 border border-white/20 rounded-lg px-5 py-3">
                  <Shield className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-sm font-medium text-white">100% Privacy Guaranteed</div>
                    <div className="text-xs text-gray-400">Open source and auditable</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="relative bg-neutral-800 rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center">
                          <HardDrive className="w-7 h-7 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg text-white mb-1">Local Storage</div>
                          <div className="text-sm text-gray-400">All files on your device</div>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 border border-white flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="flex-1 h-1.5 bg-white/30 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/20" />
                    <span className="text-sm text-gray-500 font-medium">VS</span>
                    <div className="flex-1 h-px bg-white/20" />
                  </div>

                  <div className="relative opacity-50">
                    <div className="relative bg-neutral-800 rounded-xl p-6 border border-red-500/20">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-neutral-700 flex items-center justify-center relative">
                          <svg className="w-7 h-7 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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