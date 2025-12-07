import React, { useState, useEffect } from 'react';
import { Music, Play, Heart, Download, Menu, X, Shield, Sparkles, ListMusic, Mic2, ChevronDown, Zap, Globe, Volume2 } from 'lucide-react';

export default function NoctuneLandingPart1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [musicBars, setMusicBars] = useState(Array(40).fill(0).map(() => Math.random() * 100));
  const [particles, setParticles] = useState([]);

  const rotatingWords = ['Freedom', 'Privacy', 'Control', 'Quality'];

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);
 
  useEffect(() => {
    const word = rotatingWords[currentWord];
    setIsTyping(true);
     
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= word.length) {
        setDisplayedText(word.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
         
        setTimeout(() => {
          let deleteIndex = word.length;
          const deletingInterval = setInterval(() => {
            if (deleteIndex >= 0) {
              setDisplayedText(word.slice(0, deleteIndex));
              deleteIndex--;
            } else {
              clearInterval(deletingInterval);
              setIsTyping(false);
            }
          }, 50);
        }, 1500);  
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [currentWord]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMusicBars(prev => prev.map(() => Math.random() * 100));
    }, 150);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const newParticles = Array(25).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 2,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.4 + 0.2
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: (p.y + p.speed) % 100,
        x: p.x + Math.sin(Date.now() / 1000 + p.id) * 0.1
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              transition: 'all 0.05s linear'
            }}
          />
        ))}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative bg-white p-12 rounded-full animate-bounce">
                <Music className="w-24 h-24 text-black" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-6xl font-bold tracking-wider text-white animate-pulse">
                NOCTUNE
              </h1>
              <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">
                Your Music Universe
              </p>
            </div>
          </div>
        </div>
      )}
 
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="bg-white p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                <Music className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wide text-white">
                  NOCTUNE
                </span>
                <span className="text-xs text-gray-500 tracking-wider uppercase">Music Player</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'How It Works', 'Download'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-white transition-colors py-2 font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                className="px-6 py-2.5 rounded-lg font-medium bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </span>
              </a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-6 space-y-4">
              {['Features', 'How It Works', 'Download'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-white transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                className="block bg-white text-black px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-200 transition-colors"
              >
                Download Now
              </a>
            </div>
          </div>
        )}
      </nav>
      <section className="relative pt-32 pb-20 px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all">
                <Shield className="w-4 h-4 text-white animate-pulse" />
                <span className="text-sm font-medium text-white tracking-wide">100% OFFLINE & PRIVATE</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Your Music,
                <br />
                <span className="text-white inline-flex items-baseline">
                  Your {displayedText}
                  {isTyping && <span className="inline-block w-0.5 h-12 lg:h-14 bg-white ml-1 animate-pulse" />}
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Noctune is a <span className="text-white font-medium">fully offline music player</span> that respects your privacy. Upload MP3 or FLAC, add lyrics, and enjoy your collection without internet.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-xl pt-2">
                {[
                  { text: 'No Internet Required', icon: <Globe className="w-5 h-5" /> },
                  { text: 'MP3 & FLAC Support', icon: <Volume2 className="w-5 h-5" /> },
                  { text: 'Lyrics Display', icon: <Mic2 className="w-5 h-5" /> },
                  { text: 'Unlimited Library', icon: <Zap className="w-5 h-5" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all hover:scale-105 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                  className="px-8 py-4 rounded-lg font-medium text-lg bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download for Windows
                  </span>
                </a>
                
                <button
                  onClick={(e) => {
                    navigator.clipboard.writeText('yay -S noctune');
                    const btn = e.currentTarget;
                    const originalText = btn.innerHTML;
                    btn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied!</span>';
                    setTimeout(() => btn.innerHTML = originalText, 2000);
                  }}
                  className="px-8 py-4 rounded-lg font-medium text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-105 transition-all text-white"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Arch Linux
                  </span>
                </button>
              </div>

              <p className="text-sm text-gray-500 flex items-center gap-2 pt-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                Free • Open Source • No Account Required
              </p>
            </div>
 
              <div className="relative">
              <div className="relative bg-neutral-900 rounded-2xl p-6 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                
                <div className="relative aspect-square bg-neutral-800 rounded-xl overflow-hidden mb-6 group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="w-32 h-32 text-white/20 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-center gap-1 p-4">
                    {musicBars.slice(0, 20).map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white/30 rounded-t transition-all duration-150"
                        style={{ height: `${height * 0.4}%` }}
                      />
                    ))}
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                    <span className="text-white text-xs font-medium flex items-center gap-2">
                      <Mic2 className="w-3.5 h-3.5 animate-pulse" />
                      LYRICS
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-6 bg-white/80 rounded w-4/5 animate-pulse" />
                    <div className="h-4 bg-white/30 rounded w-2/3" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-white to-gray-300 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse" />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 font-medium">
                      <span>1:23</span>
                      <span>3:45</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <Heart className="w-6 h-6 text-white fill-white cursor-pointer hover:opacity-70 hover:scale-110 transition-all" />
                    <div className="flex items-center gap-6">
                      <button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:scale-110 transition-all">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 6h2v12H6zm10 0h2v12h-2z"/>
                        </svg>
                      </button>
                      <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all shadow-lg shadow-white/20">
                        <Play className="w-7 h-7 fill-black text-black ml-1" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:scale-110 transition-all">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                        </svg>
                      </button>
                    </div>
                    <ListMusic className="w-6 h-6 text-gray-600 cursor-pointer hover:text-white hover:scale-110 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
        </div>
      </section>
    </div>
  );
}