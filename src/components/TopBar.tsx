// import React from 'react';
// import { Sun, Moon, Bell, Search, Menu, X, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface TopBarProps {
//   isDarkMode: boolean;
//   setIsDarkMode: (value: boolean) => void;
//   isMenuOpen: boolean;
//   setIsMenuOpen: (value: boolean) => void;
// }

// const TopBar: React.FC<TopBarProps> = ({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }) => {
//   return (
//     <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-red-600 text-white'}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-2 border-b border-red-400">
// <div className="flex items-center space-x-4">
//   <span>📍 नई दिल्ली</span>
//   <span>🌤️ 28°C</span>
// </div>

//           <div className="flex items-center space-x-4">
//             <Facebook size={20} className="cursor-pointer" />
//             <Youtube size={20} className="cursor-pointer" />
//             <Instagram size={20} className="cursor-pointer" />
//             <Twitter size={20} className="cursor-pointer" />
// <button className="hover:text-red-200">विज्ञापन के लिए संपर्क करें</button>
//             <button onClick={() => setIsDarkMode(!isDarkMode)}>
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <Bell size={20} className="cursor-pointer" />
//           </div>


//           {/* <div className="flex items-center space-x-4">
//             <button className="hover:text-red-200">साइन इन</button>
//             <button onClick={() => setIsDarkMode(!isDarkMode)}>
//               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <Bell size={20} className="cursor-pointer" />
//           </div> */}
//         </div>

//         <div className="py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-8">
//               <Link to="/" className={`text-2xl font-bold ${location.pathname === '/' ? 'text-red-200' : ''}`}>
//                 बेधड़क न्यूज़
//               </Link>
//               <div className="hidden md:flex items-center space-x-6">
//                 <Link to="/" className={`hover:text-red-200 ${location.pathname === '/' ? 'text-red-200' : ''}`}>
//                   होम
//                 </Link>
//                 <Link to="/Newspage" className={`hover:text-red-200 ${location.pathname === '/Newspage' ? 'text-red-200' : ''}`}>
//                   भारत
//                 </Link>
//                 <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                   विश्व
//                 </a>
//                 <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                   व्यापार
//                 </a>
//                 <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                   टेक
//                 </a>
//                 <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                   खेल
//                 </a>
//                 <Link to="/ContactUs" className={`hover:text-red-200 ${location.pathname === '/ContactUs' ? 'text-red-200' : ''}`}>
//                 हमारे बारे में
//                 </Link>
//               </div>
//             </div>
//             {/* Search and Menu Components */}
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden py-4">
//             <div className="flex flex-col space-y-4">
//               <Link to="/" className={`hover:text-red-200 ${location.pathname === '/' ? 'text-red-200' : ''}`}>
//                 होम
//               </Link>
//               <Link to="/Newspage" className={`hover:text-red-200 ${location.pathname === '/Newspage' ? 'text-red-200' : ''}`}>
//                 भारत
//               </Link>
//               <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                 विश्व
//               </a>
//               <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                 व्यापार
//               </a>
//               <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                 टेक
//               </a>
//               <a href="#" className="hover:text-red-200" onClick={(e) => e.preventDefault()}>
//                 खेल
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default TopBar;

