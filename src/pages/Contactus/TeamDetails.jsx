import React from "react";
import TeamCard from "./TeamCard";

const teamData = [
  { name: "मिया वॉर्ड", role: "संस्थापक और मुख्य कार्यकारी अधिकारी", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "फीनिक्स बेकर", role: "इंजीनियरिंग प्रमुख", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "लाना स्टाइनर", role: "मुख्य संचालन अधिकारी", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "एथन पेरेज़", role: "उत्पाद प्रबंधक", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "सोफिया ली", role: "प्रधान डिज़ाइनर", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "लियम जॉनसन", role: "सॉफ्टवेयर इंजीनियर", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "ओलिविया स्मिथ", role: "मार्केटिंग विशेषज्ञ", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
];


function TeamDetails() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">हमारी टीम
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamData.map((member, index) => (
          <TeamCard key={index} name={member.name} role={member.role} img={member.img} />
        ))}
      </div>
    </div>
  );
}

export default TeamDetails;