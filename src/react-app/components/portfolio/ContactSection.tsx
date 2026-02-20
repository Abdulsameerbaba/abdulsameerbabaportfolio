import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>

        <div className="max-w-xl mx-auto mt-12">
          <div className="cyber-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                  <User size={18} className="text-[#ff0033]" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="cyber-input"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                  <Mail size={18} className="text-[#ff0033]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="cyber-input"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium">
                  <MessageSquare size={18} className="text-[#ff0033]" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="cyber-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="cyber-btn w-full flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