import React, { useState } from "react";
import {
  Sun,
  Moon,
  Bell,
  Search,
  Menu,
  X,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
  MapPin,
  Newspaper,
  TrendingUp,
  Rocket,
  Film,
  Briefcase,
  Gauge,
  Globe,
  Mic,
  Award,
  Zap,
} from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const TopBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const mainNavItems = [
    { name: "होम", path: "/", icon: Newspaper },
    { name: "भारत", path: "/india", icon: MapPin },
    { name: "विश्व", path: "/world", icon: Globe },
    { name: "व्यापार", path: "/business", icon: Briefcase },
    { name: "टेक", path: "/tech", icon: Zap },
    { name: "खेल", path: "/sports", icon: Award },
    { name: "मनोरंजन", path: "/entertainment", icon: Film },
    { name: "राजनीति", path: "/politics", icon: TrendingUp },
    { name: "स्वास्थ्य", path: "/health", icon: Rocket },
    { name: "ऑटो", path: "/auto", icon: Gauge },
  ];

  const categoryGroups = [
    {
      title: "समाचार",
      items: [
        "ताजा समाचार",
        "राष्ट्रीय",
        "अंतरराष्ट्रीय",
        "राजनीतिक"
      ]
    },
    {
      title: "मनोरंजन",
      items: [
        "बॉलीवुड",
        "टीवी",
        "वेब सीरीज़",
        "सेलेब न्यूज़"
      ]
    },
    {
      title: "खेल",
      items: [
        "क्रिकेट",
        "फुटबॉल",
        "टेनिस",
        "अन्य खेल"
      ]
    }
  ];

  return (
    <nav
      className={`
        ${isDarkMode
          ? 'bg-gradient-to-r from-gray-900 to-gray-800'
          : 'bg-gradient-to-r from-red-700 to-red-600'
        } 
        text-white shadow-2xl transition-all duration-300 ease-in-out
      `}
    >
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-4 ">
          <span className="mt-2">📍 नई दिल्ली</span>
          <span className="mt-2">🌤️ 28°C</span>
        </div>

        <div className="flex items-center space-x-4 mt-2 mr-10 font-bold text-sm">
          <Link to="/ContactUs" className={`mr-3 flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium
                  transition-all duration-300 ease-in-out whitespace-nowrap ${location.pathname === '/ContactUs'
              ? 'bg-white text-red-600'
              : 'hover:bg-white/10'} `}>विज्ञापन के लिए संपर्क करें</Link>
          RNI - UP/UPHIN/2022/84152
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-1 border-b border-opacity-20 border-white">
  <div className="flex items-center space-x-4">
    <img 
      src={logo} 
      alt="logo" 
      className="w-24 h-auto min-w-[80px] md:w-36 lg:w-48 object-contain"
    />
</div>




        <div className="flex items-center space-x-4">
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Facebook, color: "text-blue-600" },
              { Icon: Twitter, color: "text-sky-400" },
              { Icon: Instagram, color: "text-pink-500" },
              { Icon: Youtube, color: "text-green-600" },
              { Icon: Mic, color: "text-purple-500" }
            ].map(({ Icon, color }, index) => (
              <button
                key={index}
                className={`${color} hover:opacity-80 transition-opacity`}
              >
                <Icon size={28} />
              </button>
            ))}
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hover:bg-white/10 rounded-full p-2 transition-all"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Notifications */}
          <button className="hover:bg-white/10 rounded-full p-2 transition-all">
            <Bell size={24} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-white/10 rounded-full p-2 transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      {/* Horizontally Scrollable Navigation */}
      <div className="overflow-x-auto bg-black/20 py-2 px-2 flex align-center">
        <div className="flex space-x-4 min-w-max ">
          {mainNavItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.path}
                className={`
                  flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 ease-in-out whitespace-nowrap
                  ${location.pathname === item.path
                    ? 'bg-white text-red-600'
                    : 'hover:bg-white/10'}
                `}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <Link to="/ContactUs" className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-white/10 ml-10                   
        ${location.pathname === '/ContactUs'
            ? 'bg-white text-red-600'
            : 'hover:bg-white/10'}`}><Bell p-10 size={20} />हमारे बारे में</Link>
      </div>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div className="bg-gray-900 text-white py-6 px-4 space-y-6">
          {/* Search Section */}
          <div className="relative flex items-center bg-gray-800 rounded-lg px-3 py-2">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="खोजें"
              className="bg-transparent w-full text-white focus:outline-none text-sm"
            />
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Facebook, color: "text-blue-600" },
              { Icon: Twitter, color: "text-sky-400" },
              { Icon: Instagram, color: "text-pink-500" },
              { Icon: Youtube, color: "text-red-600" },
              { Icon: Mic, color: "text-purple-500" }
            ].map(({ Icon, color }, index) => (
              <button
                key={index}
                className={`${color} hover:opacity-80 transition-opacity`}
              >
                <Icon size={28} />
              </button>
            ))}
          </div>

          {/* Category Groups */}
          {categoryGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-gray-800 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between px-4 py-3 
                           bg-gray-700 cursor-pointer hover:bg-gray-600"
                onClick={() => toggleCategory(group.title)}
              >
                <span className="font-semibold">{group.title}</span>
                {expandedCategory === group.title ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>

              {expandedCategory === group.title && (
                <div className="px-4 py-3 space-y-2">
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="py-2 border-b border-gray-700 last:border-b-0 
                                 hover:bg-gray-700 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TopBar;