// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faFacebook, faTwitter, faWhatsapp, 
//   faLinkedin, faTelegram 
// } from '@fortawesome/free-brands-svg-icons';
// import { 
//   faMapMarkerAlt as solidMapMarker, 
//   faUser as solidUser, 
//   faCalendar as solidCalendar, 
//   faTag as solidTag 
// } from '@fortawesome/free-solid-svg-icons';

// const NewsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);
//   const [latestNews, setLatestNews] = useState([]);
//   const [socialLinks, setSocialLinks] = useState({});
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const dummyImage = 'https://media.istockphoto.com/id/2151295139/photo/professional-online-gamer-hand-fingers.jpg?s=2048x2048&w=is&k=20&c=ZoyDd30pW40sgpxtg-zFypggmSfv9554TWhzpuha5FE=';

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const fetchArticleData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Validate ID
//         if (!id) {
//           throw new Error('No article ID provided');
//         }

//         // Fetch all articles
//         const articleResponse = await axios.get(
//           `https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000`
//         );
        
//         // Log the entire response for debugging
//         console.log('Full API Response:', articleResponse.data);

//         // Determine articles array (handle different response structures)
//         const articles = Array.isArray(articleResponse.data) 
//           ? articleResponse.data 
//           : articleResponse.data.articles || [];

//         if (!articles || articles.length === 0) {
//           throw new Error('No articles found in the response');
//         }

//         // Find specific article with flexible matching
//         const specificArticle = articles.find(article => 
//           article.id == id || article._id == id
//         );

//         if (!specificArticle) {
//           throw new Error(`Article with ID ${id} not found`);
//         }

//         setSelectedNewsArticle(specificArticle);

//         // Fetch latest news
//         const latestNewsResponse = await axios.get(
//           'https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000'
//         );
        
//         const sortedLatestNews = (
//           Array.isArray(latestNewsResponse.data) 
//             ? latestNewsResponse.data 
//             : latestNewsResponse.data.articles || []
//         )
//           .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date))
//           .filter(news => news.id != id && news._id != id)
//           .slice(0, 3);
        
//         setLatestNews(sortedLatestNews);

//         // Set social links
//         setSocialLinks({
//           facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
//           twitter: `https://twitter.com/intent/tweet?url=${window.location.href}`,
//           whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
//           linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`,
//           telegram: `https://telegram.me/share/url?url=${window.location.href}`
//         });

//       } catch (err) {
//         console.error('Error fetching article data:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticleData();
//   }, [id]);

//   const handleSocialMediaClick = (platform) => {
//     const link = socialLinks[platform];
//     if (link) {
//       window.open(link, '_blank');
//     }
//   };

//   // Format date with more readable output
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Date not available';
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//       });
//     } catch {
//       return 'Invalid Date';
//     }
//   };

//   // Loading Component
//   const LoadingSpinner = () => (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
//       <div className="relative">
//         <div className="animate-spin rounded-full h-24 w-24 md:h-32 md:w-32 border-[3px] border-t-red-600 border-r-red-400 border-b-red-600 border-l-red-400 shadow-lg"></div>
//         <div className="absolute inset-0 rounded-full animate-pulse bg-red-50 opacity-20"></div>
//       </div>
//       <div className="mt-4 text-red-600 font-medium animate-pulse">
//         Loading News...
//       </div>
//     </div>
//   );

//   // Error Component
//   const ErrorDisplay = () => (
//     <div className="flex flex-col justify-center items-center min-h-screen p-4 text-center">
//       <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Article</h2>
//       <p className="text-gray-700 mb-4">{error || 'An unexpected error occurred'}</p>
//       <button 
//         onClick={() => {
//           setError(null);
//           navigate('/'); // Navigate to home or news listing page
//         }}
//         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//       >
//         Go to Home
//       </button>
//     </div>
//   );

//   // Render loading state
//   if (loading) return <LoadingSpinner />;

//   // Render error state
//   if (error) return <ErrorDisplay />;

