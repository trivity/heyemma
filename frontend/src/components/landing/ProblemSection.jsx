import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneOff, Clock, MessageSquareOff, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: PhoneOff,
    quote: "You miss calls while you're busy",
    result: "Leads book someone else before you reply",
  },
  {
    icon: Clock,
    quote: "Voicemails pile up and follow-ups slip",
    result: "You lose momentum (and the sale)",
  },
  {
    icon: MessageSquareOff,
    quote: "You reply hours later with \"Sorry I missed this...\"",
    result: "It feels reactive—not premium",
  },
  {
    icon: HelpCircle,
    quote: "You can't answer every question on the spot",
    result: "Great leads stall without a next step",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-24 md:py-32"
      data-testid="problem-section"
    >
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-cyan-500 mb-4 block">
            The Problem
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Missed calls cost more than you think
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            When you're busy running your business, your phone becomes a revenue leak.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 md:p-8 group hover:border-red-500/20 transition-colors duration-300"
              data-testid={`problem-card-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-2 text-lg">
                    "{problem.quote}"
                  </p>
                  <p className="text-gray-500 flex items-center gap-2">
                    <span className="w-4 h-px bg-gray-600" />
                    {problem.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="inline-flex items-center gap-2 text-cyan-500 font-medium">
            <span className="w-8 h-px bg-cyan-500/50" />
            There's a better way
            <span className="w-8 h-px bg-cyan-500/50" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};
