import React from 'react'

const ShortsCard = ({videos}) => {
  return (
    <div className="p-4 bg-white-100">
      {/* Header */}
      <h2 className="text-xl font-bold text-red-600 mb-4">शॉर्ट वीडियो</h2>

      {/* Cards Container */}
      <div className="flex space-x-4 overflow-x-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative h-60 flex-shrink-0 bg-black rounded-lg overflow-hidden"
          >
            {/* Video Thumbnail */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-36 object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-4.586-3.22A1 1 0 009 8.87v6.26a1 1 0 001.166.988l4.586-1.292a1 1 0 000-1.92z"
                  />
                </svg>
              </button>
            </div>

            {/* Video Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-white text-sm">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortsCard
