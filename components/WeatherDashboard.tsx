"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

import CurrentWeatherCard from "./weather/CurrentWeatherCard";
import HourlyForecastCard from "./weather/HourlyForecastCard";
import { backgroundImages, dummyData } from "./weather/weather-dumy";
import WeatherForecastCard from "./weather/WeatherForecastCard";
import WeatherInfoCard from "./weather/WeatherInfoCard";

import { WeatherResponse } from "@/types/type";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

export default function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState<WeatherResponse>(dummyData);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      handleClick();
    }
  }, [lat, lon]);

  const handleClick = async () => {
    try {
      const response = await axios.get("/api/weather", {
        params: {
          lat: lat,
          lon: lon
        }
      });

      setWeatherData(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data", error);
      return null;
    }
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchTerm(value);
    if (value.length > 0) {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=100`
      );
      const filteredSuggestions = response.data.map((item: any) => ({
        display_name: item.display_name,
        lat: item.lat,
        lon: item.lon,
      }));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = suggestions.find(
      (suggestion) => suggestion.display_name === e.target.value
    );
    if (selectedOption) {
      setLat(Number(selectedOption.lat));
      setLon(Number(selectedOption.lon));
    }
  };

  return (
    <div
      className={`min-h-screen relative bg-transparent rounded`}
      style={{
        minHeight: "100vh",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto space-y-6 px-4 mt-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <IoLocationOutline className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2.5 
              bg-white/95 dark:bg-gray-800/80 backdrop-blur-md
              border-2 border-gray-300 dark:border-gray-700/80
              rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)]
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50
              focus:border-transparent
              transition-all duration-300"
              onChange={handleSearch}
              placeholder="İl veya İlçe adı giriniz..."
              value={searchTerm}
              onFocus={() => setIsOpen(true)}
            />

            {isOpen && suggestions.length > 0 && (
              <div
                className="absolute w-full mt-2 py-2 bg-white/95 dark:bg-gray-800/90 rounded-xl 
              shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.1)]
              border-2 border-gray-300 dark:border-gray-700/80 backdrop-blur-md max-h-60 overflow-y-auto z-[100]"
              >
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 
                    text-gray-900 dark:text-white transition-colors cursor-pointer
                    text-sm truncate"
                    onClick={() => {
                      setLat(Number(suggestion.lat));
                      setLon(Number(suggestion.lon));
                      setSearchTerm(suggestion.display_name.split(",")[0]);
                      setIsOpen(false);
                    }}
                  >
                    {suggestion.display_name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <CurrentWeatherCard weatherData={weatherData} />
          <WeatherInfoCard weatherData={weatherData} />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-4">
          <WeatherForecastCard weatherData={weatherData} />
          <HourlyForecastCard weatherData={weatherData} />
        </div>
      </div>
    </div>
  );
}
