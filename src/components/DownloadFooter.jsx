import React, { useState, useEffect } from 'react';
import { Download, Zap, Shield, Music, Github, ExternalLink, Heart, Star, ArrowRight } from 'lucide-react';

export default function NoctuneLandingPart4() {
  const [isVisible, setIsVisible] = useState({});
  const [downloadCount, setDownloadCount] = useState(0);

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
    if (isVisible['download-cta']) {
      const interval = setInterval(() => {
        setDownloadCount((prev) => {
          if (prev < 1234) return prev + 37;
          return 1234;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const benefits = [
    { label: "Free", sublabel: "Forever" },
    { label: "Open Source", sublabel: "On GitHub" },
    { label: "No Ads", sublabel: "Ever" }
  ];

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Download", href: "#download" }
    ],
    Resources: [
      { name: "GitHub", href: "https://github.com/raula09/NoctuneMusicPlayer" },
      { name: "Releases", href: "https://github.com/raula09/NoctuneMusicPlayer/releases" },
      { name: "Report Issue", href: "https://github.com/raula09/NoctuneMusicPlayer/issues" }
    ],
    Support: [
      { name: "Documentation", href: "https://github.com/raula09/NoctuneMusicPlayer#readme" },
      { name: "Community", href: "https://github.com/raula09/NoctuneMusicPlayer/discussions" },
      { name: "License", href: "https://github.com/raula09/NoctuneMusicPlayer/blob/main/LICENSE" }
    ]
  };

  return (
    <div className="bg-black text-white relative overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-40" />
      </div>
  
      <section id="download" className="relative py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            id="download-cta"
            data-animate
            className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 overflow-hidden"
            style={{
              opacity: isVisible['download-cta'] ? 1 : 0,
              transform: isVisible['download-cta'] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.6s ease-out'
            }}
          > 
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative text-center space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {downloadCount > 0 && `${downloadCount.toLocaleString()}+ DOWNLOADS`}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Ready to Take Control of
                  <br />
                  <span className="bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent">
                    Your Music Library?
                  </span>
                </h2>

                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Download NoCtune now and enjoy your music collection offline, privately, and without limits.
                </p>
              </div> 
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 bg-gradient-to-r from-black to-white hover:shadow-lg hover:shadow-black/50"
                  >
                    <span className="relative z-10 text-black flex items-center justify-center gap-2">
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                      Download for Windows
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
 
                  <button
                    onClick={(e) => {
                      navigator.clipboard.writeText('yay -S noctune');
                      const btn = e.currentTarget;
                      const originalText = btn.innerHTML;
                      btn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Copied to Clipboard!</span>';
                      setTimeout(() => btn.innerHTML = originalText, 2000);
                    }}
                    className="group px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/50 hover:border-white transition-all hover:scale-105 hover:bg-white/5 text-white"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Install on Arch Linux
                    </span>
                  </button>
                </div>
 
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-white" />
                  <span>Version 1.3.0</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span>Windows & Arch Linux</span>
                </div>
              </div>
  
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group relative"
                    style={{
                      opacity: isVisible['download-cta'] ? 1 : 0,
                      transform: isVisible['download-cta'] ? 'scale(1)' : 'scale(0.9)',
                      transition: `all 0.5s ease-out ${index * 0.1}s`
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all hover:scale-105">
                      <div className="text-2xl font-black bg-gradient-to-r from-black to-white bg-clip-text text-transparent mb-1">
                        {benefit.label}
                      </div>
                      <div className="text-sm text-gray-400">{benefit.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                <Shield className="w-4 h-4 text-white" />
                <span>No credit card • No sign-up • No tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <footer className="relative py-16 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-black to-white p-2.5 rounded-xl">
                    <Music className="w-6 h-6 text-black" />
                  </div>
                </div>
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
                  NOCTUNE
                </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Your music, your library, your privacy. The offline music player that respects your freedom.
              </p>
              
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-3 py-1.5 backdrop-blur-sm">
                <Shield className="w-3 h-3 text-white" />
                <span className="text-xs font-semibold text-white">100% OFFLINE</span>
              </div>
            </div>
 
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold mb-4 text-white text-sm tracking-wider">{category.toUpperCase()}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1.5 group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute inset-x-0 -bottom-0.5 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </span>
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>&copy; 2024 NoCtune.</span>
                <span className="text-gray-600">•</span>
                <span>Open source music player</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for music lovers
                </span>
              </div>
 
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer/stargazers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
                >
                  <Star className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-semibold">Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </footer>
    </div>
  );
}