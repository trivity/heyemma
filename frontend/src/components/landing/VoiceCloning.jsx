import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mic, Play, Pause, Check, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const voiceSamples = [
  "Hey! Thanks for calling—I'd love to hear more about your project...",
  "Let me grab your details and I'll get back to you today.",
];

const features = [
  'Clone your voice in 5 minutes',
  'Natural-sounding responses',
  'Consistent brand experience',
  'Available on Pro plans and up',
];

export const VoiceCloning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section 
      id="voice-cloning"
      className="relative py-12 md:py-16"
      data-testid="voice-cloning-section"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card rounded-3xl p-8 neon-glow-purple">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Your Voice</p>
                    <p className="text-gray-500 text-sm">Cloned in minutes</p>
                  </div>
                </div>
                <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Voice sample ready
                </span>
              </div>

              {/* Voice Waveform Visualization */}
              <div className="relative h-24 mb-8 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="voice-bar w-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
                      style={{
                        height: `${Math.random() * 40 + 20}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Play button overlay */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  data-testid="voice-play-btn"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>

              {/* Sample responses */}
              <div className="space-y-3">
                <p className="text-gray-500 text-sm font-medium mb-3">Sample responses</p>
                {voiceSamples.map((sample, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                  >
                    <Volume2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm italic">"{sample}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium tracking-wider uppercase text-purple-400 mb-4 block">
              Custom Voice Cloning
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Sound like <span className="text-gradient">you</span>, even when you're not there
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Clone your voice so callers hear <em>your</em> brand, not a generic AI. 
              Set up in minutes, sounds natural, and keeps every interaction personal—even at 2am.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                  className="flex items-center gap-3"
                  data-testid={`voice-feature-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
              <span className="text-purple-400 font-semibold">Starting at $1,497</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
