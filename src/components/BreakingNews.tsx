import React, { useState } from 'react';

interface BreakingNewsProps {
  news: string[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
  const [scrollingPaused, setScrollingPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-yellow-500 py-2">
     
      <div
        className={`inline-block whitespace-nowrap text-white text-lg cursor-pointer scrollText ${
          scrollingPaused ? "animate-none" : "animate-scroll"
        }`}
        onMouseEnter={() => setScrollingPaused(true)}
        onMouseLeave={() => setScrollingPaused(false)}
      >
         <span className="bg-red-600 rounded-lg font-bold p-2 ">
          Breaking News
        </span>
        {news.map((breakingNews)=>(<a
          href="https://google.com"
          className="mx-10 hover:none"
          rel="noopener noreferrer"
        >{breakingNews}
        </a>))}
      </div>
    </div>
  );
};

export default BreakingNews;