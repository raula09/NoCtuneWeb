import React from 'react';
import { Download } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Music Experience?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join millions of music lovers worldwide. Download NoCtune today and get 3 months free!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Get Started Free
            </button>
            <p className="text-sm text-slate-400 mt-4">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}