import React from "react";

function TeamCard({ name, role, img }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-72">
    <div className="w-full aspect-square overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
  );
}

export default TeamCard;