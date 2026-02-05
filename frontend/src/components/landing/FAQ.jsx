import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does it sound like a robot?",
    answer: "Not at all! HeyEmma uses advanced AI voice technology that sounds natural and conversational. With our voice cloning feature, callers will hear your actual voice—or a customized AI voice that matches your brand personality.",
  },
  {
    question: "Can I use my own voice?",
    answer: "Yes! Our voice cloning feature lets you record a short sample of your voice, and our AI will learn to respond in your voice. This keeps every interaction personal and on-brand, even when you're not available.",
  },
  {
    question: "What happens if the caller asks something it doesn't know?",
    answer: "HeyEmma is trained on your business information and FAQs. If a question comes up that's outside its knowledge, it will gracefully capture the caller's details and let them know you'll follow up personally. You'll get a notification with the question so nothing falls through the cracks.",
  },
  {
    question: "How is this different from a regular answering service?",
    answer: "Traditional answering services just take messages. HeyEmma actively qualifies leads, answers FAQs, schedules appointments, triggers follow-up texts, and syncs everything with your CRM—automatically. It's a full sales assistant, not just a message taker.",
  },
  {
    question: "Can it send a text message after the call?",
    answer: "Absolutely! HeyEmma can automatically send personalized follow-up texts based on the call outcome. This keeps the conversation going and makes sure leads don't go cold while waiting for your response.",
  },
  {
    question: "Do I have to replace my current CRM right away?",
    answer: "No—HeyEmma works alongside your existing tools. You can start with just the AI answering features and gradually adopt more capabilities like the built-in CRM, proposals, and payments when you're ready.",
  },
  {
    question: "How fast can I set this up?",
    answer: "Most users are up and running in under 5 minutes. Just connect your phone number, customize your greeting and FAQ responses, and you're live. Voice cloning takes a few extra minutes if you want that feature.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is encrypted in transit and at rest. We use industry-standard security practices and never share your data with third parties. Your business information and customer conversations are completely private.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="faq"
      className="relative py-12 md:py-16"
      data-testid="faq-section"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-semibold tracking-tight mb-2">
            FAQ
          </h2>
          <p className="text-base text-gray-400">
            Questions we get about AI answering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-white/10 data-[state=open]:border-cyan-500/30 transition-colors"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-white hover:text-cyan-400 hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
