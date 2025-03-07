"use client";

import Link from "next/link";
import {
  IoCloudOutline,
  IoInformationCircleOutline,
  IoLocationOutline,
  IoWaterOutline,
  IoTimeOutline,
  IoArrowForward,
  IoThermometerOutline,
  IoWarningOutline,
  IoSpeedometerOutline,
  IoBookOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
    {
      title: "HAVA DURUMU",
      description:
        "OpenWeatherMap API kullanarak anlık hava durumu bilgileri, 5 günlük tahminler ve detaylı meteorolojik veriler. Türkiye'nin tüm şehirleri için güncel hava durumu raporları.",
      icon: <IoCloudOutline className="w-8 h-8" />,
      href: "/weather",
      gradient: "from-blue-500 to-cyan-400",
      iconBg: "bg-blue-500/10",
      hoverGradient: "hover:from-blue-600 hover:to-cyan-500",
      features: [
        { icon: <IoThermometerOutline className="w-4 h-4" />, text: "Sıcaklık Takibi" },
        { icon: <IoTimeOutline className="w-4 h-4" />, text: "5 Günlük Tahmin" },
      ],
      status: "🌤️ Canlı Veri",
    },
    {
      title: "DEPREMLER",
      description:
        "Kandilli Rasathanesi API entegrasyonu ile son depremler, büyüklük ve lokasyon bilgileri. Deprem riski olan bölgeler ve alınması gereken önlemler hakkında kapsamlı bilgiler.",
      icon: <IoLocationOutline className="w-8 h-8" />,
      href: "/navigation",
      gradient: "from-red-500 to-orange-400",
      iconBg: "bg-red-500/10",
      hoverGradient: "hover:from-red-600 hover:to-orange-500",
      features: [
        { icon: <IoWarningOutline className="w-4 h-4" />, text: "Anlık Bildirimler" },
        { icon: <IoSpeedometerOutline className="w-4 h-4" />, text: "Şiddet Ölçümü" },
      ],
      status: "📍 Gerçek Zamanlı",
    },
    {
      title: "SU KALİTESİ TAKİP",
      description:
        "Türkiye'deki önemli su kaynaklarının kalite değerleri, içilebilirlik durumu ve çevresel etki analizleri. Baraj ve göllerin su kalitesi parametrelerinin gerçek zamanlı takibi.",
      icon: <IoWaterOutline className="w-8 h-8" />,
      href: "/water-quality-monitoring",
      gradient: "from-violet-500 to-purple-400",
      iconBg: "bg-violet-500/10",
      hoverGradient: "hover:from-violet-600 hover:to-purple-500",
      features: [
        { icon: <IoSpeedometerOutline className="w-4 h-4" />, text: "Kalite Analizi" },
        { icon: <IoTimeOutline className="w-4 h-4" />, text: "Günlük Rapor" },
      ],
      status: "💧 Su Verileri",
    },
    {
      title: "PROJELER HAKKINDA",
      description:
        "Next.js 14, Tailwind CSS, TypeScript ve çeşitli modern web teknolojileri kullanılarak geliştirilen projemizin detayları. Açık kaynak kodlu geliştirme sürecimiz ve kullanılan API'lar hakkında bilgiler.",
      icon: <IoInformationCircleOutline className="w-8 h-8" />,
      href: "/about",
      gradient: "from-emerald-500 to-green-400",
      iconBg: "bg-emerald-500/10",
      hoverGradient: "hover:from-emerald-600 hover:to-green-500",
      features: [
        { icon: <IoBookOutline className="w-4 h-4" />, text: "Dokümantasyon" },
        { icon: <IoTimeOutline className="w-4 h-4" />, text: "Güncel Versiyon" },
      ],
      status: "ℹ️ Bilgi",
    },
  ];

  return (
    <div className="min-h-screen py-6 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link className="block group h-full" href={card.href}>
                <div
                  className={`relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800
                  border-2 border-gray-100 dark:border-gray-700 shadow-lg
                  transition-all duration-500 ease-out transform hover:scale-[1.02] hover:shadow-xl
                  group-hover:border-${card.gradient.split("-")[2]} dark:group-hover:border-${card.gradient.split("-")[2]}
                  h-full flex flex-col`}
                >
                  <div className="relative p-8 flex gap-8 flex-grow">
                    {/* Sol taraf - İkon */}
                    <div className="flex-shrink-0">
                      <div className="flex flex-col items-center">
                        <div
                          className={`${card.iconBg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500`}
                        >
                          <div
                            className={`bg-gradient-to-br ${card.gradient} ${card.hoverGradient} transition-colors duration-500 rounded-xl p-3`}
                          >
                            <div className="w-10 h-10">{card.icon}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sağ taraf - İçerik */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-base font-medium text-gray-600 dark:text-gray-400">
                          {card.status}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                        {card.title}
                      </h2>
                      <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                        {card.description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center gap-6 mb-4">
                          {card.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <div className="w-5 h-5">{feature.icon}</div>
                              <span>{feature.text}</span>
                            </div>
                          ))}
                        </div>
                        <div
                          className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl
                          text-${card.gradient.split("-")[2]}-500 dark:text-${card.gradient.split("-")[2]}-400
                          bg-${card.gradient.split("-")[2]}-50 dark:bg-${card.gradient.split("-")[2]}-500/10
                          group-hover:bg-${card.gradient.split("-")[2]}-100 dark:group-hover:bg-${card.gradient.split("-")[2]}-500/20
                          transition-all duration-300`}
                        >
                          <span>Detaylar</span>
                          <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
