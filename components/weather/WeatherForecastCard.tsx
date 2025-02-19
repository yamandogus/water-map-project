import {
  cloud,
  hot,
  mist,
  overcast,
  rain,
  snow,
  sun,
  thunderstorm,
  wind,
} from "@/data/weater";
import { WeatherResponse } from "@/types/type";
import { Card } from "@heroui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const WeatherForecastCard = ({
  weatherData,
}: {
  weatherData: WeatherResponse;
}) => {
  return (
    <Card className="p-6 dark:shadow-white/30 dark:text-gray-400">
      <h2 className="text-2xl font-bold mb-4">5 Günlük Tahmin:</h2>
      <div className="space-y-4">
        {weatherData?.list
          .filter((item, index) => index % 8 === 0)
          .slice(0, 5)
          .map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-4 w-1/4">
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
                <div>
                  <div className="font-semibold">
                    {new Date(item.dt * 1000).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.weather[0].description}
                  </div>
                </div>
              </div>
              <div className="font-bold">{item.main.temp.toFixed(1)}°C</div>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default WeatherForecastCard;
