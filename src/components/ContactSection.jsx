import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, MapPin, ExternalLink, Send, User, AtSign, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [copySuccess, setCopySuccess] = useState(false);

  const contactInfo = {
    email: "shet.sa@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/sachin-shet-894680183/",
    github: "https://github.com/SachinShet73",
    location: "Boston, MA"
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      showAlert('error', 'Failed to copy email');
    }
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_w6ls32o',
        'template_ntjhgi2',
        formRef.current,
        'p2aP-wT_U1qa90VwH'
      );

      if (result.status === 200) {
        showAlert('success', 'Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      showAlert('error', 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      isEmail: true
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

  const ContactMethodCard = ({ method }) => {
    const Icon = method.icon;
    const commonClasses = `
      relative bg-gray-800/30 backdrop-blur-sm rounded-xl 
      border transition-all duration-300
      ${method.isEmail 
        ? 'border-amber-300/40 hover:border-amber-300/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)]' 
        : 'border-amber-200/20 hover:border-amber-200/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]'}
    `;

    if (method.href) {
      return (
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${commonClasses} p-6 ${method.isEmail ? 'bg-amber-200/5' : ''} flex items-center justify-center`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${method.isEmail ? 'bg-amber-200/20' : 'bg-amber-200/10'}`}>
              <Icon className={`w-6 h-6 ${method.isEmail ? 'text-amber-300' : 'text-amber-200'}`} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-1">{method.label}</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="truncate">{method.value}</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </div>
            </div>
          </div>
        </a>
      );
    }

    return (
      <button onClick={method.onClick} className={`${commonClasses} text-left w-full p-6`}>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-200/10 rounded-lg">
            <Icon className="w-6 h-6 text-amber-200" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{method.label}</h3>
            <p className="text-gray-400">{method.value}</p>
            {method.feedback && (
              <span className="text-sm text-amber-200/60">{method.feedback}</span>
            )}
          </div>
        </div>
      </button>
    );
  };

  return (
    <div 
      ref={ref}
      className={`min-h-screen py-20 px-4 
        transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {alert.show && (
        <div className={`fixed top-4 right-4 w-96 z-50 p-4 rounded-lg border ${
          alert.type === 'error' 
            ? 'bg-red-900/90 border-red-500/50 text-red-100' 
            : 'bg-green-900/90 border-green-500/50 text-green-100'
        }`}>
          <p className="text-sm">{alert.message}</p>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
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

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <ContactMethodCard key={index} method={method} />
          ))}
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-amber-200/20 p-8">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
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
                    className="w-full bg-gray-900/50 border border-amber-200/20 rounded-lg pl-12 pr-4 py-3 
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
                    className="w-full bg-gray-900/50 border border-amber-200/20 rounded-lg pl-12 pr-4 py-3 
                      text-white placeholder-gray-400 focus:border-amber-300/40 focus:ring-1 
                      focus:ring-amber-300/40 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-gray-900/50 border border-amber-200/20 rounded-lg pl-12 pr-4 py-3 
                    text-white placeholder-gray-400 focus:border-amber-300/40 focus:ring-1 
                    focus:ring-amber-300/40 transition-all"
                  placeholder="Project Discussion"
                />
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
                className="w-full bg-gray-900/50 border border-amber-200/20 rounded-lg px-4 py-3 
                  text-white placeholder-gray-400 focus:border-amber-300/40 focus:ring-1 
                  focus:ring-amber-300/40 transition-all"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex items-center gap-2 px-8 py-3 bg-amber-300/20 rounded-xl 
                text-white font-medium transition-all hover:bg-amber-300/30 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;