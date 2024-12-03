import React from "react";
import TeamCard from "./TeamCard";
import Vimlesh from "../../assets/Vimlesh.jpg";
import Shekhar from "../../assets/Shekhar.jpg";
import Santosh from "../../assets/Santosh.jpg";
import Nitish from "../../assets/Nitish.jpg";

const teamData = [
  { name: "Vimlesh Shukla ", role: "Founder, Director, Group Editor", img: Vimlesh },
  { name: "Shashank Shekhar", role: "Co-founder Sub Editor", img: Shekhar },
  { name: "Rahul Dubey ", role: "Additional Director/Manager", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  { name: "Santosh Paswan", role: "Senior Video Journalist", img: Santosh },
  { name: "Nitish Sharma", role: "Program Producer", img: Nitish },
  // { name: "लियम जॉनसन", role: "सॉफ्टवेयर इंजीनियर", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
  // { name: "ओलिविया स्मिथ", role: "मार्केटिंग विशेषज्ञ", img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
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