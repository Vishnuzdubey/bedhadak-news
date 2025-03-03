


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  date: string;
}

const BreakingNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


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
    const fetchBreakingNews = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=100');
        
        // Log the entire response to understand its structure
        console.log('Full Response:', response);
        console.log('Response Data:', response.data);
        console.log('Response Type:', typeof response.data);

        // Defensive programming to handle different possible response structures
        const articlesData = response.data?.data || response.data || [];
        
        console.log('Articles Data:', articlesData);
        console.log('Articles Type:', typeof articlesData);

        // Ensure articlesData is an array before filtering
        const breakingNews = Array.isArray(articlesData)
          ? articlesData
              .filter((article: any) => article.breaking)
              .slice(0, 5)
              .map((article: any) => ({
                id: article.id,
                title: article.title,
                date: article.date
              }))
          : [];

        console.log('Breaking News:', breakingNews);

        setNews(breakingNews);
        setIsLoading(false);

        if (breakingNews.length === 0) {
          setError('No breaking news found');
        }
      } catch (err) {
        console.error('Full Axios Error:', err);
        
        // More detailed error handling
        if (axios.isAxiosError(err)) {
          setError(`Network Error: ${err.message}`);
          console.log('Error Response:', err.response);
          console.log('Error Request:', err.request);
        } else {
          setError('An unexpected error occurred while fetching news');
        }
        
        setIsLoading(false);
      }
    };

    // Fetch news immediately and then every 5 minutes
    fetchBreakingNews();
    const intervalId = setInterval(fetchBreakingNews, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (news.length === 0) return;

    const timer = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => 
        (prevIndex + 1) % news.length
      );
    }, 9000);

    return () => clearInterval(timer);
  }, [news]);

  if (isLoading) {
    return (
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
  }

  if (error) {
    return (
      <div className="bg-slate-900 text-white py-3 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="bg-slate-900 text-white py-3 text-center">
        No breaking news available
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white py-3 shadow-lg overflow-hidden relative">
      <div className="container mx-auto flex items-center">
        <div className="bg-red-600 text-white px-3 py-1 rounded-md font-bold mr-4 text-sm uppercase">
          Breaking
        </div>
        <div className="relative w-full h-6 overflow-hidden">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`absolute w-full transition-transform duration-[8500ms] ease-linear ${
                index === currentNewsIndex
                  ? 'translate-x-0 opacity-1000'
                  : 'translate-x-full opacity-0'
              }`}
              style={{ transform: `translateX(${index === currentNewsIndex ? '0%' : '100%'})` }}
            >
              <Link
                to={`/NewsPage/${item.id}`}
                className="text-white hover:text-gray-300 transition-colors flex items-center"
              >
                <span className="truncate">{item.title}</span>
                {/* <span className="text-xs text-gray-400 ml-2">
                  {new Date(item.date).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;