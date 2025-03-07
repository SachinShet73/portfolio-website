import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Code, Award, BookOpen, FileText, Compass, Mail } from 'lucide-react';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import CursorEffect from './CursorEffect';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', icon: Home, href: '#home' },
    { label: 'Skills', icon: Code, href: '#skills' },
    { label: 'Experience', icon: Award, href: '#experience' },
    { label: 'Education', icon: BookOpen, href: '#education' },
    { label: 'Certifications', icon: Award, href: '#certifications' },
    { label: 'Projects', icon: Briefcase, href: '#projects' },
    { label: 'Articles', icon: FileText, href: '#articles' },
    { label: 'Life Beyond Tech', icon: Compass, href: '#life' },
    { label: 'Contact', icon: Mail, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => activeSection === href.slice(1);

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-amber-200/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="text-xl font-bold text-white hover:text-amber-200/90 transition-colors"
              >
                Portfolio
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                              transition-colors duration-300
                              ${active 
                                ? 'text-amber-200 bg-amber-200/10' 
                                : 'text-gray-300 hover:text-white hover:bg-amber-200/5'}`}
                    >
                      <Icon className={`w-4 h-4 ${active ? 'text-amber-200' : 'text-gray-400'}`} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-amber-200/10 
                         transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-sm transition-opacity duration-300
                      ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base
                           transition-colors duration-300 block
                           ${active 
                             ? 'text-amber-200 bg-amber-200/10' 
                             : 'text-gray-300 hover:text-white hover:bg-amber-200/5'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-amber-200' : 'text-gray-400'}`} />
                  {item.label}
                </a>
              );
            })}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg text-gray-300 hover:text-white 
                     hover:bg-amber-200/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>
      
      <ScrollProgress />
      <BackToTop />
      <CursorEffect />
    </div>
  );
};

export default Layout;