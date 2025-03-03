// import React from 'react'



// const CategoryNews = ({newsData}) => {
    
//   return (
//       <div>
//           <div className="max-w-5xl mx-auto my-4 bg-white p-4 rounded-lg">
//       {/* Section Header */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-bold text-red-600">{newsData.title}</h2>
//         <a href="#" className="text-blue-500 text-sm hover:none">
//           और भी &raquo;
//         </a>
//       </div>

//       {/* Main News Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         {/* Main News */}
//         <div className="col-span-1 md:col-span-2">
//           <div className="relative">
//             <img
//               src={newsData.mainNews.image}
//               alt="Main news"
//               className="w-full h-auto rounded-lg"
//             />
//             <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm font-bold p-2 rounded-b-lg">
//               {newsData.mainNews.description}
//             </p>
//           </div>
//         </div>

//         {/* Side News */}
//         <div className="grid grid-cols-1 gap-4">
//           {newsData.sideNews.map((news, index) => (
//             <div key={index} className="flex items-start gap-2">
//               <img
//                 src={news.image}
//                 alt="News"
//                 className="w-24 h-16 object-cover rounded-lg"
//               />
//               <p className="text-sm font-medium text-gray-700">{news.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
      
//     </div>
//   )
// }

// export default CategoryNews


import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  content?: string;
  image_1_url?: string | null;
  date: string;
  category?: { name: string };
}

interface CategoryNewsProps {
  categoryId: string;
}

interface NewsData {
  title: string;
  mainNews: Article;
  sideNews: Article[];
}

const PlaceholderImage: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
    <ImageIcon className="text-gray-500" size={48} />
  </div>
);

const CategoryNews: React.FC<CategoryNewsProps> = ({ categoryId }) => {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
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
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://bedharak.vercel.app/api/v1/articles/category/${categoryId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const articles: Article[] = data;

        const validArticles = articles
          .filter(article => 
            article && 
            article.title && 
            (article.image_1_url || article.id)
          )
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        if (validArticles.length === 0) {
          throw new Error('No valid articles found');
        }

        setNewsData({
          title: validArticles[0].category?.name || 'News',
          mainNews: validArticles[0],
          sideNews: validArticles.slice(1, 3) // Limit to 2 side news articles
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchCategoryNews();
    }
  }, [categoryId]);

  // Truncate text function
  const truncateText = (text: string = '', maxLength: number = 100) => {
    return text.length > maxLength 
      ? text.substring(0, maxLength) + '...' 
      : text;
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      {error}
    </div>
  );

  if (!newsData) return (
    <div className="text-center text-gray-500 py-8">
      No news available
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{newsData.title} News</h2>
        <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
          View All →
        </a>
      </div>

      {/* News Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        {/* Main News Card */}
        <div className="lg:col-span-3 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:shadow-2xl">
          {newsData.mainNews.image_1_url ? (
            <img 
              src={newsData.mainNews.image_1_url} 
              alt={newsData.mainNews.title}
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.onerror = null;
                imgElement.src = '/api/placeholder/400/400';
              }}
            />
          ) : (
            <PlaceholderImage className="w-full h-[400px]" />
          )}
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">
                {formatDate(newsData.mainNews.date)}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {newsData.mainNews.title}
            </h3>
            <p className="text-gray-600">
              {truncateText(newsData.mainNews.content || '', 250)}
            </p>
            <div className="mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
                Read More →
              </a>
            </div>
          </div>
        </div>

        {/* Side News Cards */}
        <div className="lg:col-span-1 space-y-6">
          {newsData.sideNews.length > 0 ? (
            newsData.sideNews.map(news => (
              <div 
                key={news.id} 
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                {news.image_1_url ? (
                  <img 
                    src={news.image_1_url} 
                    alt={news.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.onerror = null;
                      imgElement.src = '/api/placeholder/400/400';
                    }}
                  />
                ) : (
                  <PlaceholderImage className="w-full h-40" />
                )}
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {formatDate(news.date)}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    {truncateText(news.title, 50)}
                  </h4>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Read More →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              No side news available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;