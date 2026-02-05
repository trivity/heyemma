import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_3c984889-191c-4e04-9cf6-888a93847cc1/artifacts/esnlccz7_ChatGPT%20Image%20Feb%204%2C%202026%2C%2008_10_09%20PM.png";

export const Footer = () => {
  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Voice Cloning', href: '#voice-cloning' },
    { name: 'Pricing', href: '#' },
  ];

  const companyLinks = [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer 
      className="relative py-16 md:py-24 border-t border-white/5"
      data-testid="footer"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img 
                src={LOGO_URL} 
                alt="HeyEmma" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              An AI answering service that picks up in seconds, qualifies leads, 
              and sends instant follow-ups—so you never miss another opportunity.
            </p>
            <a 
              href="mailto:hello@heyemma.ai" 
              className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>hello@heyemma.ai</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-500 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#voice-cloning" className="text-gray-500 hover:text-white transition-colors">Voice Cloning</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 HeyEmma. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
