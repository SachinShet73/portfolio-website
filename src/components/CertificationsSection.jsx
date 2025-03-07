import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Calendar, ExternalLink, FileCheck, Shield,
  CheckCircle, BookOpen, Star, Trophy, ArrowRight,
  Cloud
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CertificationsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  // Sample certifications data - replace with your actual certifications
  const certifications = [
    {
      title: "Azure Data Engineer Associate",
      issuer: "Microsoft",
      issueDate: "January 2023",
      expiryDate: "January 2025",
      credentialId: "CERT-1234-ABCD",
      credentialUrl: "https://www.credly.com/badges/example",
      description: "Validates expertise in data engineering on Microsoft Azure, including designing and implementing the management, monitoring, security, and privacy of data solutions.",
      skills: [
        "Azure Data Factory",
        "Azure Databricks",
        "Azure Data Lake Storage",
        "Azure Synapse Analytics",
        "Data Transformation"
      ],
      icon: Shield,
      color: "blue"
    },
    {
      title: "Machine Learning Engineer Certification",
      issuer: "IBM",
      issueDate: "March 2022",
      expiryDate: "March 2025",
      credentialId: "IBM-ML-5678",
      credentialUrl: "https://www.credly.com/badges/example",
      description: "Demonstrates proficiency in developing machine learning models, utilizing various algorithms, and deploying models to production environments.",
      skills: [
        "TensorFlow",
        "Scikit-learn",
        "Deep Learning",
        "Model Deployment",
        "Python for ML"
      ],
      icon: BookOpen,
      color: "purple"
    },
    {
      title: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      issueDate: "July 2022",
      expiryDate: "July 2025",
      credentialId: "AWS-DA-9012",
      credentialUrl: "https://www.credly.com/badges/example",
      description: "Validates technical expertise in designing and maintaining data analytics solutions on AWS, including data collection, storage, processing, and visualization.",
      skills: [
        "Amazon Redshift",
        "AWS Glue",
        "Amazon Kinesis",
        "Amazon EMR",
        "Data Visualization"
      ],
      icon: Cloud,
      color: "orange"
    }
  ];

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
    <div 
      ref={ref}
      className={`space-y-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {certifications.slice(0, 2).map((certification, index) => (
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
      
      {/* View All Button */}
      <div className="text-center mt-16">
        <Link 
          to="/certifications"
          className="group inline-flex items-center gap-2 px-8 py-4 
                   bg-gradient-to-r from-amber-200/20 to-amber-200/10
                   hover:from-amber-200/30 hover:to-amber-200/20
                   rounded-xl text-white transition-all duration-300"
        >
          View All Certifications
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CertificationsSection;