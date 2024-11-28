import React from 'react';
import { Sun, Moon, Bell, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const TopBar: React.FC<TopBarProps> = ({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-red-600 text-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b border-red-400">
          <div className="flex items-center space-x-4">
            <span>📍 नई दिल्ली</span>
            <span>🌤️ 28°C</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-200">साइन इन</button>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Bell size={20} className="cursor-pointer" />
          </div>
        </div>

        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`text-2xl font-bold ${location.pathname === '/' ? 'text-red-200' : ''}`}>
                बेधड़क न्यूज़
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/" className={`hover:text-red-200 ${location.pathname === '/' ? 'text-red-200' : ''}`}>
                  होम
                </Link>
                <Link to="/Newspage" className={`hover:text-red-200 ${location.pathname === '/Newspage' ? 'text-red-200' : ''}`}>
                  भारत
                </Link>
                <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                  विश्व
                </a>
                <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                  व्यापार
                </a>
                <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                  टेक
                </a>
                <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                  खेल
                </a>
              </div>
            </div>
            {/* Search and Menu Components */}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`hover:text-red-200 ${location.pathname === '/' ? 'text-red-200' : ''}`}>
                होम
              </Link>
              <Link to="/Newspage" className={`hover:text-red-200 ${location.pathname === '/Newspage' ? 'text-red-200' : ''}`}>
                भारत
              </Link>
              <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                विश्व
              </a>
              <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                व्यापार
              </a>
              <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                टेक
              </a>
              <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
                खेल
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBar;