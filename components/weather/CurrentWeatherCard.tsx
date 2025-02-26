import { Card } from "@heroui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

import { cloud, hot, mist, overcast, rain, snow, sun, thunderstorm, wind } from "@/data/weater";
import { WeatherResponse } from "@/types/type";

const CurrentWeatherCard = ({ weatherData }: { weatherData: WeatherResponse }) => {
  return (
    <Card className={`p-6 dark:shadow-white/30 dark:text-gray-600 transition-all duration-300`}>
      <div className="flex sm:justify-between sm:flex-row flex-col items-center p-4 rounded-2xl">
        <div className="sm:order-1 order-2 sm:text-left text-center">
          <div className="text-6xl font-bold">{weatherData?.list[0].main.temp}°C</div>
          <div className="text-xl mt-2 font-bold text-yellow-400">
            Hissedilen: {weatherData?.list[0].main.feels_like}°C
          </div>
        </div>
        <div className="text-center sm:order-2 order-1 mb-4 sm:mb-0">
          <div className="flex justify-center items-center">
            <div className="w-32 h-32 flex justify-center items-center">
              <DotLottieReact
                autoplay
                height={128}
                loop
                src={
                  weatherData?.list[0].weather[0].main === "Clouds"
                    ? cloud
                    : weatherData?.list[0].weather[0].main === "Rain"
                      ? rain
                      : weatherData?.list[0].weather[0].main === "Snow"
                        ? snow
                        : weatherData?.list[0].weather[0].main === "Clear"
                          ? sun
                          : weatherData?.list[0].weather[0].main === "Overcast"
                            ? overcast
                            : weatherData?.list[0].weather[0].main === "Wind"
                              ? wind
                              : weatherData?.list[0].weather[0].main === "Thunderstorm"
                                ? thunderstorm
                                : weatherData?.list[0].weather[0].main === "Mist"
                                  ? mist
                                  : weatherData?.list[0].weather[0].main === "Hot"
                                    ? hot
                                    : ""
                }
                width={128}
              />
            </div>
          </div>
          <div className="text-xl mt-2 text-black font-semibold dark:text-gray-100">
            {weatherData?.list[0].weather[0].description.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 backdrop-blur-sm bg-white/30 p-4 rounded-lg">
        <div className="text-center">
          <div className="text-md font-bold">🌬️ Nem</div>
          <div className="font-bold text-yellow-400 dark:text-blue-500">
            {weatherData?.list[0].main.humidity} %
          </div>
        </div>
        <div className="text-center">
          <div className="text-md font-bold">💨 Rüzgar Hızı</div>
          <div className="font-bold text-yellow-400 dark:text-blue-500">
            {weatherData?.list[0].wind.speed} km/s
          </div>
        </div>
        <div className="text-center">
          <div className="text-md font-bold">🌫️ Basınç</div>
          <div className="font-bold text-yellow-400 dark:text-blue-500">
            {weatherData?.list[0].main.pressure} hPa
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeatherCard;
