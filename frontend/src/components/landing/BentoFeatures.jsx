import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Database, 
  Clock
} from 'lucide-react';

export const BentoFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="relative py-12 md:py-16"
      data-testid="bento-features-section"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-2">
            AI phone answering, built for <span className="text-gradient">business</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Lead with voice. Then automate the follow-up. Finally, keep every opportunity organized in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* AI Phone Answering - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8 glass-card rounded-3xl p-8 feature-card group"
            data-testid="bento-card-0"
          >
            <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors duration-300">
              <Phone className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              AI Phone Answering
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your AI answers 24/7, responds naturally, and captures what you need—so you don't lose leads while you're working.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Answers calls in seconds, 24/7
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Qualifies leads with your questions
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Custom voice cloning available
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Handles FAQs and routes next steps
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Natural voice with customizable greeting
              </li>
            </ul>
          </motion.div>

          {/* Voice-led Follow-ups - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 glass-card rounded-3xl p-8 feature-card group"
            data-testid="bento-card-1"
          >
            <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
              <MessageSquare className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Voice-led Follow-ups
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Turn every call into a clear next step with instant texts and smart follow-ups that keep leads warm.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Auto-text after missed calls
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Instant "next step" message after calls
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Follow-up sequences that feel personal
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Calendar + booking-ready workflows
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                No Zapier required
              </li>
            </ul>
          </motion.div>

          {/* Full CRM Integration - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 glass-card rounded-3xl p-8 feature-card group"
            data-testid="bento-card-2"
          >
            <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors duration-300">
              <Database className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Full CRM Integration
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Not just an answering service—your AI talks to your entire business stack and keeps every record in sync.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                Auto-creates leads in your pipeline
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                Triggers workflows based on call outcomes
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                Syncs with proposals & invoices
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                Books appointments on your calendar
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                One record for calls, texts, and deals
              </li>
            </ul>
          </motion.div>

          {/* 24/7 Availability - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-8 glass-card rounded-3xl p-8 feature-card group"
            data-testid="bento-card-3"
          >
            <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors duration-300">
              <Clock className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              24/7 Availability
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Never miss another opportunity. Your AI assistant works around the clock, weekends and holidays included.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Always on, never takes breaks
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Handles overflow during busy periods
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Consistent quality at any hour
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Time zone intelligent responses
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
