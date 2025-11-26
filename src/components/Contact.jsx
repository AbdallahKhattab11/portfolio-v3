import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return false;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return emailOk;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) {
      setStatus('error');
      return;
    }
    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'abdallahkhattab33@gmail.com',
      }, { publicKey });
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time opportunities.
            If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Feel free to reach out directly via email or follow me on social media. 
              I usually respond within 24 hours.
            </p>
            
            <div className="space-y-4 mb-10">
              <a href="mailto:abdallahkhattab33@gmail.com" className="block text-2xl font-semibold text-indigo-400 hover:text-white transition-colors">
                abdallahkhattab33@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={onChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={onChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <FiSend />
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-sm">Thanks! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-pink-400 text-sm">Please check your details and try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
