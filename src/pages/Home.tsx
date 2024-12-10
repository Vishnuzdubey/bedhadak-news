// import React from 'react'
// import NewsCard from '../components/NewsCard'
// import NewsSection from '../components/NewsSection'
// import ShortsSection from '../components/shortVideo/ShortsSection'
// import CategoryNews from '../components/CategoryNews/CategoryNews'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   // const navigate = useNavigate();
//   const isDarkMode = false; // or set this based on your dark mode logic
//     const newsItems = [
//     {
//       title: "बड़े आर्थिक सुधार पैकेज की घोषणा",
//       description: "सरकार ने विकास को बढ़ावा देने के लिए व्यापक आर्थिक उपायों की घोषणा की",
//       image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
//       category: "अर्थव्यवस्था",
//       id:1
//     },
//     {
//       title: "टेक कंपनी ने लॉन्च किया क्रांतिकारी प्रोडक्ट",
//       description: "नई तकनीक से प्रौद्योगिकी क्षेत्र में आएगा बड़ा बदलाव",
//       image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
//       category: "तकनीक",
//       id:2
//     },
//     {
//       title: "ऐतिहासिक जलवायु समझौता",
//       description: "विश्व नेताओं ने महत्वाकांक्षी पर्यावरण लक्ष्यों के लिए की प्रतिबद्धता",
//       image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800",
//       category: "पर्यावरण",
//       id:3
//     }
//   ];

//   const newsData = [
//     {
//     title: "Delhi",
//     mainNews: {
//       image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
//       description: "पीएम मोदी-अमित शाह ने की 'द साबरमती रिपोर्ट' की तारीफ, अब सीएम योगी से मिले विक्रांत मैसी",
//     },
//     sideNews: [
//       {
//         image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
//         description: "ऐतिहासिक जलवायु समझौता', चौथे दिन किया इतना कलेक्शन",
//       },
//       {
//         image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
//         description: "शूट किया, फिर क्यों बीच में 'करण अर्जुन' फिल्म से गुलशन ग्रोवर हुए बाहर?",
//       },
//       {
//         image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
//         description: "'तारक मेहता' छोड़ रहे जेठालाल? दिलीप जोशी ने तोड़ी चुप्पी",
//       },
//     ],
//   },{
//     title: "Gorakhpur",
//     mainNews: {
//       image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
//       description: "पीएम मोदी-अमित शाह ने की 'द साबरमती रिपोर्ट' की तारीफ, अब सीएम योगी से मिले विक्रांत मैसी",
//     },
//     sideNews: [
//       {
//         image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
//         description: "मंडे टेस्ट में दमदार कमाई के साथ पास हुई 'द साबरमती रिपोर्ट', चौथे दिन किया इतना कलेक्शन",
//       },
//       {
//         image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
//         description: "शूट किया, फिर क्यों बीच में 'करण अर्जुन' फिल्म से गुलशन ग्रोवर हुए बाहर?",
//       },
//       {
//         image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
//         description: "'तारक मेहता' छोड़ रहे जेठालाल? दिलीप जोशी ने तोड़ी चुप्पी",
//       },
//     ],
//   }];
//   interface NewsItem {
//     title: string;
//     description: string;
//     image: string;
//     category: string;
//     id: number;
//   }

//   interface MainNews {
//     image: string;
//     description: string;
//   }

//   interface SideNews {
//     image: string;
//     description: string;
//   }

//   interface CategoryNewsData {
//     title: string;
//     mainNews: MainNews;
//     sideNews: SideNews[];
//   }

//   // const handleNewsCardClick = () => {
//   //   // Navigate to NewsPage with the specific news item's ID
//   //   navigate('/NewsPage');
//   //   console.log("clicked");
//   // };
//   return (
//     <div>
//         <main className="flex-1 container mx-auto px-4 py-8">
//           <section className="mb-12">
//             <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//               प्रमुख समाचार
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {newsItems.map((news, index) => (
//                 <NewsCard 
//                   key={news.id} 
//                   {...news} 
//                   isDarkMode={isDarkMode} 
//                 />
//               ))}
//             </div>
//           </section>

//           <div className="w-full h-32 bg-red-600 rounded-lg mb-12 flex items-center justify-center text-white">
//             <p className="text-xl font-bold">विज्ञापन स्थान</p>
//           </div>

//           {/* breakingNews section */}
//           <NewsSection />
//           {/* shorts video section */}
//           <ShortsSection />
//           {newsData.map((category)=>(<CategoryNews newsData={category} />))}
//         </main>
//     </div>
//   )
// }

// export default Home

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
    'Uttar Pradesh', 
    'Gorakhpur', 
    'Delhi', 
    'Bihar', 
    'Utrakhand'
  ];

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const response = await axios.get('https://bedharak.vercel.app/api/v1/articles');
        const breakingNewsItems = response.data
          .filter((news: NewsItem) => news.breaking)
          .sort((a: NewsItem, b: NewsItem) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          )
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
        <NewsSection />
        <ShortsSection />

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
<NewsContainer categoryId="4" />;
        

        <div className="w-full h-32 bg-red-600 rounded-lg mb-12 flex items-center justify-center text-white">
          <p className="text-xl font-bold">विज्ञापन स्थान</p>
        </div>
      </main>
    </div>
  )
}

export default Home