//   return (
//     <div className="news-page bg-gray-50 font-sans min-h-screen w-full">
//       {/* Header with mobile responsiveness */}
//       <header className="bg-green-600 text-white py-4 px-4 md:px-6 shadow-md">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <span className="text-xl font-bold">{selectedNewsArticle?.title || 'News Page'}</span>
//             <button 
//               className="md:hidden ml-4 focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
          
//           {/* Social share buttons for desktop and mobile */}
//           <div className="hidden md:flex space-x-4">
//             {[
//               { icon: faFacebook, platform: 'facebook' },
//               { icon: faTwitter, platform: 'twitter' },
//               { icon: faWhatsapp, platform: 'whatsapp' },
//               { icon: faLinkedin, platform: 'linkedin' },
//               { icon: faTelegram, platform: 'telegram' }
//             ].map(({ icon, platform }, index) => (
//               <button 
//                 key={index} 
//                 className="text-white hover:text-green-200 focus:outline-none transition-colors"
//                 onClick={() => handleSocialMediaClick(platform)}
//               >
//                 <FontAwesomeIcon icon={icon} size="lg" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Mobile dropdown menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4 space-y-2">
//             <div className="flex justify-start space-x-4 mt-4">
//               {[
//                 { icon: faFacebook, platform: 'facebook' },
//                 { icon: faTwitter, platform: 'twitter' },
//                 { icon: faWhatsapp, platform: 'whatsapp' },
//                 { icon: faLinkedin, platform: 'linkedin' },
//                 { icon: faTelegram, platform: 'telegram' }
//               ].map(({ icon, platform }, index) => (
//                 <button 
//                   key={index} 
//                   className="text-white hover:text-green-200 focus:outline-none transition-colors"
//                   onClick={() => handleSocialMediaClick(platform)}
//                 >
//                   <FontAwesomeIcon icon={icon} size="lg" />
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Main content with full width */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Main News Section */}
//         <section className="selected-news mb-8">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             {/* New Metadata Section */}
//             <div className="px-4 md:px-6 pt-4 md:pt-6 pb-2 bg-gray-50 border-b">
//               <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
//                 {/* Writer Name */}
//                 <div className="flex items-center space-x-2">
//                   <FontAwesomeIcon icon={solidUser} className="text-green-600" />
//                   <span>{selectedNewsArticle?.writer_name || 'Unknown Author'}</span>
//                 </div>

//                 {/* Location */}
//                 {selectedNewsArticle?.location && (
//                   <div className="flex items-center space-x-2">
//                     <FontAwesomeIcon icon={solidMapMarker} className="text-green-600" />
//                     <span>{selectedNewsArticle.location}</span>
//                   </div>
//                 )}

//                 {/* Date */}
//                 <div className="flex items-center space-x-2">
//                   <FontAwesomeIcon icon={solidCalendar} className="text-green-600" />
//                   <span>{formatDate(selectedNewsArticle?.date)}</span>
//                 </div>

//                 {/* Category */}
//                 {selectedNewsArticle?.category && (
//                   <div className="flex items-center space-x-2">
//                     <FontAwesomeIcon icon={solidTag} className="text-green-600" />
//                     <span>{selectedNewsArticle.category}</span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Article Image */}
//             <img 
//               src={selectedNewsArticle?.image_url || dummyImage} 
//               alt={selectedNewsArticle?.title || 'News Image'} 
//               className="w-full h-48 md:h-[500px] object-cover"
//               onError={(e) => { e.target.src = dummyImage; }}
//             />

//             {/* Article Content */}
//             <div className="p-4 md:p-6">
//               <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-800">
//                 {selectedNewsArticle?.title}
//               </h2>
              
//               <div 
//                 className="text-sm md:text-lg text-gray-700 leading-relaxed space-y-2 md:space-y-4"
//                 dangerouslySetInnerHTML={{ __html: selectedNewsArticle?.content }}
//               />
//             </div>
//           </div>
//         </section>

