"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Earthquake } from "@/types/type";
const Page = () => {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const emergencyNumbers = [
    { name: "AFAD", number: "122" },
    { name: "Acil Çağrı", number: "112" },
    { name: "İtfaiye", number: "110" },
    { name: "Polis İmdat", number: "155" },
    { name: "Jandarma", number: "156" },
  ];

  const emergencyBag = [
    "El feneri ve yedek piller",
    "İlk yardım çantası",
    "Su ve dayanıklı gıdalar",
    "Düdük",
    "Powerbank",
    "Önemli evrakların kopyaları",
    "Battaniye",
    "Hijyen malzemeleri",
    "Radyo",
    "Yedek kıyafet",
  ];

  const emergencyApps = [
    {
      name: "AFAD",
      description: "Resmi afet ve acil durum uygulaması",
      url: "https://www.afad.gov.tr/afad-mobil",
    },
    {
      name: "e-Devlet Kapısı",
      description: "Güvenli Bölge sorgulama ve acil durum bildirimleri",
      url: "https://www.turkiye.gov.tr/",
    },
    {
      name: "Deprem Bilgi Sistemi",
      description: "Anlık deprem bilgileri ve haritalar",
      url: "http://www.koeri.boun.edu.tr/sismo/2/deprem-bilgi-sistemi/",
    },
  ];

  const fetchEarthquakes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live");
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
    <div className="min-h-screen">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-950 sticky top-0 z-10">
          <h1 className="text-lg sm:text-2xl text-white font-bold">
            Deprem Bilgilendirme ve Son Depremler
          </h1>
          <button
            className={`px-2 sm:px-4 py-2 bg-blue-500 text-white rounded transition-colors flex items-center gap-2 text-sm sm:text-base
              ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
            disabled={isLoading}
            onClick={handleRefresh}
          >
            {isLoading ? "Yükleniyor..." : "Güncelle"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 p-4 h-[calc(100vh-5rem)] overflow-y-auto lg:overflow-hidden">
          {/* Sol Taraf - Deprem Bilgileri */}
          <div className="w-full lg:w-1/3 space-y-4 lg:overflow-y-auto lg:pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full">
            {/* Acil Numaralar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                ⚠️ Acil Durum Numaraları
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                {emergencyNumbers.map((item, index) => (
                  <div
                    className="bg-gray-100 dark:bg-gray-700 p-2 sm:p-3 rounded-lg text-center"
                    key={index}
                  >
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      {item.name}
                    </p>
                    <p className="text-red-600 dark:text-red-400 text-lg sm:text-xl">
                      {item.number}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deprem Çantası */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                🎒 Deprem Çantasında Bulunması Gerekenler
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                {emergencyBag.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Deprem Anında Yapılması Gerekenler */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                ⚡ Deprem Anında Yapılması Gerekenler
              </h2>
              <Accordion>
                <AccordionItem
                  aria-label="Deprem Öncesi Hazırlık"
                  key="1"
                  title="Deprem Öncesi Hazırlık"
                >
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                    <li>Acil durum çantası hazırlayın ve kolay ulaşılabilir bir yerde saklayın</li>
                    <li>Aile afet planı oluşturun ve toplanma noktası belirleyin</li>
                    <li>Güvenli toplanma alanlarını öğrenin ve ailenizle paylaşın</li>
                    <li>Evinizde güvenlik kontrolü yapın ve eşyaları sabitleyin</li>
                    <li>Gaz ve su vanalarının yerlerini öğrenin</li>
                    <li>Önemli evrakların kopyalarını alın</li>
                  </ul>
                </AccordionItem>
                <AccordionItem aria-label="Deprem Anında" key="2" title="Deprem Anında">
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                    <li>Çök-Kapan-Tutun hareketini uygulayın</li>
                    <li>Pencere ve balkonlardan uzak durun</li>
                    <li>Asansör kullanmayın</li>
                    <li>Panik yapmayın ve sakin kalmaya çalışın</li>
                    <li>Merdivenlere hücum etmeyin</li>
                    <li>Sarsıntı geçene kadar güvenli bir noktada bekleyin</li>
                  </ul>
                </AccordionItem>
                <AccordionItem aria-label="Deprem Sonrası" key="3" title="Deprem Sonrası">
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                    <li>Binayı güvenli şekilde terkedin</li>
                    <li>Yetkililerin uyarılarını takip edin</li>
                    <li>Yaralılara yardım edin</li>
                    <li>Artçı sarsıntılara karşı dikkatli olun</li>
                    <li>Gaz ve elektrik sistemlerini kontrol edin</li>
                    <li>Acil durum numaralarını gereksiz meşgul etmeyin</li>
                  </ul>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Acil Durum Uygulamaları */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                📱 Faydalı Uygulamalar
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {emergencyApps.map((app, index) => (
                  <a
                    className="block p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    href={app.url}
                    key={index}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      {app.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                      {app.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Deprem Listesi */}
          <div className="w-full lg:w-2/3 lg:overflow-y-auto lg:pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="grid grid-cols-1 gap-4">
              {earthquakes.map((earthquake, index) => (
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4"
                  key={index}
                >
                  <div className="space-y-2">
                    {/* Deprem Başlığı */}
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                      🌍 {earthquake.title}
                    </h3>

                    {/* Deprem Detayları */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          📅 <strong>Tarih:</strong> {earthquake.date}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          📊 <strong>Büyüklük:</strong> {earthquake.mag}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          🌊 <strong>Derinlik:</strong> {earthquake.depth} km
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          📍 <strong>Merkez Üssü:</strong>{" "}
                          {earthquake.location_properties.epiCenter.name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          🏙️ <strong>En Yakın Şehir:</strong>{" "}
                          {earthquake.location_properties.closestCity.name}
                        </p>
                      </div>
                    </div>

                    <Accordion>
                      <AccordionItem aria-label="Yakın Şehirler" key="1" title="Yakın Şehirler">
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {earthquake.location_properties.closestCities.map((city, idx) => (
                            <li key={idx}>
                              🏡 {city.name} ({Math.round(city.distance / 1000)} km)
                            </li>
                          ))}
                        </ul>
                      </AccordionItem>
                      <AccordionItem
                        aria-label="Yakın Havalimanları"
                        key="2"
                        title="Yakın Havalimanları"
                      >
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {earthquake.location_properties.airports.map((airport, idx) => (
                            <li key={idx}>
                              🛫 {airport.name} ({Math.round(airport.distance / 1000)} km)
                            </li>
                          ))}
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
    </div>
  );
};

export default Page;
