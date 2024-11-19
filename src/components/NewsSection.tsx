import React from 'react';

const NewsSection = () => {
  let bigNews = ["अमेरिका में एक साल के भीतर दिखे 757 UFO, पेंटागन की रिपोर्ट में हुआ खुलासा", "अमरावती में नवनीत राणा पर फेंकी गई कुर्सियां, सभा में खूब हुआ बवाल", "गिल-सर्फराज समेत ये 4 भारतीय स्टार चोटिल, ऑस्ट्रेलिया सीरीज से पहले संकट में टीम", "दिल्ली में जहरीली हवा से कोई निजात नहीं, शाहदरा का AQI 526"];

  let liveNews = [
    { time: '9:16 AM', content: 'DRDO ने लंबी दूरी की हाइपरसोनिक मिसाइल का सफल परीक्षण किया' },
    { time: '7:26 AM', content: 'अमेरिका: ट्रंप ने तेल उद्योग के सीईओ क्रिस राइट को ऊर्जा मंत्री चुना' },
    { time: '10:06 AM', content: 'गुजरात: पोरबंदर में पकड़ी गई करीब 2 हजार करोड़ की ड्रग्स, ISI कनेक्शन का खुलासा' },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-md">
      {/* Left Section - बड़ी खबरें */}
      <div className="md:w-3/5">
        <h2 className="text-xl font-bold text-red-600 mb-4">बड़ी खबरें</h2>
        <ul className="space-y-4">
          {bigNews.map((e) => (
            <li className="border-b pb-2">
            <a href="">{e}</a>
          </li>
          ))}
        </ul>

      </div>

      {/* Right Section - लाइव अपडेट */}
      <div className="md:w-2/5">
        <h2 className="text-xl font-bold text-red-600 mb-4">लाइव अपडेट</h2>
        <ul className="space-y-6">
          {liveNews.map((live) => (
              <li className="flex items-start">
              <span className="text-gray-500 text-sm mr-4">{live.time}</span>
              <a href=''>{live.content}</a>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsSection;
