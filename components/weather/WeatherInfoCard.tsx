import { Card } from "@heroui/card";
import React from "react";

import { weatherSuggestions } from "./weather-dumy";

import { WeatherResponse } from "@/types/type";

const WeatherInfoCard = ({ weatherData }: { weatherData: WeatherResponse }) => {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  return (
    <Card className="p-6 dark:shadow-white/30 dark:text-gray-400">
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
