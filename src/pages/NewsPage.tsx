// // MainNewsPage.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

// const NewsPage = () => {
//   // Latest News Data with added images
//   const latestNews = [
//     {
//       title: 'Kanpur: महिला मित्र के साथ होटल गए युवक की संदिग्ध हालात में मौत, जांच में जुटी पुलिस',
//       date: '28 Nov 2024 11:24:43',
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU='
//     },
//     {
//       title: 'पूर्व सांसद कादिर राणा को आचार संहिता उल्लंघन मामले में जमानत मिली',
//       date: '28 Nov 2024 11:19:08',
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU='
//     },
//     {
//       title: 'Bareilly: 50 लाख से ज्यादा की चोरी, चोरों ने सेवानिवृत्त कर्मचारी और प्रॉपर्टी डीलर को बनाया निशाना',
//       date: '28 Nov 2024 11:18:44',
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU='
//     },
//   //   {
//   //     title: 'रायबरेली: हाइवे पर इथनॉल से लदे टैंकर में टायर फटने से लगी आग, आग बुझने में जुटी फायर ब्रिगेड की टीम',
//   //     date: '28 Nov 2024 11:12:00',
//   //     image: '/api/placeholder/400/250?text=Accident+News'
//   //   },
//   //   {
//   //     title: 'रायबरेली: Highway पर तेज रफ्तार डीसीएम ने पिकअप को मारी टक्कर, एक की मौत, तीन घायल',
//   //     date: '28 Nov 2024 11:05:23',
//   //     image: '/api/placeholder/400/250?text=Traffic+News'
//   //   },
//   //   {
//   //     title: 'रायबरेली: बेखौफ दबंगों ने घर में घुसकर प्रधान पति को मारी गोली, इलाके में हड़कंप',
//   //     date: '28 Nov 2024 10:57:01',
//   //     image: '/api/placeholder/400/250?text=Crime+Report'
//   //   },
//    ];

//   // Related Posts Data
//   const relatedPosts = [
//     {
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
//       title: 'Kanpur: छू सकिंचित के सर्दियों का गलन गर्म,काउओंटी मतों में कोलड रहा गया सामांडरी चिंतक',
//       date: '15 Nov 2024 17:55:54',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
//       title: 'Kanpur में लोग भरे गए, बाहरी और कमेटी वर्कर चले गए निहत्थे लखनऊ : कोलड उत्सर्जन अल्याज और व्यापासी चलो गए',
//       date: '13 Nov 2024 21:23:33',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
//       title: 'Kanpur के CSJMU में pankees अब गरमाने हुए हनी मिल्क्ड सुन्दर, जवाहर लाल वर्मा: अंडिस्पूटेड सोलो सेक्स',
//       date: '14 Nov 2024 15:21:5',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
//       title: 'Kanpur: सीमा गुप्ता के विवाहार्थियों की बेबी और कमप्यूटर बेचना शुरू, 2430 लागत, 25 अक्टूबर को शीघ्र बिक गई',
//       date: '16 Nov 2024 14:36:32',
//     },
//   ];

//   // Full News Article for Selected Card
//   const selectedNewsArticle = {
//     title: 'Kanpur: महिला मित्र के साथ होटल गए युवक की संदिग्ध हालात में मौत, जांच में जुटी पुलिस',
//     date: '28 Nov 2024 11:24:43',
//     image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
    
//     content: `Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी।

// पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

// अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

// पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।

// Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी। 

// पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

// अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

// पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।

// Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। 

// होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी।

// पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

// अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

// पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।

// Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी। 

// पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

// अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

// पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।


// `,
//   };

//   // Selected Related Post
//   const [selectedPost, setSelectedPost] = React.useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="news-page bg-gray-50 font-sans min-h-screen">
//       {/* Header with mobile responsiveness */}
//       <header className="bg-green-600 text-white py-4 px-4 md:px-6 shadow-md">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <span className="text-xl font-bold">Kanpur News</span>
//             {/* Mobile menu toggle */}
//             <button 
//               className="md:hidden ml-4 focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
          
