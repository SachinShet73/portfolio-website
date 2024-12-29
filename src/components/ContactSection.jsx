import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, ExternalLink, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection = () => {
  const formRef = useRef();
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const contactInfo = {
    email: "shet.sa@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/sachin-shet-894680183/",
    github: "https://github.com/SachinShet73",
    location: "Boston, MA"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      showAlert('success', 'Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      showAlert('error', 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: contactInfo.linkedin
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: contactInfo.github
    }
  ];

  return (
    <div 
      ref={ref}
      className={`min-h-screen py-20 px-4 transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {alert.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg border backdrop-blur-sm
          ${alert.type === 'error' 
            ? 'bg-red-900/90 border-red-500/50 text-red-100' 
            : 'bg-green-900/90 border-green-500/50 text-green-100'}`}>
          <p className="text-sm">{alert.message}</p>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-200/10 
            rounded-full border border-amber-200/20 text-amber-200/80 mb-6">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">{contactInfo.location}</p>
          </div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        {/* Contact Methods Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/10 via-amber-100/5 to-amber-200/10 
            rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
            backdrop-blur-sm rounded-lg border border-amber-200/20 p-6 sm:p-8 
            transition-all duration-500 hover:border-amber-200/40 
            hover:bg-gray-800/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
            
            <div className="grid sm:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/30 rounded-xl p-6 border border-amber-200/10 
                    hover:border-amber-200/20 transition-all duration-300 
                    hover:bg-gray-800/70 group/method"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200/10 rounded-lg 
                      group-hover/method:bg-amber-200/20 transition-all duration-300">
                      <method.icon className="w-6 h-6 text-amber-200" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{method.label}</h3>
                      <div className="flex items-center gap-2 text-gray-400 
                        group-hover/method:text-gray-300 transition-colors">
                        <span className="truncate">{method.value}</span>
                        <ExternalLink className="w-4 h-4 flex-shrink-0 
                          group-hover/method:translate-x-0.5 
                          group-hover/method:-translate-y-0.5 
                          transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="mt-8 bg-gray-900/30 rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-amber-200/80" />
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full bg-gray-800/50 border border-amber-200/20 rounded-lg pl-12 pr-4 py-3 
                          text-white placeholder-gray-400 focus:border-amber-300/40 focus:ring-1 
                          focus:ring-amber-300/40 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full bg-gray-800/50 border border-amber-200/20 rounded-lg pl-12 pr-4 py-3 
                          text-white placeholder-gray-400 focus:border-amber-300/40 focus:ring-1 
                          focus:ring-amber-300/40 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-gray-800/50 border border-amber-200/20 rounded-lg px-4 py-3 
                      text-white placeholder-gray-400 focus:border-amber-300/40 focus:ring-1 
                      focus:ring-amber-300/40 transition-all"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center gap-2 px-6 py-3 bg-amber-200/10 
                    rounded-lg text-white font-medium border border-amber-200/20
                    hover:bg-amber-200/20 hover:border-amber-200/30 
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;