"use client";

import { Card } from "@heroui/card";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";
import {
  IoWaterOutline,
  IoThermometerOutline,
  IoWarningOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

// Demo veriler
const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

const waterQualityData = {
  İstanbul: {
    ph: 7.2,
    temperature: 18.5,
    turbidity: 1.2, // Bulanıklık
    conductivity: 280, // İletkenlik
    dissolved_oxygen: 8.5, // Çözünmüş oksijen
    status: "Normal",
    last_updated: "2024-01-20 14:30",
    stations: [
      { name: "Ömerli Barajı", status: "Normal", quality_score: 92 },
      { name: "Büyükçekmece Gölü", status: "Normal", quality_score: 88 },
      { name: "Terkos Gölü", status: "İyi", quality_score: 95 },
    ],
  },
  Ankara: {
    ph: 7.4,
    temperature: 16.8,
    turbidity: 1.5,
    conductivity: 295,
    dissolved_oxygen: 7.8,
    status: "İyi",
    last_updated: "2024-01-20 14:25",
    stations: [
      { name: "Çamlıdere Barajı", status: "İyi", quality_score: 94 },
      { name: "Kurtboğazı Barajı", status: "Normal", quality_score: 89 },
      { name: "Pursaklar İstasyonu", status: "Normal", quality_score: 87 },
    ],
  },
  // Diğer şehirler için benzer veriler...
};

export default function WaterQualityPage() {
  const [selectedCity, setSelectedCity] = useState("İstanbul");
  const data = waterQualityData[selectedCity as keyof typeof waterQualityData];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "İyi":
        return "text-green-500";
      case "Normal":
        return "text-blue-500";
      case "Uyarı":
        return "text-yellow-500";
      case "Kritik":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getQualityScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 w-full md:w-auto">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Su Kalitesi Takip Sistemi
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Gerçek zamanlı su kalitesi izleme ve analiz platformu
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Select
              className="min-w-[200px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg"
              onChange={(city) => setSelectedCity(city.target.value)}
              placeholder="Şehir Seçiniz"
              selectedKeys={[selectedCity]}
            >
              {cities.map((city) => (
                <SelectItem key={city}>{city}</SelectItem>
              ))}
            </Select>
          </div>
        </div>

        {/* Ana Metrikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl shadow-inner">
                <IoWaterOutline className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">pH Değeri</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{data.ph}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl shadow-inner">
                <IoThermometerOutline className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Sıcaklık</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {data.temperature}°C
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl shadow-inner">
                <IoWaterOutline className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Bulanıklık</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {data.turbidity} NTU
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-2xl shadow-inner">
                <IoWaterOutline className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Çözünmüş Oksijen
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {data.dissolved_oxygen} mg/L
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* İstasyonlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Ölçüm İstasyonları
            </h2>
            <div className="space-y-4">
              {data.stations.map((station, index) => (
                <div
                  className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300"
                  key={index}
                >
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">{station.name}</p>
                    <p className={`text-sm ${getStatusColor(station.status)}`}>{station.status}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-4">
                      <p className="text-sm text-gray-500">Kalite Skoru</p>
                      <p className="font-semibold">{station.quality_score}%</p>
                    </div>
                    <div
                      className="w-2 h-8 rounded-full"
                      style={{ backgroundColor: getQualityScoreColor(station.quality_score) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Genel Durum
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center">
                  {data.status === "İyi" || data.status === "Normal" ? (
                    <IoCheckmarkCircleOutline className="w-6 h-6 text-green-500 mr-2" />
                  ) : (
                    <IoWarningOutline className="w-6 h-6 text-yellow-500 mr-2" />
                  )}
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Genel Su Kalitesi</p>
                    <p className={`text-sm ${getStatusColor(data.status)}`}>{data.status}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                <p className="text-sm text-gray-500 mb-2">Son Güncelleme</p>
                <p className="font-medium">{data.last_updated}</p>
              </div>

              <div className="p-4 bg-blue-50/50 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg border border-blue-200/50 dark:border-blue-700/50">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  ℹ️ Tüm ölçümler DSİ standartlarına uygun olarak yapılmaktadır.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
