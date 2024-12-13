// import React, { useState, useEffect } from 'react';

// interface BreakingNewsProps {
//   news: string[];
// }

// const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentNewsIndex((prevIndex) => 
//         (prevIndex + 1) % news.length
//       );
//     }, 9000); // Interval remains the same

//     return () => clearInterval(timer);
//   }, [news]);

//   return (
//     <div className="bg-slate-900 text-white py-3 shadow-lg overflow-hidden relative">
//       <div className="container mx-auto flex items-center">
//         <div className="bg-red-600 text-white px-3 py-1 rounded-md font-bold mr-4 text-sm uppercase">
//           Breaking
//         </div>
//         <div className="relative w-full h-6 overflow-hidden">
//           {news.map((item, index) => (
//             <div
//               key={index}
//               className={`absolute w-full transition-transform duration-[8500ms] ease-linear ${
//                 index === currentNewsIndex
//                   ? 'translate-x-0 opacity-1000'
//                   : 'translate-x-full opacity-0'
//               }`}
//               style={{ transform: `translateX(${index === currentNewsIndex ? '0%' : '100%'})` }}
//             >
//               <a
//                 href="https://example.com"
//                 className="text-white hover:text-gray-300 transition-colors"
//                 rel="noopener noreferrer"
//               >
//                 {item}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BreakingNews;


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
      <div className="bg-slate-900 text-white py-3 text-center">
        Loading breaking news...
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