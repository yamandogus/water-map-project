"use client";

import { WeatherResponse } from "@/types/type";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { backgroundImages, dummyData } from "./weather/weather-dumy";
import CurrentWeatherCard from "./weather/CurrentWeatherCard";
import WeatherInfoCard from "./weather/WeatherInfoCard";
import WeatherForecastCard from "./weather/WeatherForecastCard";
import HourlyForecastCard from "./weather/HourlyForecastCard";

const URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY || "01b8d2d1a240b89af7e0abc2f0917672";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

export default function WeatherDashboard() {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(
    dummyData
  );
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      handleClick();
    }
  }, [lat, lon]);

  const handleClick = async () => {
    try {
      const response = await axios.get(URL, {
        params: {
          lat: lat,
          lon: lon,
          lang: "tr",
          appid: API_KEY,
          units: "metric",
          cnt: "40",
        },
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
      const response = axios.get(
        `https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=100`
      );
      const filteredSuggestions = (await response).data.map((item: any) => ({
        display_name: item.display_name,
        lat: item.lat,
        lon: item.lon,
      }));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div
      className={`min-h-screen relative bg-transparent rounded`}
      style={{
        backgroundImage: `url(${backgroundImages[weatherData?.list[0].weather[0].main as keyof typeof backgroundImages] || backgroundImages.default})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <Input
            className="w-full"
            width={"100%"}
            color="success"
            placeholder="İl veya İlçe adı giriniz..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Select
            className="w-full"
            color="success"
            placeholder="Seçiniz..."
            onBlur={() => setIsOpen(false)}
            onFocus={() => setIsOpen(true)}
          >
            {suggestions.map((suggestion, index) => (
              <SelectItem
                key={index}
                value={suggestion.display_name}
                onPress={() => {
                  setLat(Number(suggestion.lat));
                  setLon(Number(suggestion.lon));
                }}
              >
                {suggestion.display_name}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <CurrentWeatherCard weatherData={weatherData ?? dummyData} />
          <WeatherInfoCard weatherData={weatherData ?? dummyData} />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-4">
          <WeatherForecastCard weatherData={weatherData ?? dummyData} />
          <HourlyForecastCard weatherData={weatherData ?? dummyData} />
        </div>
      </div>
    </div>
  );
}
