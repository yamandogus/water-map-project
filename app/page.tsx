"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Card, CardBody } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { WeatherData } from "@/types/type";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.openweathermap.org/data/2.5/forecast?";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

const sun =
  "https://lottie.host/ec07c040-7e69-4d35-a0fd-80f8029bef91/KB41wLx7f1.lottie";
const rain =
  "https://lottie.host/5e3ade54-47b5-4f66-9338-4af14a6f3d4d/fGGAv0CbTv.lottie";
const cloud =
  "https://lottie.host/11f541ca-ccf0-4523-90e7-d3b4fad9011c/WrMOXg0Fud.lottie";
const overcast =
  "https://lottie.host/0bfe7cc7-3417-45cd-8dfb-ee89194af150/EFRK8B5sEf.lottie";
const snow =
  "https://lottie.host/521c3e53-4210-44b6-acd7-ae8f11fc11cf/QqcTwi6dNd.lottie";
const wind =
  "https://lottie.host/0bfe7cc7-3417-45cd-8dfb-ee89194af150/EFRK8B5sEf.lottie";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async () => {
    const params = new URLSearchParams({
      lat: String(lat),
      lon: String(lon),
      lang: "tr",
      appid: process.env.NEXT_PUBLIC_API_KEY || "",
      units: "metric",
      cnt: "40",
    });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}?${params.toString()}`
      );
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
      <div className="flex mb-4 gap-4">
        <Input
          className="bg-dark-900"
          placeholder="Yer ismi giriniz"
          type="text"
          size="lg"
          color="primary"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
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
                  handleClick();
                }}
              >
                {suggestion.display_name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-4">
        {weatherData && (
          <div className="flex flex-wrap justify-center align-center gap-4 mt-4">
            {weatherData.list
              .filter((item) => item.dt_txt.includes("12:00:00"))
              .map((item, index) => (
                <div key={index} className="flex justify-center align-center w-[199px]">
                  <Card
                    className={`flex flex-col items-center justify-center `}
                  >
                    <CardBody className="flex flex-col items-center justify-center">
                      <h3 className={`${"text-lg"} font-semibold`}>
                        {new Date(item.dt * 1000).toLocaleDateString("tr-TR", {
                          weekday: "long",
                        })}
                      </h3>
                      <div className="flex items-center justify-center">
                        <DotLottieReact
                          height={200}
                          width={200}
                          src={
                            item.weather[0].main === "Clouds"
                              ? cloud
                              : item.weather[0].main === "Rain"
                                ? rain
                                : item.weather[0].main === "Snow"
                                  ? snow
                                  : item.weather[0].main === "Clear"
                                    ? sun
                                    : item.weather[0].main === "Overcast"
                                      ? overcast
                                      : item.weather[0].main === "Wind"
                                        ? wind
                                        : ""
                          }
                          loop
                          autoplay
                        />
                      </div>
                      <p className={`${"text-lg"} font-semibold capitalize`}>
                        {item.weather[0].description}
                      </p>
                      <h6
                        className={`text-[#FFB457] font-[800] ${"text-[30px]"} font-semibold`}
                      >
                        {item.main.temp}°C
                      </h6>

                      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-sm">Nem</p>
                          <p className="font-semibold">{item.main.humidity}%</p>
                        </div>
                        <div>
                          <p className="text-sm">Rüzgar</p>
                          <p className="font-semibold">
                            {item.wind.speed} km/s
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
