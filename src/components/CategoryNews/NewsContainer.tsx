

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

// Large Horizontal News Card
const LargeHorizontalNewsCard = ({ article }) => {
  return (
    <Link to={`/NewsPage/${article.id}`}>
    <div className="large-news-card bg-white shadow-lg rounded-xl overflow-hidden mb-6 flex transition-all duration-300 hover:shadow-2xl h-80">
      <div className="w-1/2">
        {article.image_1_url ? (
          <img 
            src={article.image_1_url} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          {article.location && (
            <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-xs mb-3 uppercase">
              <MapPin className="inline-block mr-1 mb-1" size={14} />
              {article.location}
            </span>
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>{article.writer_name}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

// Small News Card
const SmallNewsCard = ({ article }) => {
  return (
    <div className="small-news-card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/NewsPage/${article.id}`} className="block">
        <div className="relative">
          {article.image_1_url ? (
            <img 
              src={article.image_1_url} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          {article.location && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs uppercase">
              <MapPin className="inline-block mr-1 mb-1" size={12} />
              {article.location}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-2" />
            <span>{article.writer_name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Main News Container
const NewsContainer = ({ categoryId, location }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Skeleton image */}
      <div className="bg-slate-200 h-48 w-full"></div>
      
      {/* Skeleton content */}
      <div className="p-4">
        {/* Category pill */}
        <div className="bg-slate-200 h-5 w-20 rounded-full mb-3"></div>
        
        {/* Title */}
        <div className="bg-slate-200 h-6 w-full rounded mb-2"></div>
        <div className="bg-slate-200 h-6 w-3/4 rounded mb-4"></div>
        
        {/* Description */}
        <div className="bg-slate-200 h-4 w-full rounded mb-1"></div>
        <div className="bg-slate-200 h-4 w-full rounded mb-1"></div>
        <div className="bg-slate-200 h-4 w-2/3 rounded mb-4"></div>
        
        {/* Author and date */}
        <div className="flex items-center mt-4">
          <div className="bg-slate-200 h-8 w-8 rounded-full mr-3"></div>
          <div className="bg-slate-200 h-4 w-32 rounded"></div>
        </div>
      </div>
    </div>
  );

  // Featured/hero article skeleton
  const HeroSkeleton = () => (
    <div className="col-span-12 lg:col-span-8 bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-slate-200 h-64 lg:h-80 w-full"></div>
      <div className="p-6">
        <div className="bg-slate-200 h-5 w-24 rounded-full mb-4"></div>
        <div className="bg-slate-200 h-8 w-full rounded mb-2"></div>
        <div className="bg-slate-200 h-8 w-4/5 rounded mb-4"></div>
        
        <div className="bg-slate-200 h-5 w-full rounded mb-1"></div>
        <div className="bg-slate-200 h-5 w-full rounded mb-1"></div>
        <div className="bg-slate-200 h-5 w-3/4 rounded mb-4"></div>
        
        <div className="flex items-center mt-6">
          <div className="bg-slate-200 h-10 w-10 rounded-full mr-3"></div>
          <div className="bg-slate-200 h-5 w-40 rounded"></div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        let response;
        
        // Fetch articles based on either categoryId or location
        if (categoryId) {
          response = await axios.get(`https://bedharak.vercel.app/api/v1/articles/category/${categoryId}`);
        } else if (location) {
          response = await axios.get(`https://bedharak.vercel.app/api/v1/articles/location/${location}`);
        } else {
          throw new Error('Either categoryId or location must be provided');
        }
        
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Only fetch if categoryId or location is provided
    if (categoryId || location) {
      fetchArticles();
    }
  }, [categoryId, location]);

  if (loading) return (
    <div className="bg-slate-50 min-h-screen">
    {/* Header skeleton */}
    <header className="bg-white shadow-sm py-4 px-6 mb-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="bg-slate-200 h-8 w-32 rounded animate-pulse"></div>
        <div className="hidden md:flex space-x-4">
          <div className="bg-slate-200 h-5 w-16 rounded animate-pulse"></div>
          <div className="bg-slate-200 h-5 w-16 rounded animate-pulse"></div>
          <div className="bg-slate-200 h-5 w-16 rounded animate-pulse"></div>
          <div className="bg-slate-200 h-5 w-16 rounded animate-pulse"></div>
        </div>
        <div className="bg-slate-200 h-8 w-8 rounded-full animate-pulse"></div>
      </div>
    </header>
    
    {/* Main content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Breaking news bar */}
      <div className="bg-slate-200 h-10 w-full rounded mb-6 animate-pulse"></div>
      
      {/* Grid layout for articles */}
      <div className="grid grid-cols-12 gap-6">
        {/* Hero article */}
        <HeroSkeleton />
        
        {/* Sidebar featured */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <SkeletonCard />
          <div className="bg-slate-200 h-32 w-full rounded animate-pulse"></div>
        </div>
        
        {/* Regular article cards - 3x2 grid */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <SkeletonCard />
          </div>
        ))}
      </div>
    </main>
  </div>
  );

  if (error) return (
    <div className="text-center py-10 text-red-500">
      Error loading articles. Please try again later.
    </div>
  );

  return (
    <div className="news-container mx-auto px-4 py-8 w-[100%]">
      {articles.length > 0 ? (
        <div>
          {/* First article as Large Horizontal Card */}
          {articles[0] && (
            <div className="mb-6">
              <LargeHorizontalNewsCard article={articles[0]} />
            </div>
          )}

          {/* Remaining articles as Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <SmallNewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
          No articles found.
        </div>
      )}
    </div>
  );
};

export default NewsContainer;