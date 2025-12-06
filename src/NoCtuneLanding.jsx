import React, { useState, useEffect } from 'react';
import { Music, Play, Heart, Radio, TrendingUp, Users, Sparkles, Download, ChevronRight, Menu, X, FileAudio, Mic2, Maximize2, ListMusic, HardDrive, Zap, Shield } from 'lucide-react';

export default function NoCtuneLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "100% Offline",
      description: "No internet needed. Your music stays on your device, always accessible."
    },
    {
      icon: <FileAudio className="w-8 h-8" />,
      title: "MP3 & FLAC Support",
      description: "Upload your music library in high-quality formats. Supports MP3 and FLAC."
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Lyrics Display",
      description: "Add lyrics files and sing along with synchronized text display."
    },
    {
      icon: <Maximize2 className="w-8 h-8" />,
      title: "Fullscreen Mode",
      description: "Immersive fullscreen experience for focused listening sessions."
    },
    {
      icon: <ListMusic className="w-8 h-8" />,
      title: "Smart Playlists",
      description: "Create unlimited playlists and organize your music your way."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Like & Favorite",
      description: "Mark your favorite tracks and build your personal collection."
    }
  ];

  const stats = [
    { number: "100%", label: "Offline" },
    { number: "0MB", label: "Cloud Storage" },
    { number: "Unlimited", label: "Library Size" },
    { number: "Privacy", label: "First" }
  ];

  const howItWorks = [
    { step: "1", title: "Download & Install", description: "Get NoCtune in seconds. No account required." },
    { step: "2", title: "Upload Your Music", description: "Drag and drop MP3 or FLAC files into the app." },
    { step: "3", title: "Add Lyrics (Optional)", description: "Import lyrics files for synchronized display." },
    { step: "4", title: "Enjoy Offline", description: "Listen anytime, anywhere. No internet needed." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-zinc-900 to-black text-white overflow-hidden">
     
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fadeOut overflow-hidden">
     
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-500 rounded-full animate-particle1" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-particle2" />
            <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-emerald-600 rounded-full animate-particle3" />
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-emerald-500 rounded-full animate-particle4" />
            <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-particle5" />
            <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-emerald-600 rounded-full animate-particle6" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl animate-pulseGlow" />
          </div>

          <div className="relative z-10">
         
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <div className="w-48 h-48 rounded-full border-2 border-emerald-500/30 border-t-emerald-500" />
            </div>
            
            <div className="relative flex flex-col items-center gap-8">
              <div className="relative group">
               
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity animate-pulseRing" />
                
                <div className="relative bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/50 animate-scaleIn">
                  <Music className="w-24 h-24 text-emerald-400 animate-float" />
                </div>
                
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-500 animate-slideIn" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-500 animate-slideIn" style={{animationDelay: '0.1s'}} />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-500 animate-slideIn" style={{animationDelay: '0.2s'}} />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-500 animate-slideIn" style={{animationDelay: '0.3s'}} />
              </div>

              <div className="flex flex-col items-center gap-4">
                <h1 className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 tracking-wider animate-slideUp">
                  NOCTUNE
                </h1>
                
                <div className="relative w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-shimmer" />
                </div>
                
                <p className="text-emerald-400/60 text-sm tracking-[0.3em] uppercase animate-fadeInUp font-light">
                  Your Music, Your Way
                </p>
              </div>

              <div className="flex items-center gap-1 mt-4 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-emerald-500 rounded-full animate-soundWave"
                    style={{
                      height: '20px',
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeOut {
          0%, 85% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        @keyframes slideIn {
          0% { transform: translate(-10px, -10px); opacity: 0; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes soundWave {
          0%, 100% { height: 20px; }
          50% { height: 40px; }
        }
        @keyframes particle1 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(100px, -100px); opacity: 1; }
        }
        @keyframes particle2 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-80px, 120px); opacity: 1; }
        }
        @keyframes particle3 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(120px, 80px); opacity: 1; }
        }
        @keyframes particle4 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-100px, -80px); opacity: 1; }
        }
        @keyframes particle5 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(90px, -120px); opacity: 1; }
        }
        @keyframes particle6 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-110px, 90px); opacity: 1; }
        }

        .animate-fadeOut {
          animation: fadeOut 2s ease-in-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.3s backwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.5s backwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-pulseGlow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .animate-pulseRing {
          animation: pulseRing 2s ease-in-out infinite;
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out backwards;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .animate-soundWave {
          animation: soundWave 1s ease-in-out infinite;
        }
        .animate-particle1 { animation: particle1 2s ease-in-out infinite; }
        .animate-particle2 { animation: particle2 2.5s ease-in-out infinite; }
        .animate-particle3 { animation: particle3 2.2s ease-in-out infinite; }
        .animate-particle4 { animation: particle4 2.8s ease-in-out infinite; }
        .animate-particle5 { animation: particle5 2.3s ease-in-out infinite; }
        .animate-particle6 { animation: particle6 2.6s ease-in-out infinite; }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-lg shadow-lg shadow-emerald-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-500 p-2 rounded-lg shadow-lg shadow-emerald-500/50">
                <Music className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-wider">
                NOCTUNE
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-emerald-400 transition-colors text-gray-300">Features</a>
              <a href="#how-it-works" className="hover:text-emerald-400 transition-colors text-gray-300">How It Works</a>
              <a href="#download" className="hover:text-emerald-400 transition-colors text-gray-300">Download</a>
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-black px-6 py-2 rounded-full hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all font-semibold inline-block"
              >
                Download Now
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block hover:text-emerald-400 transition-colors text-gray-300">Features</a>
              <a href="#how-it-works" className="block hover:text-emerald-400 transition-colors text-gray-300">How It Works</a>
              <a href="#download" className="block hover:text-emerald-400 transition-colors text-gray-300">Download</a>
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 text-black px-6 py-2 rounded-full font-semibold inline-block text-center"
              >
                Download Now
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30">
                <Shield className="w-4 h-4" />
                100% Offline & Private
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Your Music,
                <br />
                <span className="text-emerald-400">
                  Your Library
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                NoCtune is a <span className="text-emerald-400 font-semibold">fully offline music player</span> that respects your privacy. Upload your MP3 or FLAC files, add lyrics, and enjoy your music collection without internet.
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-xl">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">No Internet Required</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">MP3 & FLAC Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">Lyrics Display</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm">Unlimited Library</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-emerald-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download for Windows
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('yay -S noctune');
                      const btn = event.target.closest('button');
                      const originalText = btn.innerHTML;
                      btn.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied!</span>';
                      setTimeout(() => btn.innerHTML = originalText, 2000);
                    }}
                    className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Install on Arch Linux
                  </button>
                </div>
                <a 
                  href="#features"
                  className="bg-neutral-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-700 transition-all border border-neutral-700 flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
              
              <p className="text-sm text-gray-500">Free • Open Source • No Account Required</p>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 rounded-3xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                  <div className="bg-black rounded-2xl overflow-hidden">
                 
                    <div className="aspect-square bg-gradient-to-br from-neutral-800 via-neutral-900 to-black relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <Music className="w-32 h-32 text-emerald-500/40" />
                          <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl"></div>
                        </div>
                      </div>
                    
                      <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-500/30">
                        <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                          <Mic2 className="w-3 h-3" />
                          Lyrics
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4 bg-gradient-to-b from-neutral-900 to-black">
                      <div className="space-y-2">
                        <div className="h-4 bg-gradient-to-r from-emerald-500/30 to-transparent rounded-full w-3/4" />
                        <div className="h-3 bg-neutral-700 rounded-full w-1/2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs text-neutral-600">
                          <span>1:23</span>
                          <span>3:45</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500" />
                        <div className="flex items-center space-x-6">
                          <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 6h2v12H6zm10 0h2v12h-2z"/>
                            </svg>
                          </div>
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                            <Play className="w-7 h-7 fill-black text-black ml-1" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                            </svg>
                          </div>
                        </div>
                        <ListMusic className="w-6 h-6 text-neutral-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 transition-all group-hover:scale-105 shadow-lg">
                  <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30">
              Features
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Everything You Need,<br />
              <span className="text-emerald-400">Nothing You Don't</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              NoCtune is designed to be simple, powerful, and completely private
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                  activeFeature === index 
                    ? 'border-emerald-500 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-xl shadow-emerald-500/20' 
                    : 'border-neutral-700/50 hover:border-emerald-500/30'
                }`}
              >
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <div className="text-black">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30">
              How It Works
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Get Started in <span className="text-emerald-400">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 rounded-2xl p-6 border border-emerald-500/10 hover:border-emerald-500/30 transition-all hover:scale-105">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-emerald-500/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-3xl p-12 border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30">
                  <Shield className="w-4 h-4" />
                  Privacy First
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Your Music,<br />
                  <span className="text-emerald-400">Your Privacy</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  NoCtune works completely offline. Your music library never leaves your device. No cloud uploads, no tracking, no accounts. Just pure, private music listening.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">No Internet Connection</div>
                      <div className="text-gray-400 text-sm">Works offline, no data sent anywhere</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">No Account Required</div>
                      <div className="text-gray-400 text-sm">Download and start using immediately</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Local Storage Only</div>
                      <div className="text-gray-400 text-sm">All data stays on your computer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-neutral-900 to-black rounded-2xl p-8 border border-emerald-500/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <HardDrive className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Local Storage</div>
                        <div className="text-gray-400 text-sm">All files on your device</div>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
                    <div className="flex items-center gap-4 opacity-50">
                      <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center relative">
                        <svg className="w-8 h-8 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-lg line-through">Cloud Upload</div>
                        <div className="text-gray-400 text-sm">Not used • Not needed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm rounded-3xl p-12 border border-emerald-500/20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent animate-pulse" />
            <div className="relative space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Ready to Take Control of<br />
                  <span className="text-emerald-400">Your Music Library?</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Download NoCtune now and enjoy your music collection offline, privately, and without limits.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black px-10 py-4 rounded-full text-lg font-semibold hover:from-emerald-400 hover:to-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all inline-flex items-center justify-center shadow-lg shadow-emerald-500/30"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download for Windows
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('yay -S noctune');
                      const btn = event.target.closest('button');
                      const originalText = btn.innerHTML;
                      btn.innerHTML = '<span class="flex items-center justify-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied!</span>';
                      setTimeout(() => btn.innerHTML = originalText, 2000);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center shadow-lg shadow-blue-500/30"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Install on Arch Linux
                  </button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Version 1.3.0 • Windows & Arch Linux</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">Free</div>
                  <div className="text-sm text-gray-400">Forever</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">Open Source</div>
                  <div className="text-sm text-gray-400">On GitHub</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">No Ads</div>
                  <div className="text-sm text-gray-400">Ever</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">No credit card • No sign-up • No tracking</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-500 p-2 rounded-lg shadow-lg shadow-emerald-500/50">
                  <Music className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold text-emerald-400 tracking-wider">NOCTUNE</span>
              </div>
              <p className="text-gray-400">Your music, your library, your privacy.</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>100% Offline Music Player</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
                <li><a href="#download" className="hover:text-emerald-400 transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/raula09/NoctuneMusicPlayer" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
                <li><a href="https://github.com/raula09/NoctuneMusicPlayer/releases" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Releases</a></li>
                <li><a href="https://github.com/raula09/NoctuneMusicPlayer/issues" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Report Issue</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://github.com/raula09/NoctuneMusicPlayer#readme" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="https://github.com/raula09/NoctuneMusicPlayer/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Community</a></li>
                <li><a href="https://github.com/raula09/NoctuneMusicPlayer/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2024 NoCtune. Open source music player.</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/raula09/NoctuneMusicPlayer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}