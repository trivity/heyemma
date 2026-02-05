import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CreditCard, Shield, Headphones, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const guarantees = [
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Know exactly what you pay.',
  },
  {
    icon: Shield,
    title: 'Satisfaction Guaranteed',
    description: 'Not happy? We\'ll make it right.',
  },
  {
    icon: Headphones,
    title: 'Free Onboarding Support',
    description: "We'll help you get set up for success.",
  },
  {
    icon: Download,
    title: 'Export Anytime',
    description: 'Your data is yours. Export everything with one click.',
  },
];

export const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-12 md:py-16"
      data-testid="final-cta-section"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-2">
            Ready to <span className="text-gradient">get started</span>?
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            We're confident HeyEmma will transform your business. Book a call to see how it works.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center"
              data-testid={`guarantee-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Final CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center neon-glow-cyan">
            <h3 className="font-heading text-2xl md:text-4xl font-semibold mb-4">
              Help answer calls. Book more work.
            </h3>
            <p className="text-gray-400 mb-8">
              Start with AI answering and instant follow-ups—then scale into a fully 
              connected system when you're ready.
            </p>
            
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-10 py-6 text-lg rounded-full btn-glow cta-button transition-all duration-300 mb-6"
              data-testid="final-cta-btn"
            >
              Book A Call
            </Button>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>Setup in 5 minutes</span>
              <span className="hidden sm:inline">•</span>
              <span>Starting at $1,497</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
