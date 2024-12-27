import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, Heart, BarChart2, ExternalLink, ArrowLeft } from 'lucide-react';

const AllArticles = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const articles = [
    {
      id: 1,
      title: "Optimizing Spark Performance at Scale",
      subtitle: "Best practices for large-scale data processing",
      thumbnail: "/api/placeholder/400/250",
      readTime: "12 min read",
      date: "Mar 15, 2024",
      platform: "Medium",
      tags: ["Apache Spark", "Big Data", "Performance"],
      metrics: {
        views: "15.2K",
        likes: "1.2K"
      },
      url: "https://medium.com/@yourusername/article-1"
    },
    {
      id: 2,
      title: "Building Real-time ML Pipelines",
      subtitle: "From prototype to production",
      thumbnail: "/api/placeholder/400/250",
      readTime: "15 min read",
      date: "Feb 28, 2024",
      platform: "Hashnode",
      tags: ["Machine Learning", "MLOps", "Production"],
      metrics: {
        views: "18.5K",
        likes: "1.5K"
      },
      url: "https://yourblog.hashnode.dev/article-2"
    }
    // Add more articles as needed
  ];

  const filterArticles = () => {
    if (selectedPlatform === 'all') return articles;
    return articles.filter(article => article.platform.toLowerCase() === selectedPlatform);
  };

  const ArticleCard = ({ article }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-amber-200/20 overflow-hidden hover:border-amber-200/40 transition-all group">
      <img 
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {/* Platform & Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-amber-200/60">{article.platform}</span>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200/90 transition-colors">
          {article.title}
        </h3>
        <p className="text-amber-200/60 mb-4">{article.subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-amber-200/10 rounded-full text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics & Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <BarChart2 className="w-4 h-4" />
              {article.metrics.views}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {article.metrics.likes}
            </div>
          </div>
          <a 
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-amber-200/80 hover:text-amber-200 transition-colors"
          >
            Read Article
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      {/* Back Button with Router Link */}
      <div className="fixed top-8 left-8 z-10">
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-full border border-amber-200/20 text-white hover:bg-gray-800/70 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-amber-200/80" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Technical Articles</h1>
          </div>
          <p className="text-amber-200/60 text-xl mb-8">Sharing Knowledge & Experiences</p>

          {/* Platform Filter */}
          <div className="flex justify-center gap-4">
            {['all', 'medium', 'hashnode'].map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedPlatform === platform
                    ? 'bg-amber-200/20 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filterArticles().map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Platform Links */}
        <div className="mt-16 flex justify-center gap-6">
          <a 
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-amber-200/20 rounded-full text-white hover:bg-amber-200/30 transition-colors"
          >
            View Medium Profile
            <ExternalLink className="w-4 h-4" />
          </a>
          <a 
            href="https://yourblog.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-amber-200/20 rounded-full text-white hover:bg-amber-200/30 transition-colors"
          >
            View Hashnode Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;