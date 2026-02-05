import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  UserPlus, 
  MessageSquare, 
  RefreshCw, 
  Calendar, 
  FileText 
} from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Auto-creates leads in pipeline',
    description: 'New callers become leads automatically',
  },
  {
    icon: MessageSquare,
    title: 'Triggers SMS follow-ups',
    description: 'Instant texts based on call outcomes',
  },
  {
    icon: RefreshCw,
    title: 'Updates contact records',
    description: 'Every detail syncs to the same record',
  },
  {
    icon: Calendar,
    title: 'Books appointments on your calendar',
    description: 'Callers can schedule during the call',
  },
  {
    icon: FileText,
    title: 'Syncs with proposals & invoices',
    description: 'Full context when you follow up',
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="features"
      className="relative py-12 md:py-16"
      data-testid="features-section"
    >
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-wider uppercase text-purple-400 mb-2 block">
              Beyond Basic Answering
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-4">
              More than an answering service
            </h2>
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Your AI doesn't just pick up—it talks to your entire CRM. Create leads, 
              trigger follow-ups, and book appointments automatically. Everything stays 
              connected to the same customer record.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4 group"
                  data-testid={`feature-item-${index}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
                alt="Team viewing CRM dashboard"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">New lead created</p>
                    <p className="text-gray-500 text-xs">Sarah Mitchell • Wedding Inquiry</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-500">Just now</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
