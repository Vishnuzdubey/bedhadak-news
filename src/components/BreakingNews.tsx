import React, { useState, useEffect } from 'react';

interface BreakingNewsProps {
  news: string[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => 
        (prevIndex + 1) % news.length
      );
    }, 9000); // Interval remains the same

    return () => clearInterval(timer);
  }, [news]);

  return (
    <div className="bg-slate-900 text-white py-3 shadow-lg overflow-hidden relative">
      <div className="container mx-auto flex items-center">
        <div className="bg-red-600 text-white px-3 py-1 rounded-md font-bold mr-4 text-sm uppercase">
          Breaking
        </div>
        <div className="relative w-full h-6 overflow-hidden">
          {news.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full transition-transform duration-[8500ms] ease-linear ${
                index === currentNewsIndex
                  ? 'translate-x-0 opacity-1000'
                  : 'translate-x-full opacity-0'
              }`}
              style={{ transform: `translateX(${index === currentNewsIndex ? '0%' : '100%'})` }}
            >
              <a
                href="https://example.com"
                className="text-white hover:text-gray-300 transition-colors"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;