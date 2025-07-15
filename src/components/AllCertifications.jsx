import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Calendar, ExternalLink, FileCheck, Shield,
  CheckCircle, BookOpen, Star, Trophy, Cloud,
  Database, Code, Cpu, ArrowLeft, Layers
} from 'lucide-react';

const AllCertifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Categories data
  const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'data', label: 'Data Engineering', icon: Database },
    { id: 'ml', label: 'AI & ML', icon: Cpu },
    { id: 'cloud', label: 'Cloud', icon: Cloud }
  ];

  // Certifications data
  const certifications = [
    {
      title: "Introduction to Data Engineering",
      issuer: "Coursera",
      issueDate: "July 2025",
      credentialId: "APSO9Y96JHDV",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/APSO9Y96JHDV",
      description: "Comprehensive introduction to data engineering concepts, including data pipelines, ETL processes, and data architecture fundamentals.",
      skills: [
        "Data Pipelines",
        "ETL Processes",
        "Data Architecture",
        "Python for Data Engineering",
        "SQL"
      ],
      icon: BookOpen,
      category: "data",
      color: "green"
    }
  ];

  // Filter certifications based on selected category
  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const CertificationCard = ({ certification }) => {
    const Icon = certification.icon || Award;
    
    return (
      <div className="group relative">
        {/* Background gradient effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/10 via-amber-100/5 to-amber-200/10 
                      rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
                      backdrop-blur-sm rounded-lg border border-amber-200/20 p-6 sm:p-8 
                      transition-all duration-500 hover:border-amber-200/40 
                      hover:bg-gray-800/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
          {/* Corner Decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-amber-200/10 
                        group-hover:border-amber-200/20 transition-all duration-500"></div>
          
          {/* Header */}
          <div className="sm:flex justify-between items-start mb-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-200/5 rounded-lg group-hover:bg-amber-200/10 
                             transition-colors duration-500">
                  <Icon className="w-6 h-6 text-amber-200" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200/90 
                             transition-colors duration-300">
                    {certification.title}
                  </h3>
                  <div className="text-lg text-amber-200/60">{certification.issuer}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-amber-200/60" />
                  <span>Issued: {certification.issueDate}</span>
                </div>
                {certification.expiryDate && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <FileCheck className="w-4 h-4 text-amber-200/60" />
                    <span>Valid until: {certification.expiryDate}</span>
                  </div>
                )}
              </div>
            </div>

            {certification.credentialUrl && (
              <a 
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-amber-200/10 
                         rounded-lg text-white hover:bg-amber-200/20 transition-colors 
                         border border-amber-200/20 group/link"
              >
                <span>View Credential</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 
                                     group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed">{certification.description}</p>
          </div>

          {/* Skills */}
          {certification.skills && (
            <div className="space-y-3">
              <h4 className="text-base font-medium text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-200/60" />
                <span>Skills & Technologies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-amber-200/5 border border-amber-200/10 rounded-lg 
                             text-sm text-white hover:bg-amber-200/10 hover:border-amber-200/20 
                             transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Credential ID if available */}
          {certification.credentialId && (
            <div className="mt-6 pt-6 border-t border-amber-200/10 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                <span className="text-gray-500">Credential ID:</span> {certification.credentialId}
              </div>
              
              <div className="flex items-center gap-1 text-amber-200/60">
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
                <Star className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-10">
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm 
                   rounded-full border border-amber-200/20 text-white hover:bg-gray-800/70 
                   transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-amber-200/80" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Professional Certifications</h1>
          </div>
          <p className="text-xl text-amber-200/60 mb-8">Validated Skills & Expertise</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl 
                           border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-amber-200/20 text-white border-amber-200/40'
                      : 'text-gray-400 border-amber-200/10 hover:border-amber-200/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-8">
          {filteredCertifications.map((certification, index) => (
            <div
              key={index}
              className="transform transition-all duration-500"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <CertificationCard certification={certification} />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed pointer-events-none inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AllCertifications;