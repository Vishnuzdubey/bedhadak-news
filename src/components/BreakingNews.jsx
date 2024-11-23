import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BreakingNews = ({ news }) => {
  const [scrollingPaused, setScrollingPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-yellow-500 py-2">
      <div
        className={`inline-block whitespace-nowrap text-white text-lg cursor-pointer scrollText ${scrollingPaused ? "animate-none" : "animate-scroll"}`}
        onMouseEnter={() => setScrollingPaused(true)}
        onMouseLeave={() => setScrollingPaused(false)}
      >
        <span className="bg-red-600 rounded-lg font-bold p-2">
          Breaking News
        </span>
        {news.map((breakingNews, index) => (
          <Link to={`news/${breakingNews.id}`}
            key={index}
            className="mx-10 hover:none"
            rel="noopener noreferrer"
          >
            {breakingNews.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
