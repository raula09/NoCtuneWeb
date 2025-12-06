import React from 'react';
import { Download, Play, Music, Heart, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">
                🎵 Now Available
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Your Music,
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Your Vibe
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Experience music like never before with NoCtune. Stream millions of songs, create perfect playlists, and discover your next favorite artist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Free
              </button>
              <button className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Animated Phone Mockup */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-4 rounded-3xl border border-purple-500/30 shadow-2xl">
                <div className="bg-slate-800 rounded-2xl overflow-hidden">
                  {/* Mock Music Player */}
                  <div className="aspect-square bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Music className="w-24 h-24 text-white/30" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="h-4 bg-slate-700 rounded-full w-3/4" />
                      <div className="h-3 bg-slate-700 rounded-full w-1/2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Heart className="w-6 h-6 text-slate-600" />
                      <div className="flex items-center space-x-6">
                        <div className="w-8 h-8 rounded-full bg-slate-700" />
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                          <Play className="w-6 h-6 fill-white" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-700" />
                      </div>
                      <Radio className="w-6 h-6 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}