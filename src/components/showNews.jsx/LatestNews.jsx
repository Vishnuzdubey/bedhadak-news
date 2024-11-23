import React from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
    const latestNews = [
        {
          id: "news1A",
          title: "महाराष्ट्र में महागठबंधन का तूफान, रुझानों में 200 सीटें पार",
          image: "https://akm-img-a-in.tosshub.com/aajtak/images/breaking_news/202411/67413cf94d21e-maharashtra--jharkhand-assembly-election-result-2024-232452540-16x9.jpg?size=125:72",
        },
        {
          id: "news2B",
          title: "क्या शिंदे बनेंगे महाराष्ट्र के 'नीतीश कुमार'?",
          image: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202411/674013453115d-20241122-221439437-16x9.jpg?size=948:533?size=120:68",
        },
        {
          id: "news3C",
          title: "दिल्ली में प्रदूषण संकट गहराया, AQI बेहद गंभीर श्रेणी में पहुंचा",
          image: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202411/67417ddb38804-justh-chor-song--sahitya-aajtak-2024-230141292-16x9.jpg?size=120:68",
        },
        {
          id: "news4D",
          title: "गुजरात विधानसभा चुनाव: भाजपा ने जारी की 100 उम्मीदवारों की सूची",
          image: "https://akm-img-a-in.tosshub.com/aajtak/images/video/202411/674189866966d-assembly-election-result-2024-235128491-16x9.png?size=100:56",
        },
        {
          id: "news5E",
          title: "चंद्रयान-3 की सफलता के बाद इसरो की नई योजना पर चर्चा",
          image: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202411/6740488cd8a28-uttar-pradesh-bypoll-election-results-2024-220158970-16x9.jpeg?size=125:72",
        },
        {
          id: "news6F",
          title: "फुटबॉल विश्व कप: भारत ने एशियाई क्वालीफायर्स में ऐतिहासिक जीत दर्ज की",
          image: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202411/67418428bc694-naseem-solanki--dimple-yadav--ragini-sonkar-232835100-16x9.jpg?size=120:68",
        },
      ];
      
      
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">लेटेस्ट</h2>
      <div className="space-y-4">
        {latestNews.map((news, index) => (
            <Link to={`/news/${news.id}`}  key={index}>
            <div className="flex items-center my-4 gap-4">
            <img
              src={news.image}
              alt={news.title}
              className=" h-12 rounded-md object-cover"
            />
            <p className="text-sm text-gray-700">{news.title}</p>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
