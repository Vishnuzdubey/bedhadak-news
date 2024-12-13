// LocationWeather.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationWeather = () => {
  const [weather, setWeather] = useState({
    region: "",
    temp: "",
    icon: "",
  });

  useEffect(() => {
    // Function to get location and fetch weather data
    const fetchWeather = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              // Reverse geocoding to get the city name
              const geoResponse = await axios.get(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              console.log(geoResponse.data);

              const city = geoResponse.data.principalSubdivision;

              // Store city in local storage
              localStorage.setItem("city", city);

              // Fetch weather data
              const weatherResponse = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=78d3289fc51f4586b3a90314230809&q=${city}&aqi=no`
              );

              const { region } = weatherResponse.data.location;
              const { temp_c, condition } = weatherResponse.data.current;

              setWeather({
                region,
                temp: temp_c,
                icon: condition.icon,
              });
            } catch (error) {
              console.error("Error fetching weather data: ", error);
            }
          },
          (error) => {
            console.error("Error getting location: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {weather.region && weather.temp ? (
        <>
          <span className="mt-2">📍 {weather.region}</span>
          {/* <img src={weather.icon} alt="weather icon" className="w-16 h-16" /> */}
          <span className="mt-2">🌤️{weather.temp}°C</span>
          {/* <img src={weather.icon} alt="weather icon" className="w-16 h-16" /> */}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default LocationWeather;
