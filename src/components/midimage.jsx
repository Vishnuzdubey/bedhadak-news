import React from 'react'
import { useEffect,useState } from 'react';

export const midimage = () => {
  const [allAds , setAllAds] = useState([]);
  useEffect(() => {
    const fetchAds = async () => {
      const response = await fetch("https://bedharak.vercel.app/api/v1/advertisement");
      const data = await response.json();
      setAllAds(data);
    }
    fetchAds();
  }, [])
  console.log("Go to hell")

  return (
    <div>
            <div>Gand mara gyi</div>
                  {(allAds.length > 0) ? <img src={allAds[1].image_url} alt="Advertisement" /> : <p className="text-gray-600 font-bold">विज्ञापन स्थान  </p>}
    </div>
  )
}

// export default midimage;
