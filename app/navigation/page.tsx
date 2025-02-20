"use client";
interface EarthquakeResponse {
  status: boolean;
  httpStatus: number;
  serverloadms: number;
  desc: string;
  metadata: EarthquakeMetadata;
  result: Earthquake[];
}

// Metadata interface'i
interface EarthquakeMetadata {
  date_starts: string;
  date_ends: string;
  total: number;
}

// Deprem verisi interface'i
interface Earthquake {
  _id: string;
  earthquake_id: string;
  provider: string;
  title: string;
  date: string;
  mag: number;
  depth: number;
  geojson: GeoPoint;
  location_properties: LocationProperties;
  rev: null;
  date_time: string;
  created_at: number;
  location_tz: string;
}

// Coğrafi nokta interface'i
interface GeoPoint {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

// Konum özellikleri interface'i
interface LocationProperties {
  closestCity: City;
  epiCenter: EpiCenter;
  closestCities: City[];
  airports: Airport[];
}

// Şehir interface'i
interface City {
  name: string;
  cityCode: number;
  distance: number;
  population: number;
}

// Merkez üssü interface'i
interface EpiCenter {
  name: string;
  cityCode: number;
  population: number | null;
}

// Havalimanı interface'i
interface Airport {
  distance: number;
  name: string;
  code: string;
  coordinates: GeoPoint;
}

import { Accordion, AccordionItem } from "@heroui/accordion";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEarthquakes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.orhanaydogdu.com.tr/deprem/kandilli/live"
      );
      console.log("API Response:", response.data);
      setEarthquakes(response.data.result);
    } catch (error) {
      console.error("API isteği başarısız oldu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEarthquakes();
  }, []);

  const handleRefresh = () => {
    fetchEarthquakes();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-950">
        <h1 className="text-2xl text-white font-bold">Son Depremler</h1>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className={`px-4 py-2 bg-blue-500 text-white rounded transition-colors flex items-center gap-2
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Yükleniyor...
            </>
          ) : (
            'Güncelle'
          )}
        </button>
      </div>

      <div className="flex flex-1 gap-4 p-4">
        {/* Sol Taraf - Deprem Bilgileri */}
        <div className="w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Deprem Anında Yapılması Gerekenler</h2>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Deprem Öncesi Hazırlık"
              title="Deprem Öncesi Hazırlık"
            >
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Acil durum çantası hazırlayın</li>
                <li>Aile afet planı oluşturun</li>
                <li>Güvenli toplanma alanlarını öğrenin</li>
                <li>Evinizde güvenlik kontrolü yapın</li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Deprem Anında"
              title="Deprem Anında"
            >
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Çök-Kapan-Tutun hareketini uygulayın</li>
                <li>Pencerelerden uzak durun</li>
                <li>Asansör kullanmayın</li>
                <li>Panik yapmayın</li>
              </ul>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Deprem Sonrası"
              title="Deprem Sonrası"
            >
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Binayı güvenli şekilde terkedin</li>
                <li>Yetkililerin uyarılarını takip edin</li>
                <li>Yaralılara yardım edin</li>
                <li>Artçı sarsıntılara karşı dikkatli olun</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Sağ Taraf - Deprem Listesi (Scrollable) */}
        <div className="w-2/3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
          <div className="grid grid-cols-1 gap-4">
            {earthquakes.map((earthquake, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <div className="space-y-2">
                  {/* Deprem Başlığı */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    🌍 {earthquake.title}
                  </h3>

                  {/* Deprem Detayları */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">
                        📅 <strong>Tarih:</strong> {earthquake.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        📊 <strong>Büyüklük:</strong> {earthquake.mag}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        🌊 <strong>Derinlik:</strong> {earthquake.depth} km
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">
                        📍 <strong>Merkez Üssü:</strong>{" "}
                        {earthquake.location_properties.epiCenter.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        🏙️ <strong>En Yakın Şehir:</strong>{" "}
                        {earthquake.location_properties.closestCity.name}
                      </p>
                    </div>
                  </div>

                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="Yakın Şehirler"
                      title="Yakın Şehirler"
                    >
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {earthquake.location_properties.closestCities.map(
                          (city, idx) => (
                            <li key={idx}>
                              🏡 {city.name} ({Math.round(city.distance / 1000)} km)
                            </li>
                          )
                        )}
                      </ul>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Yakın Havalimanları"
                      title="Yakın Havalimanları"
                    >
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {earthquake.location_properties.airports.map(
                          (airport, idx) => (
                            <li key={idx}>
                              🛫 {airport.name} ({Math.round(airport.distance / 1000)} km)
                            </li>
                          )
                        )}
                      </ul>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
