import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Bot, ClipboardCheck, Database, Zap, MessageSquare, FolderOpen } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Lead Calls',
    subtitle: 'During your busy hours',
    color: 'cyan',
  },
  {
    icon: Bot,
    title: 'AI Answers',
    subtitle: 'In 2 seconds',
    color: 'purple',
  },
  {
    icon: ClipboardCheck,
    title: 'Qualifies Lead',
    subtitle: 'Gets details + next steps',
    color: 'pink',
  },
  {
    icon: Database,
    title: 'Saved Automatically',
    subtitle: 'So nothing falls through',
    color: 'cyan',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Instant response, every time',
    description: 'Your AI picks up, handles FAQs, and captures details so leads feel taken care of—immediately.',
  },
  {
    icon: MessageSquare,
    title: 'Follow-up is built-in',
    description: 'Auto-texts and next-step messages fire right away, so the conversation keeps moving.',
  },
  {
    icon: FolderOpen,
    title: 'Everything stays organized',
    description: 'Calls, transcripts, and outcomes are saved automatically so you can review and close later.',
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="how-it-works"
      className="relative py-12 md:py-16 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent"
      data-testid="how-it-works-section"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-cyan-500 mb-4 block">
            Not just answering
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            A full sales assistant
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            How it works (and why it makes you money)
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20"
        >
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative"
                data-testid={`step-${index}`}
              >
                <div className="glass-card rounded-2xl p-6 text-center relative z-10">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    step.color === 'cyan' ? 'bg-cyan-500/20' :
                    step.color === 'purple' ? 'bg-purple-500/20' :
                    'bg-pink-500/20'
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === 'cyan' ? 'text-cyan-400' :
                      step.color === 'purple' ? 'text-purple-400' :
                      'text-pink-400'
                    }`} />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-sm">{step.subtitle}</p>
                </div>
                
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-sm font-mono text-gray-500">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
              className="glass-card rounded-2xl p-8 feature-card"
              data-testid={`benefit-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-3">{benefit.title}</h4>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
