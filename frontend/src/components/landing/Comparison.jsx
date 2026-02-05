import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const comparisonItems = [
  {
    feature: 'AI voice answering + custom voice cloning',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Missed-call text-back + instant next steps',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Full CRM integration—not just call logs',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Lead pipeline to track who needs follow-up',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Proposals, contracts, and e-sign',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Invoices + payment tracking',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Client portal + shared files',
    heyemma: true,
    others: false,
  },
  {
    feature: 'Team-ready workflows and permissions',
    heyemma: true,
    others: false,
  },
];

export const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-12 md:py-16 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent"
      data-testid="comparison-section"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            One system, not five tools
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start with AI answering. Then, when you're ready, keep proposals, payments, and 
            client delivery in the same system—so you're not stitching apps together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
              <div className="col-span-1">
                <span className="text-sm font-medium text-gray-500">Features</span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  HeyEmma
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-gray-500">Others</span>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-white/5">
              {comparisonItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
                  className="grid grid-cols-3 gap-4 p-4 md:p-6 items-center hover:bg-white/[0.02] transition-colors"
                  data-testid={`comparison-row-${index}`}
                >
                  <div className="col-span-1">
                    <span className="text-sm text-gray-300">{item.feature}</span>
                  </div>
                  <div className="flex justify-center">
                    {item.heyemma ? (
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        <X className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.others ? (
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-400" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        <X className="w-4 h-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-white/[0.02]">
              <p className="text-center text-sm text-gray-500 mb-4">
                Everything connected to the same lead
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-5 rounded-full btn-glow transition-all duration-300"
                  data-testid="comparison-cta-btn"
                >
                  Start Your Free Trial
                </Button>
              </div>
              <p className="text-center text-xs text-gray-600 mt-4">
                No credit card required. Setup takes about 5 minutes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
