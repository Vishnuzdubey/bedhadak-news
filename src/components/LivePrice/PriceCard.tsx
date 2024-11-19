import React from "react";

const PriceCard = ({ title, price, unit, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-yellow-200 p-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-semibold text-yellow-600">{title}</h2>
        <span className="bg-yellow-100 text-yellow-600 text-sm font-md  p-1 rounded-lg float-right">
          Live Rate
        </span>
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold text-yellow-600">{price}</p>
        <p className="text-sm text-gray-500">{unit}</p>
      </div>
      <p className="mt-4 text-sm text-gray-400">{location}</p>
    </div>
  );
};

export default PriceCard;
