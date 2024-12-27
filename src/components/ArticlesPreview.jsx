import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ExternalLink, Heart, BarChart2, BookOpen, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ArticlesPreview = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const featuredArticles = [
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
  ];

  const ArticleCard = ({ article }) => (
    <div className="group relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
                  backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200/10 
                  hover:border-amber-200/30 transition-all duration-500">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-200/0 to-amber-200/5 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20"></div>
        <img 
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Top Right Corner Decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber-200/10 
                     group-hover:border-amber-200/20 transition-colors duration-500"></div>
        
        {/* Platform Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-gray-900/90 backdrop-blur-sm 
                     rounded-full border border-amber-200/10 text-amber-200/80 text-sm
                     flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          {article.platform}
        </div>
      </div>

      <div className="relative p-6 space-y-6">
        {/* Article Info */}
        <div>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Calendar className="w-4 h-4" />
            {article.date}
            <span className="text-amber-200/40">•</span>
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200/90 
                       transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-amber-200/60 mb-4 line-clamp-2">{article.subtitle}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-amber-200/5 border border-amber-200/10 rounded-lg 
                       text-sm text-white hover:bg-amber-200/10 hover:border-amber-200/20 
                       transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics and Link */}
        <div className="flex items-center justify-between pt-4 border-t border-amber-200/10">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-200/5 rounded-lg">
              <BarChart2 className="w-4 h-4 text-amber-200/60" />
              {article.metrics.views}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-200/5 rounded-lg">
              <Heart className="w-4 h-4 text-amber-200/60" />
              {article.metrics.likes}
            </div>
          </div>
          <a 
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 px-4 py-2 bg-amber-200/10 
                    rounded-lg text-white hover:bg-amber-200/20 transition-all duration-300"
          >
            Read Article
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r 
                     from-transparent via-amber-200/20 to-transparent opacity-0 
                     group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {featuredArticles.map((article, index) => (
          <div
            key={article.id}
            className="transform transition-all duration-500"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link 
          to="/articles"
          className="group inline-flex items-center gap-2 px-8 py-4 
                   bg-gradient-to-r from-amber-200/20 to-amber-200/10
                   hover:from-amber-200/30 hover:to-amber-200/20
                   rounded-xl text-white transition-all duration-300"
        >
          View All Articles
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Background Decorations */}
      <div className="fixed pointer-events-none inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default ArticlesPreview;