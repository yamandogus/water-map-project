"use client";

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
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY || "01b8d2d1a240b89af7e0abc2f0917672";

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

const weatherSuggestions = {
  Clouds:
    "Hava bugün bulutlu, dışarı çıkarken hava serin olabilir, hafif bir ceket alabilirsin.",
  Rain: "Hava bugün yağmurlu, şemsiyeni yanına almayı unutma!",
  Snow: "Dışarıda kar yağıyor, kalın giyin ve kaygan yollara dikkat et!",
  Clear:
    "Güneşli bir gün seni bekliyor, dışarıda vakit geçirmek için harika bir fırsat!",
  Overcast: "Gökyüzü kapalı, ama yağmur beklenmiyor. Hafif serin olabilir.",
  Wind: "Rüzgarlı bir hava var, dışarı çıkarken şapka veya atkı kullanabilirsin.",
  Thunderstorm: "Fırtına bekleniyor, mümkünse içeride kal ve dikkatli ol!",
  Mist: "Hava sisli, görüş mesafesi düşük olabilir, araç kullanıyorsan dikkatli olmalısın.",
  Hot: "Bugün hava çok sıcak, bol su içmeyi ve güneşten korunmayı unutma!",
};

const dummyData = {
  city: {
    name: "Şehir Seçiniz",
    country: "TR",
  },
  list: [
    {
      dt: new Date().getTime() / 1000,
      main: {
        temp: 0,
        feels_like: 0,
        humidity: 0,
        pressure: 0,
      },
      weather: [
        {
          main: "Clear",
          description: "Hava durumu bilgisi için şehir seçin",
        },
      ],
      wind: {
        speed: 0,
      },
    },
  ],
};

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
      className={`min-h-screen relative bg-transparent ${
        weatherData?.list[0].weather[0].main === "Clouds"
          ? "bg-[url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?auto=format&w=1400&q=75')]"
          : weatherData?.list[0].weather[0].main === "Rain"
            ? "bg-[url('https://images.unsplash.com/photo-1620385019253-b051a26048ce?auto=format&w=1400&q=75')]"
            : weatherData?.list[0].weather[0].main === "Snow"
              ? "bg-[url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&w=1400&q=75')]"
              : weatherData?.list[0].weather[0].main === "Clear"
                ? "bg-[url('https://images.unsplash.com/photo-1598717123623-19d2a85be3f7?auto=format&w=1400&q=75')]"
                : weatherData?.list[0].weather[0].main === "Overcast"
                  ? "bg-[url('https://images.unsplash.com/photo-1499956827185-0d63ee78a910?auto=format&w=1400&q=75')]"
                  : weatherData?.list[0].weather[0].main === "Wind"
                    ? "bg-[url('https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?auto=format&w=1400&q=75')]"
                    : weatherData?.list[0].weather[0].main === "Thunderstorm"
                      ? "bg-[url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&w=1400&q=75')]"
                      : weatherData?.list[0].weather[0].main === "Mist"
                        ? "bg-[url('https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&w=1400&q=75')]"
                        : weatherData?.list[0].weather[0].main === "Hot"
                          ? "bg-[url('https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?auto=format&w=1400&q=75')]"
                          : "bg-[url('https://images.unsplash.com/photo-1598717123623-19d2a85be3f7?auto=format&w=1400&q=75')]"
      }`}
      style={{
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
            color={"success"}
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
          <Card
            className={`p-6 dark:shadow-white/30 dark:text-gray-400 bg-cover bg-center transition-all duration-300`}
          >
            <div className="flex justify-between items-center backdrop-blur-sm bg-white/30 p-4 rounded-lg">
              <div>
                <div className="text-6xl font-bold">
                  {weatherData?.list[0].main.temp}°C
                </div>
                <div className="text-xl mt-2 font-bold text-yellow-400">
                  Hissedilen: {weatherData?.list[0].main.feels_like}°C
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl">
                  <div className="w-32 h-32">
                    <DotLottieReact
                      height={128}
                      width={128}
                      src={
                        weatherData?.list[0].weather[0].main === "Clouds"
                          ? cloud
                          : weatherData?.list[0].weather[0].main === "Rain"
                            ? rain
                            : weatherData?.list[0].weather[0].main === "Snow"
                              ? snow
                              : weatherData?.list[0].weather[0].main === "Clear"
                                ? sun
                                : weatherData?.list[0].weather[0].main ===
                                    "Overcast"
                                  ? overcast
                                  : weatherData?.list[0].weather[0].main ===
                                      "Wind"
                                    ? wind
                                    : weatherData?.list[0].weather[0].main ===
                                        "Thunderstorm"
                                      ? thunderstorm
                                      : weatherData?.list[0].weather[0].main ===
                                          "Mist"
                                        ? mist
                                        : weatherData?.list[0].weather[0]
                                              .main === "Hot"
                                          ? hot
                                          : ""
                      }
                      loop
                      autoplay
                    />
                  </div>
                </div>
                <div className="text-xl mt-2">
                  {weatherData?.list[0].weather[0].description}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6 backdrop-blur-sm bg-white/30 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-md font-bold">Nem</div>
                <div className="text-sm text-blue-500">
                  {weatherData?.list[0].main.humidity} %
                </div>
              </div>
              <div className="text-center">
                <div className="text-md font-bold">Rüzgar Hızı</div>
                <div className="text-sm text-blue-500">
                  {weatherData?.list[0].wind.speed} km/s
                </div>
              </div>
              <div className="text-center">
                <div className="text-md font-bold">Basınç</div>
                <div className="text-sm text-blue-500">
                  {weatherData?.list[0].main.pressure} hPa
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-6 dark:shadow-white/30 dark:text-gray-400">
            <h2 className="text-4xl font-bold">
              {weatherData?.city.name}, {weatherData?.city.country}
            </h2>
            <div className="text-6xl font-bold mt-4">{currentTime}</div>
            <div className="text-xl mt-2">{currentDate}</div>
            <div>
              <h2 className="text-semibold">Hava Durumu Önerileri</h2>
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
                          : weatherData?.list[0].weather[0].main ===
                              "Thunderstorm"
                            ? weatherSuggestions.Thunderstorm
                            : weatherData?.list[0].weather[0].main === "Mist"
                              ? weatherSuggestions.Mist
                              : weatherData?.list[0].weather[0].main === "Hot"
                                ? weatherSuggestions.Hot
                                : ""}
              </p>
            </div>
          </Card>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6 pb-4">
          <Card className="p-6 dark:shadow-white/30 dark:text-gray-400">
            <h2 className="text-2xl font-bold mb-4">5 Günlük Tahmin:</h2>
            <div className="space-y-4">
              {weatherData?.list
                .filter((item, index) => index % 8 === 0)
                .slice(0, 5)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
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
                    <div className="font-bold">
                      {item.main.temp.toFixed(1)}°C
                    </div>
                  </div>
                ))}
            </div>
          </Card>

          <Card className="p-6 dark:shadow-white/30 dark:text-gray-400">
            <h2 className="text-2xl font-bold mb-4">Saatlik Tahmin:</h2>
            <div className="space-y-4">
              {weatherData?.list.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center gap-4">
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
        </div>
      </div>
    </div>
  );
}
