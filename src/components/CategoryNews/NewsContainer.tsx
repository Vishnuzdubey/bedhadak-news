
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { MapPin, Clock } from 'lucide-react';

// // Large Horizontal News Card
// const LargeHorizontalNewsCard = ({ article }) => {
//   return (
//     <Link to={`/NewsPage/${article.id}`}>
//     <div className="large-news-card bg-white shadow-lg rounded-xl overflow-hidden mb-6 flex transition-all duration-300 hover:shadow-2xl h-80">
//       <div className="w-1/2">
//         {article.image_url ? (
//           <img 
//             src={article.image_url} 
//             alt={article.title} 
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-500">No Image</span>
//           </div>
//         )}
//       </div>
//       <div className="w-1/2 p-6 flex flex-col justify-between">
//         <div>
//           {article.location && (
//             <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-xs mb-3 uppercase">
//               <MapPin className="inline-block mr-1 mb-1" size={14} />
//               {article.location}
//             </span>
//           )}
//           {/* <Link to={`/NewsPage/${article.id}`}> */}
//             <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
//               {article.title}
//             </h2>
//           {/* </Link> */}
//           <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
//         </div>
//         <div className="flex items-center text-sm text-gray-500">
//           <Clock size={16} className="mr-2" />
//           <span>{article.writer_name}</span>
//           <span className="mx-2">•</span>
//           <span>{new Date(article.date).toLocaleDateString()}</span>
//         </div>
//       </div>
//     </div>
//     </Link>
//   );
// };

// // Small News Card
// const SmallNewsCard = ({ article }) => {
//   return (
//     <div className="small-news-card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//       <Link to={`/NewsPage/${article.id}`} className="block">
//         <div className="relative">
//           {article.image_url ? (
//             <img 
//               src={article.image_url} 
//               alt={article.title} 
//               className="w-full h-48 object-cover"
//             />
//           ) : (
//             <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//               <span className="text-gray-500">No Image</span>
//             </div>
//           )}
//           {article.location && (
//             <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs uppercase">
//               <MapPin className="inline-block mr-1 mb-1" size={12} />
//               {article.location}
//             </div>
//           )}
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
//             {article.title}
//           </h3>
//           <div className="flex items-center text-sm text-gray-500">
//             <Clock size={14} className="mr-2" />
//             <span>{article.writer_name}</span>
//             <span className="mx-2">•</span>
//             <span>{new Date(article.date).toLocaleDateString()}</span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// // Main News Container
// const NewsContainer = ({ categoryId }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`https://bedharak.vercel.app/api/v1/articles/category/${categoryId}`);
//         setArticles(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [categoryId]);

//   // Group articles into containers of 9 (1 large + 8 small)
//   const createNewsContainers = () => {
//     const containers = [];
//     let currentContainer = [];

//     articles.forEach((article, index) => {
//       // Start a new container every 9 articles
//       if (index % 9 === 0 && index > 0) {
//         containers.push(currentContainer);
//         currentContainer = [];
//       }

//       currentContainer.push(article);
//     });

//     // Add the last container if not empty
//     if (currentContainer.length > 0) {
//       containers.push(currentContainer);
//     }

//     return containers;
//   };

//   if (loading) return (
//     <div className="text-center py-10">
//       <div className="animate-pulse text-xl text-gray-500">Loading...</div>
//     </div>
//   );

//   if (error) return (
//     <div className="text-center py-10 text-red-500">
//       Error loading articles. Please try again later.
//     </div>
//   );

//   return (
//     <div className="news-container mx-auto px-4 py-8 w-[100%]">
//       {createNewsContainers().map((container, containerIndex) => (
//         <div key={containerIndex} className="mb-12 ">
//           {/* Large Horizontal Card */}
//           <div className="mb-6">
//             <LargeHorizontalNewsCard article={container[0]} />
//           </div>

//           {/* Small Cards in Two Rows */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {container.slice(1, 4).map((article) => (
//               <SmallNewsCard key={article.id} article={article} />
//             ))}
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//             {container.slice(4, 7).map((article) => (
//               <SmallNewsCard key={article.id} article={article} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsContainer;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

// Large Horizontal News Card
const LargeHorizontalNewsCard = ({ article }) => {
  return (
    <Link to={`/NewsPage/${article.id}`}>
    <div className="large-news-card bg-white shadow-lg rounded-xl overflow-hidden mb-6 flex transition-all duration-300 hover:shadow-2xl h-80">
      <div className="w-1/2">
        {article.image_url ? (
          <img 
            src={article.image_url} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          {article.location && (
            <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-xs mb-3 uppercase">
              <MapPin className="inline-block mr-1 mb-1" size={14} />
              {article.location}
            </span>
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>{article.writer_name}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

// Small News Card
const SmallNewsCard = ({ article }) => {
  return (
    <div className="small-news-card bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Link to={`/NewsPage/${article.id}`} className="block">
        <div className="relative">
          {article.image_url ? (
            <img 
              src={article.image_url} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          {article.location && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs uppercase">
              <MapPin className="inline-block mr-1 mb-1" size={12} />
              {article.location}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-2" />
            <span>{article.writer_name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Main News Container
const NewsContainer = ({ categoryId, location }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        let response;
        
        // Fetch articles based on either categoryId or location
        if (categoryId) {
          response = await axios.get(`https://bedharak.vercel.app/api/v1/articles/category/${categoryId}`);
        } else if (location) {
          response = await axios.get(`https://bedharak.vercel.app/api/v1/articles/location/${location}`, {
            params: {
              page: 1,
              pageSize: 10000
            }
          });
        } else {
          throw new Error('Either categoryId or location must be provided');
        }
        
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    // Only fetch if categoryId or location is provided
    if (categoryId || location) {
      fetchArticles();
    }
  }, [categoryId, location]);

  // Group articles into containers of 9 (1 large + 8 small)
  const createNewsContainers = () => {
    const containers = [];
    let currentContainer = [];

    articles.forEach((article, index) => {
      // Start a new container every 9 articles
      if (index % 9 === 0 && index > 0) {
        containers.push(currentContainer);
        currentContainer = [];
      }

      currentContainer.push(article);
    });

    // Add the last container if not empty
    if (currentContainer.length > 0) {
      containers.push(currentContainer);
    }

    return containers;
  };

  if (loading) return (
    <div className="text-center py-10">
      <div className="animate-pulse text-xl text-gray-500">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="text-center py-10 text-red-500">
      Error loading articles. Please try again later.
    </div>
  );

  return (
    <div className="news-container mx-auto px-4 py-8 w-[100%]">
      {createNewsContainers().map((container, containerIndex) => (
        <div key={containerIndex} className="mb-12 ">
          {/* Large Horizontal Card */}
          <div className="mb-6">
            <LargeHorizontalNewsCard article={container[0]} />
          </div>

          {/* Small Cards in Two Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {container.slice(1, 4).map((article) => (
              <SmallNewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {container.slice(4, 7).map((article) => (
              <SmallNewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsContainer;