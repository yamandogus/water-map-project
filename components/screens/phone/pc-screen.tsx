import { WeatherData } from "@/types/type";
import { cloud, hot, mist, overcast, rain, snow, sun, thunderstorm, wind } from "@/data/weater";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 2,
    centerMode: true, 
  };


const PCScreen = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <div>
      {weatherData && (
        <Slider {...settings}>
          {weatherData.list
            .filter((item) => item.dt_txt.includes("12:00:00"))
            .map((item, index) => (
              <div key={index} className="flex flex-row">
                <Card className={`flex flex-col items-center justify-center `}>
                  <CardBody className="flex flex-col items-center justify-center">
                    <h3 className={`${"text-lg"} font-semibold`}>
                      {new Date(item.dt * 1000).toLocaleDateString("tr-TR", {
                        weekday: "long",
                      })}
                    </h3>
                    <div className="flex items-center justify-center">
                      <DotLottieReact
                        height={150}
                        width={150}
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
                        <p className="font-semibold">{item.wind.speed} km/s</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
};

export default PCScreen;
