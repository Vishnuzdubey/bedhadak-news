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
// import LocationWeather from "../components/LocationWeather";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

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
    { name: "उत्तर प्रदेश", path: "/up", icon: Gauge },
    { name: "उत्तराखंड", path: "/uk", icon: Gauge },
    { name: "दिल्ली", path: "/delhi", icon: Gauge },
    { name: "भारत", path: "/india", icon: MapPin },
    { name: "देश-दुनिया", path: "/world", icon: Globe },
    { name: "राजनीति", path: "/politics", icon: TrendingUp },
    { name: "खेल", path: "/sports", icon: Award },
    { name: "मनोरंजन", path: "/entertainment", icon: Film },
    { name: "व्यापार", path: "/business", icon: Briefcase },
    { name: "स्वास्थ्य", path: "/health", icon: Rocket },
    { name: "टेक", path: "/tech", icon: Zap },
    { name: "ऑटो", path: "/auto", icon: Gauge },
    { name: "E-paper", path: "/EPaper", icon: Gauge },
    // { name: "होम", path: "/", icon: Newspaper },
    // { name: "भारत", path: "/india", icon: MapPin },
    // { name: "विश्व", path: "/world", icon: Globe },
    // { name: "व्यापार", path: "/business", icon: Briefcase },
    // { name: "टेक", path: "/tech", icon: Zap },
    // { name: "खेल", path: "/sports", icon: Award },
    // { name: "मनोरंजन", path: "/entertainment", icon: Film },
    // { name: "राजनीति", path: "/politics", icon: TrendingUp },
    // { name: "स्वास्थ्य", path: "/health", icon: Rocket },
    // { name: "ऑटो", path: "/auto", icon: Gauge },
    // { name: "UP", path: "/up", icon: Gauge },
    // { name: "UK", path: "/uk", icon: Gauge },
    // { name: "Delhi", path: "/delhi", icon: Gauge },
    // { name: "Gorakhpur", path: "/gkp", icon: Gauge },
    // { name: "E-paper", path: "/EPaper", icon: Gauge },
  ];

  const categoryGroups = [
    {
      title: "समाचार",
      items: ["ताजा समाचार", "राष्ट्रीय", "अंतरराष्ट्रीय", "राजनीतिक"],
    },
    {
      title: "मनोरंजन",
      items: ["बॉलीवुड", "टीवी", "वेब सीरीज़", "सेलेब न्यूज़"],
    },
    {
      title: "खेल",
      items: ["क्रिकेट", "फुटबॉल", "टेनिस", "अन्य खेल"],
    },
  ];

  return (
    <nav
      className={`
        ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-gray-800"
            : "bg-gradient-to-r from-red-700 to-red-600"
        } 
        text-white shadow-2xl transition-all duration-300 ease-in-out overflow-x-auto
      `}
    >
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center space-x-4 ">
          {/* <span className="mt-2">📍 नई दिल्ली</span>
          <span className="mt-2">🌤️ 28°C</span> */}
        </div>
         {/* <LocationWeather /> */}

        <div className="mr-0 md:flex items-center space-x-4 mt-2 md:mr-10 font-bold text-sm ">
          <Link
            to="/Advertisement"
            className={`mr-3 md:flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium
                  transition-all duration-300 ease-in-out whitespace-nowrap ${
                    location.pathname === "/Advertisement"
                      ? "bg-white text-red-600"
                      : "bg-white text-red-600"
                  } `}
          >
            विज्ञापन के लिए संपर्क करें
          </Link>
          <div className="hidden md:flex justify-center space-x-6">
            RNI - UP/UPHIN/2022/84152
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-1 border-b border-opacity-20 border-white">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-auto min-w-[80px] md:w-36 lg:w-48 object-contain"
          />
        </div>

        <div className="overflow-x-auto flex items-center space-x-4">
          <div className="hidden md:flex justify-center space-x-6">
            {[
              {
                Icon: Facebook,
                color: "text-blue-600",
                link: "https://www.facebook.com/profile.php?id=61562438033847&mibextid=ZbWKwL",
              },
              {
                Icon: Twitter,
                color: "text-sky-400",
                link: "https://x.com/BedhadakKhabar?t=Kt3XT6T6cItQM6L1bpVRVw&s=08",
              },
              {
                Icon: Instagram,
                color: "text-pink-500",
                link: "https://www.instagram.com/bedhadakkhabar?igsh=ZWRwcHkyYm56ZGdu",
              },
              {
                Icon: Youtube,
                color: "text-green-600",
                link: "https://youtube.com/@bedhadakkhabar?si=QSPPzqQN3nuHVgXV",
              },
              // {
              //   Icon: Mic,
              //   color: "text-purple-500",
              //   link: "https://www.whatsapp.com",
              // },
            ].map(({ Icon, color, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} hover:opacity-80 transition-opacity`}
              >
                <Icon size={28} />
              </a>
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
                  ${
                    location.pathname === item.path
                      ? "bg-white text-red-600"
                      : "hover:bg-white/10"
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <Link
          to="/ContactUs"
          className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-white/10 ml-10                   
        ${
          location.pathname === "/ContactUs"
            ? "bg-white text-red-600"
            : "hover:bg-white/10"
        }`}
        >
          <Bell p-10 size={20} />
          हमारे बारे में
        </Link>
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
              { Icon: Mic, color: "text-purple-500" },
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
            <div
              key={groupIndex}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
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
