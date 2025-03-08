import { Card } from "@heroui/card";
import React from "react";

import { weatherSuggestions } from "./weather-dumy";

import { WeatherResponse } from "@/types/type";

const WeatherInfoCard = ({ weatherData }: { weatherData: WeatherResponse }) => {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  return (
    <Card
      className="relative p-6 h-full
      bg-white/95 dark:bg-gray-800/80 backdrop-blur-md
      border-2 border-gray-300 dark:border-gray-700/80
      rounded-2xl
      shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.1)]
      transition-all duration-300"
    >
      <h2 className="text-4xl font-bold">
        {weatherData?.city.name}, {weatherData?.city.country}
      </h2>
      <div className="text-6xl font-bold mt-4">{currentTime}</div>
      <div className="text-xl mt-2">{currentDate}</div>
      <div>
        <h2 className="text-semibold text-blue-500 mt-4 mb-2">Hava Durumu Önerileri</h2>
        <p>
          {weatherData?.list[0].weather[0].main === "Clouds"
            ? weatherSuggestions.Clouds
            : weatherData?.list[0].weather[0].main === "Rain"
              ? weatherSuggestions.Rain
              : weatherData?.list[0].weather[0].main === "Snow"
                ? weatherSuggestions.Snow
                : weatherData?.list[0].weather[0].main === "Clear"
                  ? weatherSuggestions.Clear
                  : weatherData?.list[0].weather[0].main === "Overcast"
                    ? weatherSuggestions.Overcast
                    : weatherData?.list[0].weather[0].main === "Thunderstorm"
                      ? weatherSuggestions.Thunderstorm
                      : weatherData?.list[0].weather[0].main === "Mist"
                        ? weatherSuggestions.Mist
                        : weatherData?.list[0].weather[0].main === "Hot"
                          ? weatherSuggestions.Hot
                          : ""}
        </p>
      </div>
    </Card>
  );
};

export default WeatherInfoCard;
