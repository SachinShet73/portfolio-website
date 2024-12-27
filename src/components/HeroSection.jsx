import React from 'react';
import { Link } from 'react-router-dom';
import { Database, FileDown, Github, Linkedin, FileText, Code, Terminal, Box, Star, Circle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profileImage from '../images/profile/profilepicture.jpg';
import resumePDF from '../assets/resume.pdf';

const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const personalInfo = {
    name: "Sachin Shet",
    title: "Big Data Engineer",
    subtitle: "Machine Learning Enthusiast",
    bio: "Big Data Engineer specializing in building scalable data pipelines and distributed systems. Passionate about leveraging ML/AI to derive meaningful insights from massive datasets."
  };

  const skills = ["Apache Spark", "Kafka", "Python", "Machine Learning", "AWS", "Docker"];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Sachin_Shet_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateDecorations = (count) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      size: 2 + Math.random() * 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4
    }));
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Profile Info */}
        <div className="text-left space-y-6 order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Hi, I'm </span>
              <span className="text-amber-200/90">{personalInfo.name}</span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl text-amber-200/80 font-semibold">
                {personalInfo.title}
              </p>
              <p className="text-lg sm:text-xl text-amber-200/60">
                {personalInfo.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Updated Skills Section */}
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-200/10 to-amber-100/5 
                         backdrop-blur-sm border border-amber-200/20 rounded-full text-amber-200/90
                         hover:border-amber-200/40 hover:from-amber-200/15 hover:to-amber-100/10
                         transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-900/5"
              >
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>

          {/* Updated CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Link 
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-200/20 to-amber-100/10
                       hover:from-amber-200/30 hover:to-amber-100/20 rounded-xl text-white
                       transition-all duration-300 flex items-center gap-3 shadow-lg shadow-amber-900/10
                       border border-amber-200/20 hover:border-amber-200/40"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                <Database className="w-5 h-5" />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 to-amber-100/0 
                           group-hover:from-amber-200/5 group-hover:to-amber-100/5 rounded-xl 
                           transition-all duration-300 blur-xl"></div>
            </Link>
            <button 
              onClick={handleDownloadResume}
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-800/90 to-gray-700/90
                       hover:from-gray-800 hover:to-gray-700 rounded-xl text-white
                       transition-all duration-300 flex items-center gap-3 shadow-lg shadow-gray-900/20
                       border border-amber-200/20 hover:border-amber-200/40"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </span>
            </button>
          </div>

          {/* Updated Social Links */}
          <div className="flex gap-6 pt-6">
            <a 
              href="https://github.com/SachinShet73"
              className="group p-3 bg-gradient-to-r from-amber-200/10 to-amber-100/5 
                       rounded-lg hover:from-amber-200/20 hover:to-amber-100/10 
                       transition-all duration-300 border border-amber-200/20 hover:border-amber-200/40"
              aria-label="Github Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-amber-200/60 group-hover:text-amber-200/90 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sachin-shet-894680183/"
              className="group p-3 bg-gradient-to-r from-amber-200/10 to-amber-100/5 
                       rounded-lg hover:from-amber-200/20 hover:to-amber-100/10 
                       transition-all duration-300 border border-amber-200/20 hover:border-amber-200/40"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-amber-200/60 group-hover:text-amber-200/90 transition-colors" />
            </a>
            <a 
              href="https://medium.com/@sachinshet135"
              className="group p-3 bg-gradient-to-r from-amber-200/10 to-amber-100/5 
                       rounded-lg hover:from-amber-200/20 hover:to-amber-100/10 
                       transition-all duration-300 border border-amber-200/20 hover:border-amber-200/40"
              aria-label="Blog Posts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-6 h-6 text-amber-200/60 group-hover:text-amber-200/90 transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image & Decorations */}
        <div className="relative order-1 lg:order-2">
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/10 via-amber-100/5 to-amber-200/10 rounded-3xl blur-3xl"></div>
            
            {/* Decorative Light Elements */}
            {generateDecorations(10).map(decoration => (
              <div
                key={decoration.id}
                className="absolute w-2 h-2 bg-amber-200/40 rounded-full blur-sm"
                style={{
                  top: `${decoration.top}%`,
                  left: `${decoration.left}%`,
                  width: `${decoration.size}px`,
                  height: `${decoration.size}px`,
                  animation: `float-decoration ${decoration.duration}s ease-in-out infinite`,
                  animationDelay: `${decoration.delay}s`
                }}
              />
            ))}

            {/* Additional Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-amber-200/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-amber-200/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Image Container */}
            <div className="relative">
              <div className="w-64 h-80 sm:w-80 sm:h-96 mx-auto relative overflow-hidden">
                {/* Main Image */}
                <img 
                  src={profileImage}
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover object-center
                           shadow-[0_0_30px_rgba(251,191,36,0.2)]
                           transition-all duration-500
                           hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]"
                />
                
                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-amber-200/20 
                             hover:border-amber-200/30 transition-colors duration-500"></div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-200/20"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-amber-200/20"></div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-0 right-0 p-4 bg-amber-200/10 rounded-xl backdrop-blur-sm animate-float-slow">
              <Terminal className="w-6 h-6 text-amber-200/60" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-amber-200/10 rounded-xl backdrop-blur-sm animate-float-slower">
              <Box className="w-6 h-6 text-amber-200/60" />
            </div>

            {/* Additional Decorative Details */}
            <div className="absolute -top-4 left-1/4 transform -translate-x-1/2">
              <Star className="w-4 h-4 text-amber-200/40" />
            </div>
            <div className="absolute -bottom-4 right-1/4 transform translate-x-1/2">
              <Circle className="w-4 h-4 text-amber-200/40" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-decoration {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;