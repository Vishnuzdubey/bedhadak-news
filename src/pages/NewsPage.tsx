import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TwitterTweetEmbed } from 'react-twitter-embed';

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
import NewsPreview from '../components/NewsPreview';

interface NewsArticle {
  id: string;
  _id: string;
  title: string;
  writer_name: string;
  location: string;
  date: string;
  category: string;
  // New image schema
  image_1_url?: string;
  image_2_url?: string;
  image_3_url?: string;
  image_url?: string; // For backward compatibility
  content: string;
  category_id?: number;
  approved?: boolean;
  approvedBy?: string | null;
  views?: number | null;
  breaking?: boolean;
}

interface LatestNewsArticle {
  id: string;
  _id: string;
  title: string;
  date: string;
  image_url?: string;
  image_1_url?: string; // Support new schema
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
  
  // Get primary image for display
  const getPrimaryImage = (article: NewsArticle | null): string => {
    if (!article) return dummyImage;
    return article.image_1_url || article.image_url || dummyImage;
  };
  
  // Get thumbnail image for latest news
  const getThumbnailImage = (article: LatestNewsArticle): string => {
    return article.image_1_url || article.image_url || dummyImage;
  };

  const renderArticleContent = (content: string | undefined, article: NewsArticle | null) => {
    if (!content || !article) return null;
  
    const paragraphs = content.split('\n\n');
    let secondImageInserted = false;
    let thirdImageInserted = false;
    
    return paragraphs.map((paragraph, index) => {
      // YouTube link detection (multiple formats)
      const youtubeMatch = paragraph.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      );
  
      if (youtubeMatch) {
        const videoId = youtubeMatch[1];
        return (
          <div key={`yt-${index}`} className="mb-6">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-700">
              {paragraph.replace(youtubeMatch[0], '').trim()}
            </p>
          </div>
        );
      }
  
      // Twitter embed
      const twitterMatch = paragraph.match(
        /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/
      );
      
      if (twitterMatch) {
        const tweetId = twitterMatch[3];
        return (
          <div key={`tweet-${index}`} className="mb-6">
            <TwitterTweetEmbed tweetId={tweetId} />
            <p className="mt-4 text-sm md:text-base text-gray-700">
              {paragraph.replace(twitterMatch[0], '').trim()}
            </p>
          </div>
        );
      }
      
      // Insert second image after 5 paragraphs if not already inserted
      if (index === 5 && !secondImageInserted && article.image_2_url) {
        secondImageInserted = true;
        return (
          <div key={`p2-img-${index}`} className="mb-6">
            <img
              src={article.image_2_url}
              alt={`${article.title} - additional image`}
              className="w-full rounded-lg my-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <p className="mt-2 text-sm md:text-base text-gray-700">
              {paragraph.trim()}
            </p>
          </div>
        );
      }
      
      // Insert third image after 8 paragraphs if not already inserted
      if (index === 8 && !thirdImageInserted && article.image_3_url) {
        thirdImageInserted = true;
        return (
          <div key={`p3-img-${index}`} className="mb-6">
            <img
              src={article.image_3_url}
              alt={`${article.title} - additional image`}
              className="w-full rounded-lg my-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <p className="mt-2 text-sm md:text-base text-gray-700">
              {paragraph.trim()}
            </p>
          </div>
        );
      }
      
      // Check if paragraph contains an image link
      const imageMatch = paragraph.match(/https?:\/\/\S+\.(?:jpg|jpeg|gif|png|webp)/i);
      if (imageMatch) {
        return (
          <div key={`img-${index}`} className="mb-6">
            <img
              src={imageMatch[0]}
              alt="Content"
              className="w-full rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <p className="mt-2 text-sm md:text-base text-gray-700">
              {paragraph.replace(imageMatch[0], '').trim()}
            </p>
          </div>
        );
      }
  
      // Check for other links
      const urlMatch = paragraph.match(/(https?:\/\/[^\s]+)/g);
      if (urlMatch) {
        return (
          <div key={`url-${index}`} className="mb-4">
            <p className="text-sm md:text-base text-gray-700">
              {paragraph.replace(urlMatch[0], '').trim()}
            </p>
            <a
              href={urlMatch[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline text-sm md:text-base"
            >
              {urlMatch[0]}
            </a>
          </div>
        );
      }
  
      // Regular paragraph
      return (
        <p
          key={`p-${index}`}
          className="mb-4 text-sm md:text-lg text-gray-700 leading-relaxed"
        >
          {paragraph.trim()}
        </p>
      );
    });
  };


  // Featured/hero article skeleton
// Featured/hero article skeleton
const HeroSkeleton = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 w-full min-h-screen">
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden animate-pulse mx-4">
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
  if (loading) return <HeroSkeleton />;

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

        {/* Mobile dropdown menu */}
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
        {/* Main News Section */}
        <section className="selected-news mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={getPrimaryImage(selectedNewsArticle)} 
              alt={selectedNewsArticle?.title || 'News Image'} 
              className="w-full h-48 md:h-[500px] object-cover"
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.src = dummyImage; 
              }}
            />
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-800">
                {selectedNewsArticle?.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
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
                
                {selectedNewsArticle?.location && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={solidMapMarker} className="text-green-600" />
                    <span className="text-sm md:text-base">
                      {selectedNewsArticle.location}
                    </span>
                  </div>
                )}
                
                {selectedNewsArticle?.category && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={solidTag} className="text-green-600" />
                    <span className="text-sm md:text-base">
                      {/* Access the name property of the category object */}
                      {typeof selectedNewsArticle.category === 'object' 
                        ? selectedNewsArticle.category.name 
                        : selectedNewsArticle.category}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="content-wrapper space-y-2 md:space-y-4">
                {renderArticleContent(selectedNewsArticle?.content, selectedNewsArticle)}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {latestNews.map((news) => (
                <div
                  key={news.id || news._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => window.location.href = `/NewsPage/${news.id || news._id}`}
                >
                  <img 
                    src={getThumbnailImage(news)} 
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