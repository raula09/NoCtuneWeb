import React, { useState, useEffect } from 'react';
import { Music, Play, Heart, Download, Menu, X, Shield, Sparkles, ListMusic, Mic2, ChevronDown, Zap, Globe, Volume2 } from 'lucide-react';

export default function NoctuneLandingPart1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const rotatingWords = ['Freedom', 'Privacy', 'Control', 'Quality'];

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/15 rounded-full blur-3xl opacity-50" />
         
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-emerald-400/40"
              style={{
                width: '2px',
                height: '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
 
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/30 via-transparent to-transparent" />
          
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 rounded-full blur-3xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-br from-emerald-500/30 to-green-500/30 backdrop-blur-xl p-16 rounded-full border-2 border-emerald-500/50">
                <Music className="w-32 h-32 text-emerald-300 animate-float" />
              </div>
            </div>

            <div className="text-center space-y-4">
              <h1 className="text-7xl font-black tracking-wider bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">
                NOCTUNE
              </h1>
              <p className="text-emerald-400 text-sm tracking-widest uppercase font-semibold">
                Your Music Universe
              </p>
            </div>
          </div>
        </div>
      )}
 
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-emerald-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-emerald-400 to-green-400 p-3 rounded-xl group-hover:scale-105 transition-transform">
                  <Music className="w-7 h-7 text-black" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-wider bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                  NOCTUNE
                </span>
                <span className="text-xs text-emerald-400/70 tracking-wider uppercase">Music Player</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'How It Works', 'Download'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative text-gray-300 hover:text-white transition-colors group py-2 font-semibold"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </a>
              ))}
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                className="relative overflow-hidden px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 text-black hover:shadow-lg hover:shadow-emerald-500/50 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
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
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-emerald-500/20">
            <div className="px-6 py-6 space-y-4">
              {['Features', 'How It Works', 'Download'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-300 hover:text-white transition-colors py-2 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                className="block bg-gradient-to-r from-emerald-400 to-green-400 text-black px-6 py-3 rounded-xl font-bold text-center"
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
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-xl">
                <Shield className="w-4 h-4 text-emerald-300" />
                <span className="text-sm font-bold text-emerald-300 tracking-wide">100% OFFLINE & PRIVATE</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                Your Music,
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent inline-flex items-baseline">
                  Your {displayedText}
                  {isTyping && <span className="inline-block w-0.5 h-12 lg:h-14 bg-emerald-400 ml-1 animate-pulse" />}
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                NoCtune is a <span className="text-emerald-300 font-bold">fully offline music player</span> that respects your privacy. Upload MP3 or FLAC, add lyrics, and enjoy your collection without internet.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-xl pt-2">
                {[
                  { text: 'No Internet Required', icon: <Globe className="w-5 h-5" /> },
                  { text: 'MP3 & FLAC Support', icon: <Volume2 className="w-5 h-5" /> },
                  { text: 'Lyrics Display', icon: <Mic2 className="w-5 h-5" /> },
                  { text: 'Unlimited Library', icon: <Zap className="w-5 h-5" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer p-3 rounded-xl hover:bg-emerald-500/5 transition-colors">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                  className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-400 to-green-400 text-black hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
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
                  className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-emerald-400/50 hover:border-emerald-400 hover:bg-emerald-500/5 transition-all text-white"
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
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Free • Open Source • No Account Required
              </p>
            </div>
 
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/20 hover:border-emerald-500/30 transition-all">
                
                <div className="relative aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden mb-6 border border-emerald-500/10">
                  <div className="absolute inset-0 bg-gradient-radial from-emerald-500/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="w-32 h-32 text-emerald-500/30" />
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-emerald-400/30">
                    <span className="text-emerald-300 text-xs font-bold flex items-center gap-2">
                      <Mic2 className="w-4 h-4" />
                      LYRICS
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-6 bg-gradient-to-r from-emerald-400/40 to-transparent rounded-xl w-4/5" />
                    <div className="h-4 bg-neutral-800/50 rounded-xl w-2/3" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 font-semibold">
                      <span>1:23</span>
                      <span>3:45</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <Heart className="w-7 h-7 text-emerald-400 fill-emerald-400 cursor-pointer hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-6">
                      <button className="w-10 h-10 rounded-full bg-neutral-800/50 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 6h2v12H6zm10 0h2v12h-2z"/>
                        </svg>
                      </button>
                      <button className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 flex items-center justify-center shadow-lg shadow-emerald-500/50 hover:scale-105 transition-transform">
                        <Play className="w-8 h-8 fill-black text-black ml-1" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-neutral-800/50 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                        </svg>
                      </button>
                    </div>
                    <ListMusic className="w-7 h-7 text-gray-600 cursor-pointer hover:text-emerald-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}