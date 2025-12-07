import React, { useState, useEffect } from 'react';
import { Download, Zap, Shield, Music, Github, ExternalLink, Heart, Star, ArrowRight } from 'lucide-react';

export default function NoctuneLandingPart4() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [stars, setStars] = useState([]);
  const [soundWaves, setSoundWaves] = useState(Array(30).fill(0).map(() => Math.random() * 100));

  useEffect(() => {
    setShowCount(true);
    const interval = setInterval(() => {
      setDownloadCount((prev) => {
        if (prev < 1234) return prev + 37;
        return 1234;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const newStars = Array(15).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSoundWaves(prev => prev.map(() => Math.random() * 100));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { label: "Free", sublabel: "Forever", icon: <Zap className="w-6 h-6" />, gradient: "from-yellow-500 to-orange-500" },
    { label: "Open Source", sublabel: "On GitHub", icon: <Github className="w-6 h-6" />, gradient: "from-purple-500 to-pink-500" },
    { label: "No Ads", sublabel: "Ever", icon: <Shield className="w-6 h-6" />, gradient: "from-green-500 to-emerald-500" }
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
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <section id="download" className="relative py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-neutral-900 rounded-2xl p-8 lg:p-12 border border-white/20 overflow-hidden hover:border-white/30 transition-all group">
            <div className="absolute inset-0 opacity-5 flex items-center justify-center gap-0.5">
              {soundWaves.map((height, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full transition-all duration-150"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all">
                  <Star className="w-4 h-4 text-white animate-pulse" />
                  <span className="text-sm font-medium text-white tracking-wide">
                    {showCount && downloadCount > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <span className="tabular-nums">{downloadCount.toLocaleString()}</span>
                        <span>+ DOWNLOADS</span>
                      </span>
                    )}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Ready to Take Control of
                  <br />
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Your Music Library?
                  </span>
                </h2>

                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Download Noctune now and enjoy your music collection offline, privately, and without limits.
                </p>
              </div>

              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/raula09/NoctuneMusicPlayer/releases/download/v1.3.0/MusicPlayerApp-windows.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative px-8 py-4 rounded-lg font-medium text-lg bg-white text-black hover:bg-gray-200 transition-all hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                      Download for Windows
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
                    className="group/btn px-8 py-4 rounded-lg font-medium text-lg border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-white hover:scale-105"
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
                  <Zap className="w-4 h-4 text-white animate-pulse" />
                  <span>Version 1.3.0</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full animate-pulse" />
                  <span>Windows & Arch Linux</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group/benefit relative"
                  >
                    <div className="relative bg-neutral-800 rounded-lg p-5 border border-white/10 hover:border-white/20 transition-all hover:scale-105">
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover/benefit:opacity-10 rounded-lg transition-opacity blur-xl`} />
                      
                      <div className="relative mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 group-hover/benefit:scale-110 transition-transform">
                        <div className="text-white">
                          {benefit.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative text-2xl font-bold text-white mb-1">
                        {benefit.label}
                      </div>
                      <div className="relative text-sm text-gray-400">{benefit.sublabel}</div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-lg">
                        <div className={`h-full bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover/benefit:opacity-100 transition-opacity`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                <Shield className="w-4 h-4 text-white animate-pulse" />
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
                  <div className="absolute inset-0 bg-white rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-white p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Music className="w-6 h-6 text-black" />
                  </div>
                </div>
                <span className="text-2xl font-bold tracking-wider text-white group-hover:text-gray-200 transition-colors">
                  NOCTUNE
                </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Your music, your library, your privacy. The offline music player that respects your freedom.
              </p>
              
              <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-3 py-1.5 hover:border-white/40 transition-all group">
                <Shield className="w-3 h-3 text-white group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-white">100% OFFLINE</span>
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
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
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
                <span>&copy; 2024 Noctune.</span>
                <span className="text-gray-600">•</span>
                <span>Open source music player</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> for music lovers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social w-9 h-9 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Github className="w-4 h-4 text-gray-400 group-hover/social:text-white transition-colors" />
                </a>
                
                <a 
                  href="https://github.com/raula09/NoctuneMusicPlayer/stargazers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/star flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
                >
                  <Star className="w-4 h-4 text-gray-400 group-hover/star:text-yellow-400 group-hover/star:fill-yellow-400 transition-all" />
                  <span className="text-sm text-gray-400 group-hover/star:text-white transition-colors font-medium">Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Animated gradient line */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  );
}