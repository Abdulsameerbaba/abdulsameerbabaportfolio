import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6 mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-6 h-6 text-white" strokeWidth={1.5} />
              <span className="text-lg font-semibold tracking-tight">OutreachAI</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              OutreachAI goes beyond basic AI with multi-agent pipelines that research every prospect deeply before crafting relevant and contextual outreach.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6">PRODUCT</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  AI Agent
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Sales Engagement
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Generation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Email Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6">FOLLOW US</h3>
            <a 
              href="#" 
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2025 OutreachAI. All rights reserved.</p>
          <div className="flex items-center gap-8 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition-colors tracking-wider">
              Privacy policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors tracking-wider">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
