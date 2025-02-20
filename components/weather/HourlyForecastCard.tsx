import { WeatherResponse } from "@/types/type";
import { Card } from "@heroui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import {
  cloud,
  mist,
  overcast,
  rain,
  snow,
  sun,
  thunderstorm,
  wind,
  hot,
} from "@/data/weater";

const HourlyForecastCard = ({
  weatherData,
}: {
  weatherData: WeatherResponse;
}) => {
  return (
    <Card className="p-6 dark:shadow-white/30 dark:text-gray-400">
      <h2 className="text-2xl font-bold mb-4">Saatlik Tahmin:</h2>
      <div className="space-y-4">
        {weatherData?.list.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <div className="flex sm:flex-row flex-col  items-center gap-4">
              <div className="w-12 h-12">
                <DotLottieReact
                  height={48}
                  width={48}
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
                                : item.weather[0].main === "Thunderstorm"
                                  ? thunderstorm
                                  : item.weather[0].main === "Mist"
                                    ? mist
                                    : item.weather[0].main === "Hot"
                                      ? hot
                                      : ""
                  }
                  loop
                  autoplay
                />
              </div>
              <div>
                <div className="font-semibold">
                  {new Date(item.dt * 1000).toLocaleTimeString("tr-TR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
                <div className="text-sm text-gray-500">
                  {item.weather[0].description}
                </div>
              </div>
            </div>
            <div className="text-xl font-bold">
              {item.main.temp.toFixed(1)}°C
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HourlyForecastCard;
