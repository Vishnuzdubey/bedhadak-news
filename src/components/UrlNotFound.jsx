import React from "react";
import { Link } from "react-router-dom";

const UrlNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default UrlNotFound;
