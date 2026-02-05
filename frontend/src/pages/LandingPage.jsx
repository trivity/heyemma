import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { VoiceCloning } from '@/components/landing/VoiceCloning';
import { BentoFeatures } from '@/components/landing/BentoFeatures';
import { Comparison } from '@/components/landing/Comparison';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="fixed inset-0 hero-glow pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none" />
      
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <VoiceCloning />
        <BentoFeatures />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
