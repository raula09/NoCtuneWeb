import React, { useState, useEffect } from 'react';
import { Music, Play, Heart, Download, Menu, X, Shield, Sparkles, ListMusic, Mic2, ChevronDown } from 'lucide-react';

export default function NoctuneLandingPart1() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[128px] animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[128px] animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[128px] animate-pulse"
             style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
        
        
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.15), transparent 50%)`
             }} />
      </div>

      
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `floatParticle ${3 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.6
                }}
              />
            ))}
          </div>

          
          <div className="relative z-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-[100px] animate-pulse" />
            </div>
            
            <div className="relative flex flex-col items-center gap-8">
              
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      animation: `spin ${20 - i * 5}s linear infinite`,
                      animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  >
                    <div 
                      className="rounded-full border border-emerald-500/20"
                      style={{
                        width: `${200 + i * 50}px`,
                        height: `${200 + i * 50}px`
                      }}
                    />
                  </div>
                ))}
                
                <div className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-xl p-12 rounded-full border border-emerald-500/50 shadow-2xl shadow-emerald-500/50">
                  <Music className="w-32 h-32 text-emerald-400" style={{ animation: 'float 3s ease-in-out infinite' }} />
                </div>
              </div>

              
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-8xl font-black tracking-wider relative">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent opacity-50">
                    NOCTUNE
                  </span>
                  <span className="relative bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                    NOCTUNE
                  </span>
                </h1>
                
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full" />
                
                <p className="text-emerald-400/80 text-sm tracking-[0.5em] uppercase font-light">
                  Your Music, Your Way
                </p>
              </div>

              
              <div className="flex items-center gap-2 mt-8">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-emerald-500 to-green-400 rounded-full"
                    style={{
                      height: '30px',
                      animation: `soundWave 1.2s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes floatParticle {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
              50% { transform: translate(var(--tx, 50px), var(--ty, -50px)) scale(1.5); opacity: 0.8; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(10deg); }
            }
            @keyframes soundWave {
              0%, 100% { height: 30px; opacity: 0.5; }
              50% { height: 60px; opacity: 1; }
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-emerald-500/10 shadow-lg shadow-emerald-500/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-2.5 rounded-xl">
                  <Music className="w-7 h-7 text-black" />
                </div>
              </div>
              <span className="text-3xl font-black tracking-wider bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                NOCTUNE
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'How It Works', 'Download'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative text-gray-400 hover:text-white transition-colors group py-2"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                className="relative group overflow-hidden px-6 py-3 rounded-full font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-black flex items-center gap-2">
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
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-emerald-500/10">
            <div className="px-6 py-6 space-y-4">
              {['Features', 'How It Works', 'Download'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-400 hover:text-white transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <a 
                href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                className="block bg-gradient-to-r from-emerald-500 to-green-500 text-black px-6 py-3 rounded-full font-semibold text-center"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">100% Offline & Private</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                Your Music,
                <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-50" />
                  <span className="relative bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Your Library
                  </span>
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                NoCtune is a <span className="text-emerald-400 font-semibold">fully offline music player</span> that respects your privacy. Upload your MP3 or FLAC files, add lyrics, and enjoy your music collection without internet.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {[
                  'No Internet Required',
                  'MP3 & FLAC Support',
                  'Lyrics Display',
                  'Unlimited Library'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-black flex items-center justify-center gap-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download for Windows
                  </span>
                </a>
                
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('yay -S noctune');
                    const btn = event.target.closest('button');
                    const originalText = btn.innerHTML;
                    btn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied!</span>';
                    setTimeout(() => btn.innerHTML = originalText, 2000);
                  }}
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-colors"
                >
                  <span className="relative z-10 text-white flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Arch Linux
                  </span>
                </button>
              </div>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Free • Open Source • No Account Required
              </p>
            </div>

            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-full blur-[120px] animate-pulse" />
              
              <div className="relative">
                <div className="relative bg-gradient-to-br from-neutral-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/20 shadow-2xl">
                  
                  <div className="relative aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Music className="w-40 h-40 text-emerald-500/30" />
                    </div>
                    
                    
                    <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30">
                      <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                        <Mic2 className="w-3.5 h-3.5" />
                        Lyrics
                      </span>
                    </div>
                  </div>

                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="h-5 bg-gradient-to-r from-emerald-500/40 to-transparent rounded-full w-3/4" />
                      <div className="h-4 bg-neutral-800 rounded-full w-1/2" />
                    </div>

                    
                    <div className="space-y-2">
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>1:23</span>
                        <span>3:45</span>
                      </div>
                    </div>

                    
                    <div className="flex justify-between items-center pt-2">
                      <Heart className="w-7 h-7 text-emerald-500 fill-emerald-500 cursor-pointer hover:scale-110 transition-transform" />
                      <div className="flex items-center gap-6">
                        <button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 6h2v12H6zm10 0h2v12h-2z"/>
                          </svg>
                        </button>
                        <button className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-500/50 hover:scale-105 transition-transform">
                          <Play className="w-8 h-8 fill-black text-black ml-1" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                          </svg>
                        </button>
                      </div>
                      <ListMusic className="w-7 h-7 text-gray-600 cursor-pointer hover:text-emerald-500 transition-colors" />
                    </div>
                  </div>
                </div>

                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                  <Music className="w-10 h-10 text-emerald-400" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500/10 rounded-full border border-green-500/20 backdrop-blur-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </section>
    </div>
  );
}