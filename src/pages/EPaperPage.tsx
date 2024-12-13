import React from 'react';

const ePapers = [
  {
    date: '2024-12-14',
    image: 'https://via.placeholder.com/100', // Replace with your image URL
    link: '#',
  },
  {
    date: '2024-12-13',
    image: 'https://via.placeholder.com/100',
    link: '#',
  },
  {
    date: '2024-12-12',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    date: '2024-12-12',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    date: '2024-12-12',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    date: '2024-12-12',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    date: '2024-12-12',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    date: '2024-12-12',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
];

const EPaperPage = () => {
  return (
    <div className="overflow-x-auto w-[100%] p-4">
      <table className="w-full border-collapse border border-gray-200 shadow-md bg-white">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="py-3 px-4 border border-gray-300">Date</th>
            <th className="py-3 px-4 border border-gray-300">Preview</th>
            <th className="py-3 px-4 border border-gray-300">PDF Link</th>
          </tr>
        </thead>
        <tbody>
          {ePapers.map((epaper, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-3 px-4 border border-gray-300 text-center">{epaper.date}</td>
              <td className="py-3 px-4 border border-gray-300 text-center">
                <img
                  src={epaper.image}
                  alt={`E-Paper ${epaper.date}`}
                  className="w-20 h-20 object-cover mx-auto"
                />
              </td>
              <td className="py-3 px-4 border border-gray-300 text-center">
                <a
                  href={epaper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  View PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EPaperPage;
