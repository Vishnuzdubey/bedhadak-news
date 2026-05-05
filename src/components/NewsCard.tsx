import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  isDarkMode: boolean;
  onClick?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, description, image, category, isDarkMode, onClick }) => {
  const navigate = useNavigate();
  const [showShare, setShowShare] = useState(false);

  // Generate the news URL based on the id.
  const newsLink = `${window.location.origin}/NewsPage/${id}`;

  const handleShareClick = (option: string) => {
    if (option === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`, '_blank');
    } else if (option === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(newsLink)}`, '_blank');
    } else if (option === 'copy') {
      navigator.clipboard.writeText(newsLink);
      alert('Link copied to clipboard');
    }
    setShowShare(false); // Hide popup after the action
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 relative">
        <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full mb-2">
          {category}
        </span>
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default NewsCard;