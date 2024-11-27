import React, { useState } from 'react';
import { Sun, Moon, Bell, Search, Menu, X, Heart, MessageCircle, Share2 } from 'lucide-react';
import TopBar from './components/TopBar';
import BreakingNews from './components/BreakingNews';
import NewsCard from './components/NewsCard';
import NewsSection from './components/NewsSection';
import ShortsSection from './components/shortVideo/ShortsSection';

import PetroliumPrice from './components/LivePrice/PetroliumPrice';
import MetalPrice from './components/LivePrice/MetalPrice';
import CategoryNews from './components/CategoryNews/CategoryNews';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const breakingNews = [
    "प्रधानमंत्री ने शिक्षा क्षेत्र में बड़े बदलाव की घोषणा की",
    "ब्रेकिंग: तटीय क्षेत्र में 6.2 तीव्रता का भूकंप",
    "राष्ट्रीय टीम ने अंतर्राष्ट्रीय खेल प्रतियोगिता में स्वर्ण पदक जीता",
    "प्रधानमंत्री ने शिक्षा क्षेत्र में बड़े बदलाव की घोषणा की",
    "ब्रेकिंग: तटीय क्षेत्र में 6.2 तीव्रता का भूकंप",
    "राष्ट्रीय टीम ने अंतर्राष्ट्रीय खेल प्रतियोगिता में स्वर्ण पदक जीता",
  ];

  const newsItems = [
    {
      title: "बड़े आर्थिक सुधार पैकेज की घोषणा",
      description: "सरकार ने विकास को बढ़ावा देने के लिए व्यापक आर्थिक उपायों की घोषणा की",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
      category: "अर्थव्यवस्था"
    },
    {
      title: "टेक कंपनी ने लॉन्च किया क्रांतिकारी प्रोडक्ट",
      description: "नई तकनीक से प्रौद्योगिकी क्षेत्र में आएगा बड़ा बदलाव",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
      category: "तकनीक"
    },
    {
      title: "ऐतिहासिक जलवायु समझौता",
      description: "विश्व नेताओं ने महत्वाकांक्षी पर्यावरण लक्ष्यों के लिए की प्रतिबद्धता",
      image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800",
      category: "पर्यावरण"
    }
  ];

  const newsData = [
    {
    title: "पर्यावरण",
    mainNews: {
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
      description: "पीएम मोदी-अमित शाह ने की 'द साबरमती रिपोर्ट' की तारीफ, अब सीएम योगी से मिले विक्रांत मैसी",
    },
    sideNews: [
      {
        image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
        description: "ऐतिहासिक जलवायु समझौता', चौथे दिन किया इतना कलेक्शन",
      },
      {
        image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
        description: "शूट किया, फिर क्यों बीच में 'करण अर्जुन' फिल्म से गुलशन ग्रोवर हुए बाहर?",
      },
      {
        image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
        description: "'तारक मेहता' छोड़ रहे जेठालाल? दिलीप जोशी ने तोड़ी चुप्पी",
      },
    ],
  },{
    title: "मनोरंजन",
    mainNews: {
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
      description: "पीएम मोदी-अमित शाह ने की 'द साबरमती रिपोर्ट' की तारीफ, अब सीएम योगी से मिले विक्रांत मैसी",
    },
    sideNews: [
      {
        image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
        description: "मंडे टेस्ट में दमदार कमाई के साथ पास हुई 'द साबरमती रिपोर्ट', चौथे दिन किया इतना कलेक्शन",
      },
      {
        image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
        description: "शूट किया, फिर क्यों बीच में 'करण अर्जुन' फिल्म से गुलशन ग्रोवर हुए बाहर?",
      },
      {
        image: "https://via.placeholder.com/150x100", // Replace with the actual image URL
        description: "'तारक मेहता' छोड़ रहे जेठालाल? दिलीप जोशी ने तोड़ी चुप्पी",
      },
    ],
  }];
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <TopBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <BreakingNews news={breakingNews} />
      
      <div className="flex justify-between">
        {/* Left Ad Space */}
        
        <div className="hidden lg:block w-1/6 min-h-screen bg-gray-200 p-4">
        {/* live Metals price  */}
        <MetalPrice/>
          <div className="sticky top-4">
            <div className="h-[600px] bg-gray-300 rounded-lg flex items-center justify-center">
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
                <NewsCard key={index} {...news} isDarkMode={isDarkMode}  />
              ))}
            </div>
          </section>

          <div className="w-full h-32 bg-red-600 rounded-lg mb-12 flex items-center justify-center text-white">
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
            <div className="h-[600px] bg-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 font-bold">विज्ञापन स्थान</p>
            </div>
          </div>
        </div>
      </div>
     
      <footer className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-red-600 text-white'} py-8`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">हमारे बारे में</h3>
              <p>बेधड़क न्यूज़ - निष्पक्ष समाचार का विश्वसनीय स्रोत</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">श्रेणियाँ</h3>
              <ul>
                <li className="mb-2">राजनीति</li>
                <li className="mb-2">व्यापार</li>
                <li className="mb-2">तकनीक</li>
                <li className="mb-2">मनोरंजन</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">फॉलो करें</h3>
              <ul>
                <li className="mb-2">फेसबुक</li>
                <li className="mb-2">ट्विटर</li>
                <li className="mb-2">इंस्टाग्राम</li>
                <li className="mb-2">लिंक्डइन</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">संपर्क</h3>
              <ul>
                <li className="mb-2">ईमेल: contact@bedhadak.news</li>
                <li className="mb-2">फोन: +91 123-456-7890</li>
                <li className="mb-2">पता: न्यूज़ स्ट्रीट, मीडिया सिटी</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;