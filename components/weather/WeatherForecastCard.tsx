import { Card } from "@heroui/card";
import React from "react";

import { WeatherResponse } from "@/types/type";

const getWeatherEmoji = (weatherMain: string) => {
  switch (weatherMain) {
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Snow":
      return "🌨️";
    case "Clear":
      return "☀️";
    case "Overcast":
      return "🌥️";
    case "Wind":
      return "💨";
    case "Thunderstorm":
      return "⛈️";
    case "Mist":
      return "🌫️";
    case "Hot":
      return "🌡️";
    default:
      return "❓";
  }
};

const WeatherForecastCard = ({ weatherData }: { weatherData: WeatherResponse }) => {
  return (
    <Card
      className="relative p-6 h-full
      bg-white/95 dark:bg-gray-800/80 backdrop-blur-md
      border-2 border-gray-300 dark:border-gray-700/80
      rounded-2xl
      shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.1)]
      transition-all duration-300"
    >
      <h2 className="text-2xl font-bold mb-4">5 Günlük Tahmin:</h2>
      <div className="space-y-4">
        {weatherData?.list
          .filter((item, index) => index % 8 === 0)
          .slice(0, 5)
          .map((item, index) => (
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg border-b border-gray-200 dark:border-gray-700"
              key={index}
            >
              <div className="flex sm:flex-row flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-4xl">
                  {getWeatherEmoji(item.weather[0].main)}
                </div>
                <div>
                  <div className="font-semibold">
                    {new Date(item.dt * 1000).toLocaleDateString("tr-TR", { weekday: "long" })}
                  </div>
                  <div className="text-sm text-gray-500">{item.weather[0].description}</div>
                </div>
              </div>
              <div className="text-xl font-bold">{item.main.temp.toFixed(1)}°C</div>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default WeatherForecastCard;
