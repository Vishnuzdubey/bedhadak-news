import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  isDarkMode: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, category, isDarkMode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Clicked');
    navigate('/NewsPage');
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full mb-2">
          {category}
        </span>
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600">
              <Heart size={18} />
              <span>24</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600">
              <MessageCircle size={18} />
              <span>12</span>
            </button>
          </div>
          <button className="text-gray-500 hover:text-red-600">
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;