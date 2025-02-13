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
  image_url: string | null;
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
    return <div>Loading...</div>;
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
              image={news.image_url || 'https://via.placeholder.com/300x200'}
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
                  image={news.image_url || 'https://via.placeholder.com/300x200'}
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