//         {/* Latest News Section */}
//         <section className="latest-news">
//           <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Latest News</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             {latestNews.map((news) => (
//               <div
//                 key={news.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
//                 onClick={() => window.location.href = `/NewsPage/${news.id}`}
//               >
//                 <img 
//                   src={news.image_url || dummyImage} 
//                   alt={news.title} 
//                   className="w-full h-36 md:h-48 object-cover rounded-t-lg"
//                   onError={(e) => { e.target.src = dummyImage; }}
//                 />
//                 <div className="p-2 md:p-4">
//                   <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">
//                     {news.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-gray-500">
//                     {news.date 
//                       ? new Date(news.date).toLocaleString() 
//                       : 'Date not available'}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default NewsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, faTwitter, faWhatsapp, 
  faLinkedin, faTelegram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt as solidMapMarker, 
  faUser as solidUser, 
  faCalendar as solidCalendar, 
  faTag as solidTag 
} from '@fortawesome/free-solid-svg-icons';

interface NewsArticle {
  id: string;
  _id: string;
  title: string;
  writer_name: string;
  location: string;
  date: string;
  category: string;
  image_url: string;
  content: string;
}

interface LatestNewsArticle {
  id: string;
  _id: string;
  title: string;
  date: string;
  image_url: string;
}

interface SocialLinks {
  [key: string]: string;
}

const NewsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [selectedNewsArticle, setSelectedNewsArticle] = useState<NewsArticle | null>(null);
  const [latestNews, setLatestNews] = useState<LatestNewsArticle[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dummyImage = 'https://media.istockphoto.com/id/2151295139/photo/professional-online-gamer-hand-fingers.jpg?s=2048x2048&w=is&k=20&c=ZoyDd30pW40sgpxtg-zFypggmSfv9554TWhzpuha5FE=';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Validate ID
        if (!id) {
          throw new Error('No article ID provided');
        }

        // Fetch all articles
        const articleResponse = await axios.get(
          `https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000`
        );
        console.log('Full API Response:', articleResponse.data);
        
        // Determine articles array (handle different response structures)
        const articles: NewsArticle[] = Array.isArray(articleResponse.data) 
          ? articleResponse.data 
          : articleResponse.data.articles || [];

        if (!articles || articles.length === 0) {
          throw new Error('No articles found in the response');
        }

        // Find specific article with flexible matching
        const specificArticle: NewsArticle | undefined = articles.find((article) => 
          article.id == id || article._id == id
        );

        if (!specificArticle) {
          throw new Error(`Article with ID ${id} not found`);
        }

        setSelectedNewsArticle(specificArticle);

        // Fetch latest news
        const latestNewsResponse = await axios.get(
          'https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000'
        );
        console.log('Latest News Response:', latestNewsResponse.data);

        const sortedLatestNews: LatestNewsArticle[] = (
          Array.isArray(latestNewsResponse.data) 
            ? latestNewsResponse.data 
            : latestNewsResponse.data.articles || []
        )
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .filter((news) => news.id != id && news._id != id)
          .slice(0, 3);
        
        setLatestNews(sortedLatestNews);

        // Set social links
        setSocialLinks({
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
          twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
          whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
          linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`,
          telegram: `https://telegram.me/share/url?url=${encodeURIComponent(window.location.href)}`
        });

      } catch (err: any) {
        console.error('Error fetching article data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  const handleSocialMediaClick = (platform: keyof SocialLinks) => {
    const link = socialLinks[platform];
    if (link) {
      window.open(link, '_blank');
    }
  };

  // Safe date formatting with fallback
  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return 'Date not available';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const renderArticleContent = (content: string | undefined) => {
    if (!content) return null;

    // Replace multiple newline characters and ensure consistent paragraph breaks
    const formattedContent = content
      .replace(/\n\n+/g, '\n\n') // Normalize multiple newlines
      .split('\n\n')
      .map((paragraph, index) => (
        <p 
          key={index} 
          className="mb-4 text-sm md:text-lg text-gray-700 leading-relaxed"
        >
          {paragraph.trim()}
        </p>
      ));

    return formattedContent;
  };


  // Loading Component
  const LoadingSpinner = () => (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="relative">
        <div className="animate-spin rounded-full h-24 w-24 md:h-32 md:w-32 border-[3px] border-t-red-600 border-r-red-400 border-b-red-600 border-l-red-400 shadow-lg"></div>
        <div className="absolute inset-0 rounded-full animate-pulse bg-red-50 opacity-20"></div>
      </div>
      <div className="mt-4 text-red-600 font-medium animate-pulse">
        Loading News...
      </div>
    </div>
  );

  // Error Component
  const ErrorDisplay = () => (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Article</h2>
      <p className="text-gray-700 mb-4">{error || 'An unexpected error occurred'}</p>
      <button 
        onClick={() => {
          setError(null);
          navigate('/'); // Navigate to home or news listing page
        }}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Go to Home
      </button>
    </div>
  );

  // Render loading state
  if (loading) return <LoadingSpinner />;

  // Render error state
  if (error) return <ErrorDisplay />;

  // Fallback for when selectedNewsArticle is null
  if (!selectedNewsArticle) {
    return <ErrorDisplay />;
  }

  return (
    <div className="news-page bg-gray-50 font-sans min-h-screen w-full">
      <header className="bg-green-600 text-white py-4 px-4 md:px-6 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              {selectedNewsArticle?.title || 'News Page'}
            </span>
            <button 
              className="md:hidden ml-4 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {[
              { icon: faFacebook, platform: 'facebook' },
              { icon: faTwitter, platform: 'twitter' },
              { icon: faWhatsapp, platform: 'whatsapp' },
              { icon: faLinkedin, platform: 'linkedin' },
              { icon: faTelegram, platform: 'telegram' }
            ].map(({ icon, platform }, index) => (
              <button 
                key={index} 
                className="text-white hover:text-green-200 focus:outline-none transition-colors"
                onClick={() => handleSocialMediaClick(platform as keyof SocialLinks)}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dropdown menu remains the same */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <div className="flex justify-start space-x-4 mt-4">
              {[
                { icon: faFacebook, platform: 'facebook' },
                { icon: faTwitter, platform: 'twitter' },
                { icon: faWhatsapp, platform: 'whatsapp' },
                { icon: faLinkedin, platform: 'linkedin' },
                { icon: faTelegram, platform: 'telegram' }
              ].map(({ icon, platform }, index) => (
                <button 
                  key={index} 
                  className="text-white hover:text-green-200 focus:outline-none transition-colors"
                  onClick={() => handleSocialMediaClick(platform as keyof SocialLinks)}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* <section className="selected-news mb-8">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-4/5 md:pr-8">
            {/* Main News Section */}
            <section className="selected-news mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={selectedNewsArticle?.image_url || dummyImage} 
                  alt={selectedNewsArticle?.title || 'News Image'} 
                  className="w-full h-48 md:h-[500px] object-cover"
                  onError={(e) => { e.target.src = dummyImage; }}
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-800">
                    {selectedNewsArticle?.title}
                  </h2>


              <div className="flex items-center space-x-4 mb-4 text-gray-600">
                {selectedNewsArticle?.writer_name && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={solidUser} className="text-green-600" />
                    <span className="text-sm md:text-base font-medium">
                      {selectedNewsArticle.writer_name}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={solidCalendar} className="text-green-600" />
                  <span className="text-sm md:text-base">
                    {formatDate(selectedNewsArticle?.date)}
                  </span>
                </div>
              </div>
              <div className="content-wrapper space-y-2 md:space-y-4">
                {renderArticleContent(selectedNewsArticle?.content)}
              </div>
                </div>
              </div>
            </section>

        {/* Latest News Section */}
        {latestNews.length > 0 && (
          <section className="latest-news">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
              Latest News
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {latestNews.map((news) => (
                <div
                  key={news.id || news._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => window.location.href = `/NewsPage/${news.id || news._id}`}
                >
                  <img 
                    src={news.image_url || dummyImage} 
                    alt={news.title || 'News Image'} 
                    className="w-full h-36 md:h-48 object-cover rounded-t-lg"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.src = dummyImage; 
                    }}
                  />
                  <div className="p-2 md:p-4">
                    <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">
                      {news.title || 'Untitled News'}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500">
                      {news.date 
                        ? new Date(news.date).toLocaleString() 
                        : 'Date not available'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default NewsPage;