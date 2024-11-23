import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Home from './Home';

import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import ShowNews from './components/showNews.jsx/ShowNews';
import ContactUs from './components/ContactUs/ContactUs';
import UrlNotFound from './components/UrlNotFound';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <TopBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/:categories' element={<ShowNews />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='*' element={<UrlNotFound/>}/>
        </Routes>
      
     
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
                <li><Link to='/news/politics' className='hover:text-red-500'>राजनीति</Link></li>
                <li><Link to='/news/business' className='hover:text-red-500'>व्यापार</Link></li>
                <li><Link to='/news/world' className='hover:text-red-500'>विश्व</Link></li>
                <li><Link to='/news/tech' className='hover:text-red-500'>तकनीक</Link></li>
                <li><Link to='/news/entertainment' className='hover:text-red-500'>मनोरंजन</Link></li>
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
      </BrowserRouter>
  );
}

export default App;