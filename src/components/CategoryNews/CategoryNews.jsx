import React from 'react'



const CategoryNews = ({newsData}) => {
    
  return (
      <div>
          <div className="max-w-5xl mx-auto my-4 bg-white p-4 rounded-lg">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-red-600">{newsData.title}</h2>
        <a href="#" className="text-blue-500 text-sm hover:none">
          और भी &raquo;
        </a>
      </div>

      {/* Main News Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Main News */}
        <div className="col-span-1 md:col-span-2">
          <div className="relative">
            <img
              src={newsData.mainNews.image}
              alt="Main news"
              className="w-full h-auto rounded-lg"
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-sm font-bold p-2 rounded-b-lg">
              {newsData.mainNews.description}
            </p>
          </div>
        </div>

        {/* Side News */}
        <div className="grid grid-cols-1 gap-4">
          {newsData.sideNews.map((news, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={news.image}
                alt="News"
                className="w-24 h-16 object-cover rounded-lg"
              />
              <p className="text-sm font-medium text-gray-700">{news.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default CategoryNews
