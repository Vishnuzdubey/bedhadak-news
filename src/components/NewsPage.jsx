import React from 'react';

export const NewsPage = () => {
  // Placeholder data
  const newsContent = {
    title: 'कानपुर प्रेस क्लब के पूर्व महामंत्री के सम्मान में उत्तर अधिवक्ता, बोले-गाली तरीके से की गिरफ्तारी',
    author: 'By Nitesh Mishra',
    publishedDate: 'On 26 Nov 2024 12:36:16',
    content: 'कानपुर, उत्तर प्रदेश। कानपुर प्रेस क्लब के पूर्व महामंत्री गिरफ्तार होने से उत्तर अधिवक्ताओं में रोष है। उत्तर अधिवक्ताओं का कहना है कि पुलिस कमीशनर कार्यालय, बोले-गाली तरीके से की गिरफ्तारी...'
  };

  const relatedPosts = [
    {
      title: 'Kanpur: मूंगफली में मिला देशविरोधी सामग्री, संदेह में फंसे निजी कंपनी के अधिकारी',
      image: '/images/mungphali.jpg',
      url: '#'
    },
    {
      title: 'Diversion ROAD AHEAD CLOSED',
      image: '/images/road-closed.jpg',
      url: '#'
    },
    {
      title: 'कानपुर: पर्यटन में दिना दिना पौंच बढ़ रहा है तो मिलेगा रोजगार',
      image: '/images/tourism.jpg',
      url: '#'
    },
    {
      title: 'Kanpur: छह महिलाओं के सहज का नोटिस, कारोबारी को शोभा देखता रहा',
      image: '/images/women.jpg',
      url: '#'
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="news-content">
        <h1 className="text-2xl font-bold mb-4">{newsContent.title}</h1>
        <p className="text-gray-500 mb-4">{newsContent.author}</p>
        <p className="text-gray-500 mb-4">{newsContent.publishedDate}</p>
        <p>{newsContent.content}</p>
      </div>
      <div className="related-posts mt-8">
        <h2 className="text-xl font-bold mb-4">Related Posts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {relatedPosts.map((post, index) => (
            <a key={index} href={post.url} className="block">
              <img src={post.image} alt={post.title} className="mb-2" />
              <p className="text-sm">{post.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default NewsPage;