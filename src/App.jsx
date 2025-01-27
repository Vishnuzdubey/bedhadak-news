import React, { useState ,useEffect} from 'react';
import { Sun, Moon, Bell, Search, Menu, X, Heart, MessageCircle, Share2 } from 'lucide-react';
import TopBar from './components/TopBar';
import BreakingNews from './components/BreakingNews';
import NewsCard from './components/NewsCard';
import NewsSection from './components/NewsSection';
import ShortsSection from './components/shortVideo/ShortsSection';
import NewsPage from './pages/NewsPage';
import Home from './pages/Home';
import ContactUs from './pages/Contactus/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PetroliumPrice from './components/LivePrice/PetroliumPrice';
import MetalPrice from './components/LivePrice/MetalPrice';
import CategoryNews from './components/CategoryNews/CategoryNews';
import NewsContainer from './components/CategoryNews/NewsContainer';
import {Advertisement} from './pages/Advertisement'
import EPaperPage from './pages/EPaperPage';
import {midimage} from './components/midimage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [allAds , setAllAds] = useState([]);
  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch("https://bedharak.vercel.app/api/v1/advertisement");
      const data = await response.json();
      setAllAds(data);
    }
    fetchAds();
  }, [])
  console.log("addddsssssss ")
  console.log(allAds)

  // const breakingNews = [
  //   "प्रधानमंत्री ने शिक्षा क्षेत्र में बड़े बदलाव की घोषणा की",
  //   "ब्रेकिंग: तटीय क्षेत्र में 6.2 तीव्रता का भूकंप",
  //   "राष्ट्रीय टीम ने अंतर्राष्ट्रीय खेल प्रतियोगिता में स्वर्ण पदक जीता",
  //   "प्रधानमंत्री ने शिक्षा क्षेत्र में बड़े बदलाव की घोषणा की",
  //   "ब्रेकिंग: तटीय क्षेत्र में 6.2 तीव्रता का भूकंप",
  //   "राष्ट्रीय टीम ने अंतर्राष्ट्रीय खेल प्रतियोगिता में स्वर्ण पदक जीता",
  // ];


  return (
    <Router>
    <div className={`min-h-screen overflow-x-auto ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <TopBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* <midimage></midimage> */}


      <div className="h-30 w-full md: h-full overflow-hidden bg-gray-100">
      {allAds.length > 0 ? (
        <img 
          src={allAds[1].image_url} 
          alt="Advertisement"
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <p className="text-gray-600 font-bold h-full flex items-center justify-center">
          विज्ञापन स्थान
        </p>
      )}
    </div>





      <BreakingNews/>
      
      <div className="flex justify-center">
        {/* Left Ad Space */}
        
        <div className="hidden lg:block w-1/6 min-h-screen bg-gray-200 p-4">
        {/* live Metals price  */}
        <MetalPrice/>
          <div className="sticky top-4">
            <div className="h-[600px] bg-gray-300 rounded-lg flex items-center justify-center">
            {(allAds.length > 0) ? <img src={allAds[0].image_url} alt="Advertisement" /> : <p className="text-gray-600 font-bold">विज्ञापन स्थान  </p>}
              {/* <p className="text-gray-600 font-bold">विज्ञापन स्थान  </p> */}
            </div>
          </div>
        </div>
        

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Newspage/:id" element={<NewsPage />} />  
            <Route exact path="/Contactus" element={<ContactUs />} />
            <Route exact path="/india" element={<NewsContainer categoryId={4} />} />
            <Route exact path="/world" element={<NewsContainer categoryId={5} />} />
            <Route exact path="/business" element={<NewsContainer categoryId={6} />} />
            <Route exact path="/tech" element={<NewsContainer categoryId={1} />} />
            <Route exact path="/sports" element={<NewsContainer categoryId={3} />} />
            <Route exact path="/entertainment" element={<NewsContainer categoryId={2} />} />
            <Route exact path="/politics" element={<NewsContainer categoryId={7} />} />
            <Route exact path="/health" element={<NewsContainer categoryId={8} />} />
            <Route exact path="/auto" element={<NewsContainer categoryId={9} />} />
            {/* <Route exact path="/up" element={<NewsContainer categoryId={4} />} /> */}
            <Route exact path="/uk" element={<NewsContainer location="utrakhand" />} />
            <Route exact path="/delhi" element={<NewsContainer location="Delhi" />} />
            <Route exact path="/gkp" element={<NewsContainer location="Gorakhpur" />} />
            <Route exact path="/up" element={<NewsContainer location="uttar pardesh" />} />
            <Route exact path="/Advertisement" element={<Advertisement></Advertisement>} />
            <Route exact path="/EPaper" element={<EPaperPage></EPaperPage>} />
          </Routes>


{/* Right Ad Space */}
        <div className="hidden lg:block w-1/6 min-h-screen bg-gray-200 p-4">
          {/* live petrol price  */}
        <PetroliumPrice/>
          <div className="sticky top-4">
            <div className="h-[600px] bg-gray-300 rounded-lg flex items-center justify-center">
            {/* <img src={allAds[0].image_url} alt="Advertisement" /> */}
            {(allAds.length > 0) ? <img src={allAds[2].image_url} alt="Advertisement" /> : <p className="text-gray-600 font-bold">विज्ञापन स्थान  </p>}
            {/* <p className="text-gray-600 font-bold">विज्ञापन स्थान mm</p> */}
            </div>
          </div>
        </div>
      </div>
     
      <footer className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} py-8`}>
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
                <li className="mb-2">ईमेल: bedhadakkhabar@gmail.com</li>
                <li className="mb-2">फोन: +91 9336265008</li>
                <li className="mb-2">पता: Dubey Marg Near Telephone Exchange Colony, Gorakhpur 273001</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

// export default App;