//           {/* Social share buttons for desktop and mobile */}
//           <div className="hidden md:flex space-x-4">
//             {[faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram].map((icon, index) => (
//               <button 
//                 key={index} 
//                 className="text-white hover:text-green-200 focus:outline-none transition-colors"
//               >
//                 <FontAwesomeIcon icon={icon} size="lg" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Mobile dropdown menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4 space-y-2">
//             <div className="flex flex-col space-y-2">
//               <span className="hover:text-green-200 transition-colors">Police Commissioner Office</span>
//               <span className="hover:text-green-200 transition-colors">Kanpur Press Club</span>
//               <span className="hover:text-green-200 transition-colors">Kushargrapradsay</span>
//             </div>
//             <div className="flex justify-start space-x-4 mt-4">
//               {[faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram].map((icon, index) => (
//                 <button 
//                   key={index} 
//                   className="text-white hover:text-green-200 focus:outline-none transition-colors"
//                 >
//                   <FontAwesomeIcon icon={icon} size="lg" />
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Main content with responsive layout */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex flex-col-reverse md:flex-row">
//           {/* Related Posts Sidebar - will be hidden on mobile and appear at bottom on mobile */}


//           {/* Main Content Area */}
//           <div className="w-full md:w-4/5 md:pr-8">
//             {/* Main News Section */}
//             <section className="selected-news mb-8">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img 
//                   src={selectedNewsArticle.image} 
//                   alt={selectedNewsArticle.title} 
//                   className="w-full h-48 md:h-[500px] object-cover"
//                 />
//                 <div className="p-4 md:p-6">
//                   <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-800">{selectedNewsArticle.title}</h2>
//                   <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">{selectedNewsArticle.date}</p>
//                   <p className="text-sm md:text-lg text-gray-700 leading-relaxed space-y-2 md:space-y-4">
//                     {selectedNewsArticle.content.split('\n').map((line, index) => (
//                     <React.Fragment key={index}>
//                       {line}
//                       {(index + 1) % 5 === 0 && <div></div> }
//                     </React.Fragment>
//                     ))}
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Latest News Section */}
//             <section className="latest-news">
//               <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Latest News</h2>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//                 {latestNews.map((news, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
//                   >
//                     <img 
//                       src={news.image} 
//                       alt={news.title} 
//                       className="w-full h-36 md:h-48 object-cover rounded-t-lg"
//                     />
//                     <div className="p-2 md:p-4">
//                       <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">{news.title}</h3>
//                       <p className="text-xs md:text-sm text-gray-500">{news.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//           <div className=" hidden  md:block w-full md:w-1/5 mt-8 md:mt-0 md:pl-8 ">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Posts</h2>
//             <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:space-y-6">
//               {relatedPosts.map((post, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
//                   onClick={() => handlePostClick(post)}
//                 >
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-36 md:h-48 object-cover rounded-t-lg"
//                   />
//                   <div className="p-2 md:p-4">
//                     <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">{post.title}</h3>
//                     <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram, } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt as solidMapMarker, faUser as solidUser, faCalendar as solidCalendar, faTag as solidTag } from '@fortawesome/free-solid-svg-icons';

