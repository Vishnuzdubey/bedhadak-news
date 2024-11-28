


// MainNewsPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

const NewsPage = () => {
  // Latest News Data with added images
  const latestNews = [
    {
      title: 'Kanpur: महिला मित्र के साथ होटल गए युवक की संदिग्ध हालात में मौत, जांच में जुटी पुलिस',
      date: '28 Nov 2024 11:24:43',
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU='
    },
    {
      title: 'पूर्व सांसद कादिर राणा को आचार संहिता उल्लंघन मामले में जमानत मिली',
      date: '28 Nov 2024 11:19:08',
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU='
    },
    {
      title: 'Bareilly: 50 लाख से ज्यादा की चोरी, चोरों ने सेवानिवृत्त कर्मचारी और प्रॉपर्टी डीलर को बनाया निशाना',
      date: '28 Nov 2024 11:18:44',
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU='
    },
  //   {
  //     title: 'रायबरेली: हाइवे पर इथनॉल से लदे टैंकर में टायर फटने से लगी आग, आग बुझने में जुटी फायर ब्रिगेड की टीम',
  //     date: '28 Nov 2024 11:12:00',
  //     image: '/api/placeholder/400/250?text=Accident+News'
  //   },
  //   {
  //     title: 'रायबरेली: Highway पर तेज रफ्तार डीसीएम ने पिकअप को मारी टक्कर, एक की मौत, तीन घायल',
  //     date: '28 Nov 2024 11:05:23',
  //     image: '/api/placeholder/400/250?text=Traffic+News'
  //   },
  //   {
  //     title: 'रायबरेली: बेखौफ दबंगों ने घर में घुसकर प्रधान पति को मारी गोली, इलाके में हड़कंप',
  //     date: '28 Nov 2024 10:57:01',
  //     image: '/api/placeholder/400/250?text=Crime+Report'
  //   },
   ];

  // Related Posts Data
  const relatedPosts = [
    {
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
      title: 'Kanpur: छू सकिंचित के सर्दियों का गलन गर्म,काउओंटी मतों में कोलड रहा गया सामांडरी चिंतक',
      date: '15 Nov 2024 17:55:54',
    },
    {
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
      title: 'Kanpur में लोग भरे गए, बाहरी और कमेटी वर्कर चले गए निहत्थे लखनऊ : कोलड उत्सर्जन अल्याज और व्यापासी चलो गए',
      date: '13 Nov 2024 21:23:33',
    },
    {
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
      title: 'Kanpur के CSJMU में pankees अब गरमाने हुए हनी मिल्क्ड सुन्दर, जवाहर लाल वर्मा: अंडिस्पूटेड सोलो सेक्स',
      date: '14 Nov 2024 15:21:5',
    },
    {
      image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
      title: 'Kanpur: सीमा गुप्ता के विवाहार्थियों की बेबी और कमप्यूटर बेचना शुरू, 2430 लागत, 25 अक्टूबर को शीघ्र बिक गई',
      date: '16 Nov 2024 14:36:32',
    },
  ];

  // Full News Article for Selected Card
  const selectedNewsArticle = {
    title: 'Kanpur: महिला मित्र के साथ होटल गए युवक की संदिग्ध हालात में मौत, जांच में जुटी पुलिस',
    date: '28 Nov 2024 11:24:43',
    image: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=cOn7tCfq87FzKSSp1Vn2j0b0c8Puw0eKD-GY6JKexJU=',
    
    content: `Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी।

पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।

Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी। 

पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।

Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। 

होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी।

पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।

Kanpur में एक युवक की संदिग्ध हालात में मौत हो गई। पुलिस ने बताया कि युवक अपनी महिला मित्र के साथ होटल गया था। होटल स्टाफ ने उन्हें संदिग्ध हालत में देखकर पुलिस को सूचना दी। 

पुलिस ने युवक को तुरंत अस्पताल पहुंचाया, लेकिन वह बचने से पहले ही मर गया। पुलिस ने कहा कि मामले की जांच की जा रही है और पोस्टमार्टम रिपोर्ट आने के बाद ही किसी निष्कर्ष पर पहुंचा जा सकेगा।

अभी तक पता नहीं चल पाया है कि युवक की मौत किस कारण से हुई। पुलिस अभी तक महिला मित्र से पूछताछ कर रही है। उनसे पूछा जा रहा है कि क्या उनके बीच किसी तरह का विवाद था या कुछ और घटित हुआ।

पुलिस का कहना है कि पूरे मामले की गहन जांच की जा रही है और आगे की कार्रवाई उसके नतीजों के आधार पर की जाएगी। परिजनों को भी पूछताछ के लिए बुलाया गया है।


`,
  };

  // Selected Related Post
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="news-page bg-gray-50 font-sans min-h-screen">
      {/* Header with mobile responsiveness */}
      <header className="bg-green-600 text-white py-4 px-4 md:px-6 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Kanpur News</span>
            {/* Mobile menu toggle */}
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
            {[faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram].map((icon, index) => (
              <button 
                key={index} 
                className="text-white hover:text-green-200 focus:outline-none transition-colors"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <div className="flex flex-col space-y-2">
              <span className="hover:text-green-200 transition-colors">Police Commissioner Office</span>
              <span className="hover:text-green-200 transition-colors">Kanpur Press Club</span>
              <span className="hover:text-green-200 transition-colors">Kushargrapradsay</span>
            </div>
            <div className="flex justify-start space-x-4 mt-4">
              {[faFacebook, faTwitter, faWhatsapp, faLinkedin, faTelegram].map((icon, index) => (
                <button 
                  key={index} 
                  className="text-white hover:text-green-200 focus:outline-none transition-colors"
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content with responsive layout */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Related Posts Sidebar - will be hidden on mobile and appear at bottom on mobile */}
          <div className="w-full md:w-1/5 mt-8 md:mt-0 md:pl-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Posts</h2>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:space-y-6">
              {relatedPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handlePostClick(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-36 md:h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-2 md:p-4">
                    <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">{post.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full md:w-4/5 md:pr-8">
            {/* Main News Section */}
            <section className="selected-news mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={selectedNewsArticle.image} 
                  alt={selectedNewsArticle.title} 
                  className="w-full h-48 md:h-[500px] object-cover"
                />
                <div className="p-4 md:p-6">
                  <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-800">{selectedNewsArticle.title}</h2>
                  <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">{selectedNewsArticle.date}</p>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed space-y-2 md:space-y-4">
                    {selectedNewsArticle.content.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {(index + 1) % 5 === 0 && <div></div> }
                    </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </section>

            {/* Latest News Section */}
            <section className="latest-news">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Latest News</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {latestNews.map((news, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-36 md:h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-2 md:p-4">
                      <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-gray-800 line-clamp-2">{news.title}</h3>
                      <p className="text-xs md:text-sm text-gray-500">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;