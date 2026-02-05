import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Zap } from 'lucide-react';

const trustBadges = [
  { icon: Check, text: 'No credit card required' },
  { icon: Clock, text: 'Setup in 5 minutes' },
  { icon: Shield, text: 'SSL Encrypted' },
  { icon: Zap, text: 'Cancel anytime' },
];

export const Hero = () => {
  return (
    <section 
      className="relative pt-24 pb-12 md:pt-28 md:pb-16"
      data-testid="hero-section"
    >
      <div className="container-custom">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse-glow" />
            <span>500+ businesses already using HeyEmma</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">Help answer calls</span>
              <br />
              <span className="text-gradient">—even when you can't.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              HeyEmma is an AI answering service that picks up in seconds, 
              qualifies leads, and sends instant follow-ups—so you stop losing 
              bookings to missed calls.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-6 text-lg rounded-full btn-glow cta-button transition-all duration-300"
                data-testid="hero-cta-primary"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-full transition-all duration-300"
                data-testid="hero-cta-secondary"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <badge.icon size={14} className="text-cyan-500" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - ElevenLabs Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-6 md:p-8 neon-glow-purple">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-3 w-3 rounded-full bg-cyan-500 animate-pulse-glow" />
                <span className="text-sm font-medium text-gray-300">Talk to Emma</span>
                <span className="ml-auto text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                  AI Voice Active
                </span>
              </div>

              {/* ElevenLabs Widget Container */}
              <div 
                className="relative min-h-[400px] rounded-2xl bg-black/40 border border-white/5 overflow-hidden"
                data-testid="elevenlabs-widget-container"
              >
                <elevenlabs-convai agent-id="agent_1101kdnyb1ynf39s8tgsdjq3jg4g"></elevenlabs-convai>
              </div>

              {/* Status bar */}
              <div className="mt-6 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield size={14} className="text-green-500" />
                  <span>Secure & Private</span>
                </div>
                <span className="text-gray-500">Powered by AI</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
