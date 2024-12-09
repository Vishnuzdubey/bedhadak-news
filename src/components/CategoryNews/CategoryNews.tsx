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
  image_url?: string | null;
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
            (article.image_url || article.id)
          )
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        if (validArticles.length === 0) {
          throw new Error('No valid articles found');
        }

        setNewsData({
          title: validArticles[0].category?.name || 'News',
          mainNews: validArticles[0],
          sideNews: validArticles.slice(1, 5) // Increased to show more side news
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
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main News Card */}
        <div className="lg:col-span-3 bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:shadow-2xl">
          {newsData.mainNews.image_url ? (
            <img 
              src={newsData.mainNews.image_url} 
              alt={newsData.mainNews.title}
              className="w-full h-80 lg:h-96 object-cover"
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.onerror = null;
                imgElement.src = '/api/placeholder/1200/600';
              }}
            />
          ) : (
            <PlaceholderImage className="w-full h-80 lg:h-96" />
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
                {news.image_url ? (
                  <img 
                    src={news.image_url} 
                    alt={news.title}
                    className="w-full h-40 object-cover"
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.onerror = null;
                      imgElement.src = '/api/placeholder/400/250';
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