import React from 'react';

interface NewsPreviewProps {
  text?: string;
  link?: string;
}

const NewsPreview: React.FC<NewsPreviewProps> = ({ text, link }) => {
  const renderPreview = () => {
    if (!link) return null;

    // YouTube video preview
    const youtubeMatch = link.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/
    );

    if (youtubeMatch) {
      return (
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    // Image preview
    if (/\.(jpg|jpeg|png|gif|webp)$/i.test(link)) {
      return (
        <img
          src={link}
          alt="News Preview"
          className="w-full rounded-lg object-cover mb-4"
        />
      );
    }

    // General link preview
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {link}
      </a>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {text && <p className="text-gray-700 mb-4">{text}</p>}
      {renderPreview()}
    </div>
  );
};

export default NewsPreview;