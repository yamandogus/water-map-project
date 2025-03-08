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
  const getCardBorderClass = (gradient: string) => {
    const color = gradient.split("-")[2];
    switch (color) {
      case "cyan":
        return "group-hover:border-cyan-400";
      case "orange":
        return "group-hover:border-orange-400";
      case "purple":
        return "group-hover:border-purple-400";
      case "green":
        return "group-hover:border-green-400";
      default:
        return "group-hover:border-blue-400";
    }
  };

  const getButtonClasses = (gradient: string) => {
    const color = gradient.split("-")[1];
    const baseClasses = `inline-flex items-center gap-2 text-sm font-semibold relative`;

    switch (color) {
      case "blue":
        return `${baseClasses} text-blue-500 dark:text-blue-400`;
      case "red":
        return `${baseClasses} text-red-500 dark:text-red-400`;
      case "violet":
        return `${baseClasses} text-violet-500 dark:text-violet-400`;
      case "emerald":
        return `${baseClasses} text-emerald-500 dark:text-emerald-400`;
      default:
        return `${baseClasses} text-blue-500 dark:text-blue-400`;
    }
  };

  const getSpanClasses = (gradient: string) => {
    const color = gradient.split("-")[1];
    const baseClasses = `relative border-b-2 border-transparent`;

    switch (color) {
      case "blue":
        return `${baseClasses} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`;
      case "red":
        return `${baseClasses} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 dark:after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full`;
      case "violet":
        return `${baseClasses} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-violet-500 dark:after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full`;
      case "emerald":
        return `${baseClasses} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 dark:after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full`;
      default:
        return `${baseClasses} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full`;
    }
  };

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
      afterColor: "blue-500",
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
      afterColor: "orange-500",
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
      afterColor: "purple-500",
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
      afterColor: "green-500",
    },
  ];

  return (
    <div className="min-h-screen py-6 px-4 lg:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className={`relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800
                  border-2 border-gray-200/80 dark:border-gray-700 shadow-lg
                  transition-all duration-500 ease-out will-change-transform hover:shadow-xl
                  ${getCardBorderClass(card.gradient)}
                  h-full flex flex-col`}
                >
                  <div className="relative p-6 flex flex-col flex-grow">
                    {/* Üst kısım - İkon ve Başlık */}
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <div
                          className={`${card.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-500`}
                        >
                          <div
                            className={`bg-gradient-to-br ${card.gradient} ${card.hoverGradient} transition-colors duration-500 rounded-lg p-2`}
                          >
                            <div className="w-8 h-8">{card.icon}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                          {card.status}
                        </span>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                          {card.title}
                        </h2>
                      </div>
                    </div>

                    {/* Alt kısım - İçerik */}
                    <div className="flex flex-col flex-grow">
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                        {card.description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center gap-4 mb-4">
                          {card.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400"
                            >
                              <div className="w-4 h-4">{feature.icon}</div>
                              <span>{feature.text}</span>
                            </div>
                          ))}
                        </div>
                        <div className={getButtonClasses(card.gradient)}>
                          <span className={getSpanClasses(card.gradient)}>Detaylar</span>
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
