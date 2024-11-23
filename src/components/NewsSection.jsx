import React from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  let bigNews = [
    { id: "bn-1-8f4x", text: "अमेरिका में एक साल के भीतर दिखे 757 UFO, पेंटागन की रिपोर्ट में हुआ खुलासा" },
    { id: "bn-2-9t6v", text: "अमरावती में नवनीत राणा पर फेंकी गई कुर्सियां, सभा में खूब हुआ बवाल" },
    { id: "bn-3-3a2z", text: "गिल-सर्फराज समेत ये 4 भारतीय स्टार चोटिल, ऑस्ट्रेलिया सीरीज से पहले संकट में टीम" },
    { id: "bn-4-b5d1", text: "दिल्ली में जहरीली हवा से कोई निजात नहीं, शाहदरा का AQI 526" }
  ];
  
  let liveNews = [
    { id: "ln-1-u4d7", time: '9:16 AM', content: 'DRDO ने लंबी दूरी की हाइपरसोनिक मिसाइल का सफल परीक्षण किया' },
    { id: "ln-2-p7r5", time: '7:26 AM', content: 'अमेरिका: ट्रंप ने तेल उद्योग के सीईओ क्रिस राइट को ऊर्जा मंत्री चुना' },
    { id: "ln-3-d9m2", time: '10:06 AM', content: 'गुजरात: पोरबंदर में पकड़ी गई करीब 2 हजार करोड़ की ड्रग्स, ISI कनेक्शन का खुलासा' }
  ];
  
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-md">
      {/* Left Section - बड़ी खबरें */}
      <div className="md:w-3/5">
        <h2 className="text-xl font-bold text-red-600 mb-4">बड़ी खबरें</h2>
        <ul className="space-y-4">
          {bigNews.map((news) => (
            <li className="border-b pb-2">
            <Link to={`/news/${news.id}`}>{news.text}</Link>
          </li>
          ))}
        </ul>
      </div>
      {/* Right Section - लाइव अपडेट */}
      <div className="md:w-2/5">
        <h2 className="text-xl font-bold text-red-600 mb-4">लाइव अपडेट</h2>
        <ul className="space-y-6">
          {liveNews.map((live) => (
            <li className="flex items-start" key={live.id}>
              <span className="text-gray-500 text-sm mr-4">{live.time}</span>
              <Link to={`/news/${live.id}`}>{live.content}</Link>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsSection;
