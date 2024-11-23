import React, { useState } from 'react'

import BreakingNews from './components/BreakingNews';
import NewsCard from './components/NewsCard';
import NewsSection from './components/NewsSection';
import ShortsSection from './components/shortVideo/ShortsSection';

import PetroliumPrice from './components/LivePrice/PetroliumPrice';
import MetalPrice from './components/LivePrice/MetalPrice';
import CategoryNews from './components/CategoryNews/CategoryNews';
import { Link } from 'react-router-dom';


// Hardcoded unique IDs for newsData
const newsData = [
    {
      id: "nd-923kjf", // Randomly generated ID for newsData
      title: "पर्यावरण",
      mainNews: {
        id: "mn-1sdj23", // Randomly generated ID for main news
        image: "https://via.placeholder.com/300x200", 
        description: "पीएम मोदी-अमित शाह ने की 'द साबरमती रिपोर्ट' की तारीफ, अब सीएम योगी से मिले विक्रांत मैसी",
      },
      sideNews: [
        {
          id: "sn-2akd92", // Randomly generated ID for each side news
          image: "https://via.placeholder.com/150x100",
          description: "ऐतिहासिक जलवायु समझौता', चौथे दिन किया इतना कलेक्शन",
        },
        {
          id: "sn-34jsk2",
          image: "https://via.placeholder.com/150x100",
          description: "शूट किया, फिर क्यों बीच में 'करण अर्जुन' फिल्म से गुलशन ग्रोवर हुए बाहर?",
        },
        {
          id: "sn-92kdj2",
          image: "https://via.placeholder.com/150x100",
          description: "'तारक मेहता' छोड़ रहे जेठालाल? दिलीप जोशी ने तोड़ी चुप्पी",
        },
      ],
    },
    {
      id: "nd-83xksf", // Another random ID for the second category
      title: "मनोरंजन",
      mainNews: {
        id: "mn-1fd9kl", // Random ID for main news
        image: "https://via.placeholder.com/300x200",
        description: "पीएम मोदी-अमित शाह ने की 'द साबरमती रिपोर्ट' की तारीफ, अब सीएम योगी से मिले विक्रांत मैसी",
      },
      sideNews: [
        {
          id: "sn-0ksd12", // Random ID for side news
          image: "https://via.placeholder.com/150x100",
          description: "मंडे टेस्ट में दमदार कमाई के साथ पास हुई 'द साबरमती रिपोर्ट', चौथे दिन किया इतना कलेक्शन",
        },
        {
          id: "sn-82ksd8",
          image: "https://via.placeholder.com/150x100",
          description: "शूट किया, फिर क्यों बीच में 'करण अर्जुन' फिल्म से गुलशन ग्रोवर हुए बाहर?",
        },
        {
          id: "sn-76jhd3",
          image: "https://via.placeholder.com/150x100",
          description: "'तारक मेहता' छोड़ रहे जेठालाल? दिलीप जोशी ने तोड़ी चुप्पी",
        },
      ],
    }
  ];
  
  // Hardcoded unique IDs for newsItems
  const newsItems = [
    {
      id: "ni-28fhj4", // Random ID for news item
      title: "बड़े आर्थिक सुधार पैकेज की घोषणा",
      description: "सरकार ने विकास को बढ़ावा देने के लिए व्यापक आर्थिक उपायों की घोषणा की",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
      category: "अर्थव्यवस्था"
    },
    {
      id: "ni-92xjsk", // Random ID for news item
      title: "टेक कंपनी ने लॉन्च किया क्रांतिकारी प्रोडक्ट",
      description: "नई तकनीक से प्रौद्योगिकी क्षेत्र में आएगा बड़ा बदलाव",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
      category: "तकनीक"
    },
    {
      id: "ni-34xjfd", // Random ID for news item
      title: "ऐतिहासिक जलवायु समझौता",
      description: "विश्व नेताओं ने महत्वाकांक्षी पर्यावरण लक्ष्यों के लिए की प्रतिबद्धता",
      image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800",
      category: "पर्यावरण"
    }
  ];
  
const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakingNews = [
    {
      id: "bn-1-72kd", 
      text: "प्रधानमंत्री ने शिक्षा क्षेत्र में बड़े बदलाव की घोषणा की"
    },
    {
      id: "bn-2-lp33", 
      text: "ब्रेकिंग: तटीय क्षेत्र में 6.2 तीव्रता का भूकंप"
    },
    {
      id: "bn-3-8h5j", 
      text: "राष्ट्रीय टीम ने अंतर्राष्ट्रीय खेल प्रतियोगिता में स्वर्ण पदक जीता"
    },
    {
      id: "bn-4-wp09", 
      text: "प्रधानमंत्री ने शिक्षा क्षेत्र में बड़े बदलाव की घोषणा की"
    },
    {
      id: "bn-5-2h8l", 
      text: "ब्रेकिंग: तटीय क्षेत्र में 6.2 तीव्रता का भूकंप"
    },
    {
      id: "bn-6-3n0p", 
      text: "राष्ट्रीय टीम ने अंतर्राष्ट्रीय खेल प्रतियोगिता में स्वर्ण पदक जीता"
    }
  ];
  

  return (
    <div>
      <BreakingNews news={breakingNews} />
    {/* navbar ads here */}
      <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Ad 1 */}
        <img
          src="https://via.placeholder.com/300x100"
          alt="Ad 1"
          className="h-[10vh] w-full object-cover "
        />
        {/* Ad 2 */}
        <img
          src="https://via.placeholder.com/300x100"
          alt="Ad 2"
          className="h-[10vh] w-full object-cover "
        />
        {/* Ad 3 */}
        <img
          src="https://via.placeholder.com/300x100"
          alt="Ad 3"
          className="h-[10vh] w-full object-cover"
        />
      </div>
    </div>

      <div className="flex justify-between">
        {/* Left Ad Space */}
        
        <div className="hidden lg:block w-1/6 min-h-screen bg-gray-200 p-4">
        {/* live Metals price  */}
        <MetalPrice/>
          <div className="sticky top-4">
            <div className="h-[600px] bg-gray-300 -lg flex items-center justify-center">
              <p className="text-gray-600 font-bold">विज्ञापन स्थान</p>
            </div>
          </div>
        </div>
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              प्रमुख समाचार
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news, index) => (
                  <Link to={`news/${news.id}`}>
                  <NewsCard key={news.id} {...news} isDarkMode={isDarkMode}  /></Link>
              ))}
            </div>
          </section>

          <div className="w-full h-32 bg-red-600 -lg mb-12 flex items-center justify-center text-white">
            <p className="text-xl font-bold">विज्ञापन स्थान</p>
          </div>

          {/* breakingNews section */}
          <NewsSection />
          {/* shorts video section */}
          <ShortsSection />
          {newsData.map((category)=>(<CategoryNews newsData={category} />))}
        </main>
{/* Right Ad Space */}
        <div className="hidden lg:block w-1/6 min-h-screen bg-gray-200 p-4">
          {/* live petrol price  */}
        <PetroliumPrice/>
          <div className="sticky top-4">
            <div className="h-[600px] bg-gray-300 -lg flex items-center justify-center">
              <p className="text-gray-600 font-bold">विज्ञापन स्थान</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
