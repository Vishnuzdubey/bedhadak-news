import React from 'react';
import { Sun, Moon, Bell, Search, Menu, X, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = ({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-red-600 text-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b border-red-400">
          <div className="flex items-center space-x-4">
            <span>📍 नई दिल्ली</span>
            <span>🌤️ 28°C</span>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={20} className="cursor-pointer" />
            <Youtube size={20} className="cursor-pointer" />
            <Instagram size={20} className="cursor-pointer" />
            <Twitter size={20} className="cursor-pointer" />
            <button className="hover:text-red-200">विज्ञापन के लिए संपर्क करें</button>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Bell size={20} className="cursor-pointer" />
          </div>
        </div>

        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">बेधड़क न्यूज़</h1>
              <div className="hidden md:flex items-center space-x-6">
                <Link to='/' className='hover:text-red-500'>होम</Link>
                <Link to='/news/india' className='hover:text-red-500'>भारत</Link>
                <Link to='/news/world' className='hover:text-red-500'>विश्व</Link>
                <Link to='/news/business' className='hover:text-red-500'>व्यापार</Link>
                <Link to='/news/tech' className='hover:text-red-500'>टेक</Link>
                <Link to='/news/sports' className='hover:text-red-500'>खेल</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="समाचार खोजें..."
                  className="bg-red-700 text-white placeholder-red-200 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-red-200">होम</a>
              <a href="#" className="hover:text-red-200">भारत</a>
              <a href="#" className="hover:text-red-200">विश्व</a>
              <a href="#" className="hover:text-red-200">व्यापार</a>
              <a href="#" className="hover:text-red-200">टेक</a>
              <a href="#" className="hover:text-red-200">खेल</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBar;
