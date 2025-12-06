import React, { useState, useEffect } from 'react';
import { Download, Zap, Shield, Music, Github, ExternalLink, Heart, Sparkles, Star, ArrowRight } from 'lucide-react';

export default function NoctuneLandingPart4() {
  const [isVisible, setIsVisible] = useState({});
  const [downloadCount, setDownloadCount] = useState(0);

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
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '3s' }} />
      </div>

      {/* Download CTA Section */}
      <section id="download" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div 
            id="download-cta"
            data-animate
            className="relative bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl rounded-[3rem] p-12 lg:p-16 border border-emerald-500/30 overflow-hidden shadow-2xl"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" 
                   style={{ animationDuration: '8s' }} />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse" 
                   style={{ animationDuration: '10s', animationDelay: '2s' }} />
              
              {/* Floating icons */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `floatRandom ${8 + i * 2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  <Music className="w-4 h-4 text-emerald-500/20" />
                </div>
              ))}
            </div>

            <div className="relative text-center space-y-10">
              {/* Header */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                    {downloadCount > 0 && `${downloadCount.toLocaleString()}+ DOWNLOADS`}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  Ready to Take Control of
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-400 to-green-500 opacity-50" />
                    <span className="relative bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                      Your Music Library?
                    </span>
                  </span>
                </h2>

                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Download NoCtune now and enjoy your music collection offline, privately, and without limits.
                </p>
              </div>

              {/* Download buttons */}
              <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Windows download */}
                  <a 
                    href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-300 blur-xl" />
                    </div>
                    <span className="relative z-10 text-black flex items-center justify-center gap-3">
                      <Download className="w-6 h-6 group-hover:animate-bounce" />
                      Download for Windows
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>

                  {/* Arch Linux */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('yay -S noctune');
                      const btn = event.target.closest('button');
                      const originalText = btn.innerHTML;
                      btn.innerHTML = '<span class="flex items-center justify-center gap-3"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="font-bold text-lg">Copied to Clipboard!</span></span>';
                      setTimeout(() => btn.innerHTML = originalText, 2000);
                    }}
                    className="group relative overflow-hidden px-10 py-5 rounded-2xl font-bold text-lg border-2 border-emerald-500/50 hover:border-emerald-500 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 group-hover:from-emerald-500/20 group-hover:to-green-500/20 transition-all" />
                    <span className="relative z-10 text-white flex items-center justify-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Install on Arch Linux
                    </span>
                  </button>
                </div>

                {/* Version info */}
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Version 1.3.0</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span>Windows & Arch Linux</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group relative"
                    style={{
                      animation: isVisible['download-cta'] ? `scaleIn 0.5s ease-out ${index * 0.1}s backwards` : 'none'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/10 group-hover:border-emerald-500/30 transition-all group-hover:scale-105">
                      <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1">
                        {benefit.label}
                      </div>
                      <div className="text-sm text-gray-400">{benefit.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fine print */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 pt-4">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>No credit card • No sign-up • No tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 lg:px-8 border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-2.5 rounded-xl">
                    <Music className="w-7 h-7 text-black" />
                  </div>
                </div>
                <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  NOCTUNE
                </span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Your music, your library, your privacy. The offline music player that respects your freedom.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">100% OFFLINE</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold mb-6 text-white text-sm tracking-wider">{category.toUpperCase()}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute inset-x-0 -bottom-1 h-px bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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

          {/* Bottom bar */}
          <div className="pt-8 border-t border-emerald-500/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>&copy; 2024 NoCtune.</span>
                <span className="text-gray-600">•</span>
                <span>Open source music player</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> for music lovers
                </span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-emerald-500/10 hover:border-emerald-500/30 flex items-center justify-center transition-all hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 rounded-xl transition-all" />
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors relative z-10" />
                </a>
                
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer/stargazers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-emerald-500/10 hover:border-emerald-500/30 transition-all hover:scale-105"
                >
                  <Star className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-semibold">Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative gradient line */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </div>
      </footer>

      <style jsx>{`
        @keyframes floatRandom {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translate(var(--tx, 20px), var(--ty, -20px)) rotate(180deg);
            opacity: 0.3;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}