const NewsPage = () => {
  const { id } = useParams();
  const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);
  const [latestNews, setLatestNews] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyImage = 'https://media.istockphoto.com/id/2151295139/photo/professional-online-gamer-hand-fingers.jpg?s=2048x2048&w=is&k=20&c=ZoyDd30pW40sgpxtg-zFypggmSfv9554TWhzpuha5FE=';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        // Fetch all articles
        const articleResponse = await axios.get(`https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000`);
        
        // Log the entire response for debugging
        console.log('Full API Response:', articleResponse.data);

        // Determine articles array (handle different response structures)
        const articles = Array.isArray(articleResponse.data) 
          ? articleResponse.data 
          : articleResponse.data.articles;

        if (!articles) {
          throw new Error('No articles found in the response');
        }

        // Find specific article with flexible matching
        const specificArticle = articles.find(article => {
          console.log('Comparing:', {
            articleId: article.id, 
            urlId: id, 
            match: article.id == id
          });
          return article.id == id;
        });

        if (!specificArticle) {
          throw new Error(`Article with ID ${id} not found`);
        }

        setSelectedNewsArticle(specificArticle);

        // Fetch latest news
        const latestNewsResponse = await axios.get('https://bedharak.vercel.app/api/v1/articles?page=1&pageSize=10000');
        const sortedLatestNews = (Array.isArray(latestNewsResponse.data) 
          ? latestNewsResponse.data 
          : latestNewsResponse.data.articles)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .filter(news => news.id != id)
          .slice(0, 3);
        setLatestNews(sortedLatestNews);

        // Set social links (modify as per your API response)
        setSocialLinks({
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
          twitter: `https://twitter.com/intent/tweet?url=${window.location.href}`,
          whatsapp: `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
          linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`,
          telegram: `https://telegram.me/share/url?url=${window.location.href}`
        });

      } catch (err) {
        console.error('Error fetching article data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [id]);

  const handleSocialMediaClick = (platform) => {
    const link = socialLinks[platform];
    if (link) {
      window.open(link, '_blank');
    }
  };

  // Format date with more readable output
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Article</h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="news-page bg-gray-50 font-sans min-h-screen w-full">
      {/* Header with mobile responsiveness */}
      <header className="bg-green-600 text-white py-4 px-4 md:px-6 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">{selectedNewsArticle?.title || 'News Page'}</span>
            <button 
              className="md:hidden ml-4 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Social share buttons for desktop and mobile */}
          <div className="hidden md:flex space-x-4">
            {[
              { icon: faFacebook, platform: 'facebook' },
              { icon: faTwitter, platform: 'twitter' },
              { icon: faWhatsapp, platform: 'whatsapp' },
              { icon: faLinkedin, platform: 'linkedin' },
              { icon: faTelegram, platform: 'telegram' }
            ].map(({ icon, platform }, index) => (
              <button 
                key={index} 
                className="text-white hover:text-green-200 focus:outline-none transition-colors"
                onClick={() => handleSocialMediaClick(platform)}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <div className="flex justify-start space-x-4 mt-4">
              {[
                { icon: faFacebook, platform: 'facebook' },
                { icon: faTwitter, platform: 'twitter' },
                { icon: faWhatsapp, platform: 'whatsapp' },
                { icon: faLinkedin, platform: 'linkedin' },
                { icon: faTelegram, platform: 'telegram' }
              ].map(({ icon, platform }, index) => (
                <button 
                  key={index} 
                  className="text-white hover:text-green-200 focus:outline-none transition-colors"
                  onClick={() => handleSocialMediaClick(platform)}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content with full width */}
      <main className="container mx-auto px-4 py-8">
        {/* Main News Section */}
        <section className="selected-news mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* New Metadata Section */}
            <div className="px-4 md:px-6 pt-4 md:pt-6 pb-2 bg-gray-50 border-b">
              <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
                {/* Writer Name */}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={solidUser} className="text-green-600" />
                  <span>{selectedNewsArticle?.writer_name || 'Unknown Author'}</span>
                </div>

                {/* Location */}
                {selectedNewsArticle?.location && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={solidMapMarker} className="text-green-600" />
                    <span>{selectedNewsArticle.location}</span>
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={solidCalendar} className="text-green-600" />
                  <span>{formatDate(selectedNewsArticle?.date)}</span>
                </div>

                {/* Category */}
                {selectedNewsArticle?.category && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={solidTag} className="text-green-600" />
                    <span>{selectedNewsArticle.category}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Article Image */}
            <img 
              src={selectedNewsArticle?.image_url || dummyImage} 
              alt={selectedNewsArticle?.title || 'News Image'} 
              className="w-full h-48 md:h-[500px] object-cover"
              onError={(e) => { e.target.src = dummyImage; }}
            />

            {/* Article Content */}
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-800">
                {selectedNewsArticle?.title}
              </h2>
              
              <div 
                className="text-sm md:text-lg text-gray-700 leading-relaxed space-y-2 md:space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedNewsArticle?.content }}
              />
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="latest-news">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Latest News</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {latestNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => window.location.href = `/NewsPage/${news.id}`}
              >
                <img 
                  src={news.image_url || dummyImage} 
                  alt={news.title} 
                  className="w-full h-36 md:h-48 object-cover rounded-t-lg"
                  onError={(e) => { e.target.src = dummyImage; }}
                />
                <div className="p-2 md:p-4">
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {news.date 
                      ? new Date(news.date).toLocaleString() 
                      : 'Date not available'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsPage;