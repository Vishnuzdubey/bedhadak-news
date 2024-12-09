// import React from 'react'
// import PriceCard from './PriceCard';
// let responseData = { "timestamp": 1731997890, "metal": "XAU", "currency": "USD", "exchange": "FOREXCOM", "symbol": "FOREXCOM:XAUUSD", "prev_close_price": 2611.985, "open_price": 2611.985, "low_price": 2610.485, "high_price": 2625.635, "open_time": 1731974400, "price": 2622.47, "ch": 10.48, "chp": 0.4, "ask": 2622.79, "bid": 2622.09, "price_gram_24k": 84.3144, "price_gram_22k": 77.2882, "price_gram_21k": 73.7751, "price_gram_20k": 70.262, "price_gram_18k": 63.2358, "price_gram_16k": 56.2096, "price_gram_14k": 49.1834, "price_gram_10k": 35.131 };

// const PetroliumPrice = () => {
//   return (
//     <div>
//        <div className=" bg-transparent flex items-center justify-center pb-4">
//       <div className="flex flex-wrap gap-4 w-full max-w-4xl">
//         <PriceCard
//           title="डीजल "
//                       price={`₹${responseData.price * 100}`}
//           unit="Per liter"
//           location="नई दिल्ली
// "
//         />
//         <PriceCard
//           title="पेट्रोल "
//           price="₹92706.29"
//           unit="Per liter"
//           location="नई दिल्ली
// "
//         />
//       </div>
//     </div>
//     </div>
//   )
// }

// export default PetroliumPrice



// PetroliumPrice Component
import React, { useState, useEffect } from 'react';
import PriceCard from './PriceCard';
export const PetroliumPrice = () => {
  const [prices, setPrices] = useState({
    petrol: null,
    diesel: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://bedharak.vercel.app/api/v1/prices');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Extract petrol and diesel prices
        const petrolPrice = data.find(item => item.commodity === 'petrol')?.price || 'N/A';
        const dieselPrice = data.find(item => item.commodity === 'diesel')?.price || 'N/A';
        
        setPrices({
          petrol: petrolPrice,
          diesel: dieselPrice
        });
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPrices();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="bg-transparent flex items-center justify-center pb-4">
        <div className="flex flex-wrap gap-4 w-full max-w-4xl">
          <PriceCard
            title="डीजल"
            price={`₹${prices.diesel}`}
            unit="Per liter"
            location="नई दिल्ली"
          />
          <PriceCard
            title="पेट्रोल"
            price={`₹${prices.petrol}`}
            unit="Per liter"
            location="नई दिल्ली"
          />
        </div>
      </div>
    </div>
  );
};
export default PetroliumPrice;