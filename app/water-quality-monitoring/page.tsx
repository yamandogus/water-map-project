"use client";

import { Card } from "@heroui/card";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoArrowBack, IoWaterOutline, IoLocationOutline, IoWarningOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { WaterQualityService, EnvironmentalDataService, WaterSource, WaterQualityData } from "@/services/environmentalData";

interface WaterQualityInfo {
  source: WaterSource;
  data: WaterQualityData | null;
  evaluation: {
    status: 'excellent' | 'good' | 'fair' | 'poor';
    details: string[];
  } | null;
  isDrinkable: boolean;
  lastUpdate: string;
  carbonFootprint?: {
    value: number;
    unit: string;
  };
}

const waterSources: WaterSource[] = [
  // İstanbul
  {
    id: "omerli",
    name: "Ömerli Barajı",
    type: "dam",
    coordinates: { lat: 41.0275, lng: 29.3776 },
  },
  {
    id: "terkos",
    name: "Terkos Gölü",
    type: "lake",
    coordinates: { lat: 41.3219, lng: 28.5519 },
  },
  {
    id: "buyukcekmece",
    name: "Büyükçekmece Barajı",
    type: "dam",
    coordinates: { lat: 41.0219, lng: 28.5747 },
  },
  // Ankara
  {
    id: "cubuk-1",
    name: "Çubuk-1 Barajı",
    type: "dam",
    coordinates: { lat: 40.2345, lng: 33.0242 },
  },
  {
    id: "kurtbogazi",
    name: "Kurtboğazı Barajı",
    type: "dam",
    coordinates: { lat: 40.2789, lng: 32.6893 },
  },
  // İzmir
  {
    id: "tahtali",
    name: "Tahtalı Barajı",
    type: "dam",
    coordinates: { lat: 38.1, lng: 27.07 },
  },
  // Sakarya
  {
    id: "sapanca",
    name: "Sapanca Gölü",
    type: "lake",
    coordinates: { lat: 40.7, lng: 30.25 },
  },
  // Konya
  {
    id: "beysehir",
    name: "Beyşehir Gölü",
    type: "lake",
    coordinates: { lat: 37.7833, lng: 31.5000 },
  },
  // Van
  {
    id: "van",
    name: "Van Gölü",
    type: "lake",
    coordinates: { lat: 38.6333, lng: 42.8167 },
  },
  // Burdur
  {
    id: "burdur",
    name: "Burdur Gölü",
    type: "lake",
    coordinates: { lat: 37.7167, lng: 30.1667 },
  },
  // Tuz Gölü
  {
    id: "tuz",
    name: "Tuz Gölü",
    type: "lake",
    coordinates: { lat: 38.7500, lng: 33.4167 },
  },
  // Seyhan
  {
    id: "seyhan",
    name: "Seyhan Barajı",
    type: "dam",
    coordinates: { lat: 37.0167, lng: 35.3333 },
  }
];

export default function WaterQualityMonitoring() {
  const [waterQualityData, setWaterQualityData] = useState<WaterQualityInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          waterSources.map(async (source) => {
            const qualityData = await WaterQualityService.getWaterQualityData(source);
            const evaluation = qualityData ? WaterQualityService.evaluateWaterQuality(qualityData) : null;
            const isDrinkable = qualityData ? WaterQualityService.isDrinkable(qualityData) : false;
            
            // Yıllık su kullanımı (örnek değer)
            const annualWaterUsage = 1000000; // m³/yıl
            const carbonData = await EnvironmentalDataService.getCarbonFootprint(annualWaterUsage);
            
            return {
              source,
              data: qualityData,
              evaluation,
              isDrinkable,
              lastUpdate: new Date().toLocaleString('tr-TR'),
              carbonFootprint: carbonData ? {
                value: Math.round(carbonData.data.attributes.carbon_kg / 1000),
                unit: 'ton CO2/yıl'
              } : undefined
            };
          })
        );
        setWaterQualityData(data);
        setLoading(false);
      } catch (error) {
        console.error("Veri yüklenirken hata oluştu:", error);
        setError("Veriler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status: 'excellent' | 'good' | 'fair' | 'poor'): string => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800';
      case 'good':
        return 'bg-blue-100 text-blue-800';
      case 'fair':
        return 'bg-yellow-100 text-yellow-800';
      case 'poor':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Veriler yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto p-6">
          <IoWarningOutline className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Hata</h2>
          <p className="text-gray-600 dark:text-gray-300">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            href="/"
          >
            <IoArrowBack className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>

        <div className="text-center mb-16">
          <IoWaterOutline className="w-20 h-20 mx-auto text-blue-500 mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Su Kalitesi İzleme Sistemi
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Türkiye&apos;nin su kaynaklarının kalite değerleri ve çevresel etki analizleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waterQualityData.map((item, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <IoLocationOutline className="w-6 h-6 text-blue-500 mr-2" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {item.source.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.source.type === 'dam' ? 'Baraj' : 'Göl'}
                      </p>
                    </div>
                  </div>
                  {item.isDrinkable ? (
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                      <IoCheckmarkCircleOutline className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                  ) : (
                    <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full">
                      <IoWarningOutline className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                  )}
                </div>

                {item.data && item.evaluation && (
                  <>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getStatusColor(
                        item.evaluation.status
                      )}`}
                    >
                      {item.evaluation.status === 'excellent'
                        ? 'Mükemmel'
                        : item.evaluation.status === 'good'
                        ? 'İyi'
                        : item.evaluation.status === 'fair'
                        ? 'Orta'
                        : 'Kötü'}
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">pH Değeri</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {item.data.ph.toFixed(1)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Sıcaklık</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {item.data.temperature.toFixed(1)}°C
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Bulanıklık</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {item.data.turbidity.toFixed(1)} NTU
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Çözünmüş Oksijen</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {item.data.dissolved_oxygen.toFixed(1)} mg/L
                        </span>
                      </div>
                    </div>

                    {item.evaluation.details.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                          Tespit Edilen Sorunlar
                        </h4>
                        <ul className="space-y-1">
                          {item.evaluation.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                            >
                              <IoWarningOutline className="w-4 h-4 text-yellow-500 mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.carbonFootprint && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                          Karbon Ayak İzi
                        </h4>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">Yıllık CO2 Salınımı</span>
                          <span className="font-medium text-gray-800 dark:text-white">
                            {item.carbonFootprint.value} {item.carbonFootprint.unit}
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Son Güncelleme</span>
                    <span className="text-gray-600 dark:text-gray-300">{item.lastUpdate}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <IoWarningOutline className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Önemli Bilgi
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Gösterilen su kalitesi değerleri simülasyon amaçlı üretilmiştir.
                Karbon ayak izi hesaplamaları Carbon Interface API kullanılarak yapılmaktadır.
                Su kalitesi değerlendirmeleri WHO (Dünya Sağlık Örgütü) ve TSE standartlarına göre yapılmaktadır.
                İçilebilirlik durumu, tüm parametrelerin WHO standartlarına uygunluğunu gösterir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
