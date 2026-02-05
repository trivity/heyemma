import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Database, 
  Clock
} from 'lucide-react';

const BentoCard = ({ item, index, isInView }) => {
  const IconComponent = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`${item.colSpan} glass-card rounded-3xl p-8 feature-card group`}
      data-testid={`bento-card-${index}`}
    >
      <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${
        item.color === 'cyan' ? 'bg-cyan-500/20 group-hover:bg-cyan-500/30' :
        item.color === 'purple' ? 'bg-purple-500/20 group-hover:bg-purple-500/30' :
        'bg-pink-500/20 group-hover:bg-pink-500/30'
      } transition-colors duration-300`}>
        <IconComponent className={`w-7 h-7 ${
          item.color === 'cyan' ? 'text-cyan-400' :
          item.color === 'purple' ? 'text-purple-400' :
          'text-pink-400'
        }`} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
        {item.title}
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {item.description}
      </p>
      
      <ul className="space-y-2">
        {item.features.map((feature, fIndex) => (
          <li 
            key={fIndex}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${
              item.color === 'cyan' ? 'bg-cyan-500' :
              item.color === 'purple' ? 'bg-purple-500' :
              'bg-pink-500'
            }`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const bentoItems = [
  {
    icon: Phone,
    title: 'AI Phone Answering',
    description: "Your AI answers 24/7, responds naturally, and captures what you need—so you don't lose leads while you're working.",
    features: [
      'Answers calls in seconds, 24/7',
      'Qualifies leads with your questions',
      'Custom voice cloning available',
      'Handles FAQs and routes next steps',
      'Natural voice with customizable greeting',
    ],
    colSpan: 'md:col-span-8',
    color: 'cyan',
  },
  {
    icon: MessageSquare,
    title: 'Voice-led Follow-ups',
    description: 'Turn every call into a clear next step with instant texts and smart follow-ups that keep leads warm.',
    features: [
      'Auto-text after missed calls',
      'Instant "next step" message after calls',
      'Follow-up sequences that feel personal',
      'Calendar + booking-ready workflows',
      'No Zapier required',
    ],
    colSpan: 'md:col-span-4',
    color: 'purple',
  },
  {
    icon: Database,
    title: 'Full CRM Integration',
    description: 'Not just an answering service—your AI talks to your entire business stack and keeps every record in sync.',
    features: [
      'Auto-creates leads in your pipeline',
      'Triggers workflows based on call outcomes',
      'Syncs with proposals & invoices',
      'Books appointments on your calendar',
      'One record for calls, texts, and deals',
    ],
    colSpan: 'md:col-span-4',
    color: 'pink',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss another opportunity. Your AI assistant works around the clock, weekends and holidays included.',
    features: [
      'Always on, never takes breaks',
      'Handles overflow during busy periods',
      'Consistent quality at any hour',
      'Time zone intelligent responses',
    ],
    colSpan: 'md:col-span-8',
    color: 'cyan',
  },
];

export const BentoFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-24 md:py-32"
      data-testid="bento-features-section"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            AI phone answering, built for <span className="text-gradient">business</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Lead with voice. Then automate the follow-up. Finally, keep every opportunity organized in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {bentoItems.map((item, index) => (
            <BentoCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};
