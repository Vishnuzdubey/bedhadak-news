import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import NewsSection from '../components/NewsSection'
import ShortsSection from '../components/shortVideo/ShortsSection'
import CategoryNews from '../components/CategoryNews/CategoryNews'
import { useNavigate } from 'react-router-dom'
import NewsContainer from '../components/CategoryNews/NewsContainer'
import axios from 'axios'

interface NewsItem {
  id: number;
  title: string;
  location: string;
  content: string;
  image_1_url: string | null;
  writer_name: string;
  date: string;
  breaking: boolean;
  category: string | null;
}

interface MainNews {
  image: string;
  description: string;
}

interface SideNews {
  image: string;
  description: string;
}

interface CategoryNewsData {
  title: string;
  mainNews: MainNews;
  sideNews: SideNews[];
}

const Home = () => {
  const navigate = useNavigate();
  const isDarkMode = false;

  const [breakingNews, setBreakingNews] = useState<NewsItem[]>([]);
  const [cityNews, setCityNews] = useState<{ [key: string]: NewsItem[] }>({});
  const [loading, setLoading] = useState(true);


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

  const cities = [
    'uttar pardesh', 
    'Gorakhpur', 
    'Delhi', 
    'Bihar', 
    'Utrakhand'
  ];

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const response = await axios.get('https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000');
        
        // Filter breaking news and sort by most recent date
        const breakingNewsItems = response.data
          .filter((news: NewsItem) => news.breaking)
          .sort((a: NewsItem, b: NewsItem) => 
            // Use getTime() to compare dates directly
            new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          // Optionally limit to top 3 most recent breaking news
          .slice(0, 3);
        
        setBreakingNews(breakingNewsItems);
      } catch (error) {
        console.error('Error fetching breaking news:', error);
      }
    };
    const fetchCityNews = async () => {
      try {
        const cityNewsPromises = cities.map(async (city) => {
          const response = await axios.get(`https://bedharak.vercel.app/api/v1/articles/location/${city}`);
          return { [city]: response.data.slice(0, 3) };
        });

        const cityNewsResults = await Promise.all(cityNewsPromises);
        const cityNewsMap = cityNewsResults.reduce((acc, curr) => ({...acc, ...curr}), {});
        
        setCityNews(cityNewsMap);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching city news:', error);
        setLoading(false);
      }
    };

    fetchBreakingNews();
    fetchCityNews();
  }, []);

  const handleNewsCardClick = (articleId: number) => {
    console.log(articleId);
    navigate(`/NewsPage/${articleId}`);
  };

  if (loading) {
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
  }

  return (
    <div>
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breaking News Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ब्रेकिंग न्यूज़
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakingNews.map((news) => (
              <NewsCard 
              key={news.id} 
              title={news.title}
              description={news.content.split(' ').slice(0, 10).join(' ') + '...'}
              image={news.image_1_url || 'https://via.placeholder.com/300x200'}
              category={news.location}
              id={news.id}
              isDarkMode={isDarkMode}
              onClick={() => handleNewsCardClick(news.id)}
              />
            ))}
          </div>
        </section>

        {/* Other Sections */}
        {/* <NewsSection /> */}
        {/* <ShortsSection /> */}

        {/* City News Sections */}
        {Object.entries(cityNews).map(([city, newsItems]) => (
          <div key={city} className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {city} की ताज़ा खबरें
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news) => (
                <NewsCard 
                  key={news.id} 
                  title={news.title}
                  description={news.content.split(' ').slice(0, 8).join(' ') + '...'}
                  image={news.image_1_url || 'https://via.placeholder.com/300x200'}
                  category={news.location}
                  id={news.id}
                  isDarkMode={isDarkMode}
                  onClick={() => handleNewsCardClick(news.id)}
                />
              ))}
            </div>
          </div>
        ))}

<CategoryNews categoryId="4" />
{/* <NewsContainer categoryId="4" />; */}
        

        {/* <div className="w-full h-32 bg-red-600 rounded-lg mb-12 flex items-center justify-center text-white">
          <p className="text-xl font-bold">विज्ञापन स्थान</p>
        </div> */}
      </main>
    </div>
  )
}

export default Home
