import React, { useState, useEffect } from 'react';

interface BreakingNewsProps {
  news: string[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="bg-red-700 text-white py-2 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="bg-white text-red-700 px-3 py-1 rounded-full text-sm font-bold mr-4">
            ब्रेकिंग
          </span>
          <p className="animate-slide">
            {news[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;