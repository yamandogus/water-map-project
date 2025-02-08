"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { WeatherData } from "@/types/type";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PhoneScreen from "@/components/screens/phone/phone-screen";
import PCScreen from "@/components/screens/phone/pc-screen";

const URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "01b8d2d1a240b89af7e0abc2f0917672";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
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
          cnt: "40"
        }
      });
      setWeatherData(response.data);
      console.log("Data", response.data);
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
      console.log("filtered", filteredSuggestions);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <Input
            className="bg-dark-900"
            placeholder="Yer ismi giriniz"
            type="text"
            size="lg"
            color="primary"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <Select
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            selectionMode="single"
            size="sm"
            color="primary"
            label="Konum seçiniz"
          >
            {suggestions.map((suggestion) => (
              <SelectItem
                key={suggestion.lat}
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
      </div>
      <div className="mt-4 hidden sm:block">
       <PhoneScreen weatherData={weatherData as WeatherData} />
      </div>
      <div className="mt-4 block sm:hidden">
          <PCScreen weatherData={weatherData as WeatherData} />
      </div>
    </div>
  );
}
