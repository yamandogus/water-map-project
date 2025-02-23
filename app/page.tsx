"use client";

import Link from "next/link";
import { IoCloudOutline, IoInformationCircleOutline, IoLocationOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";

export default function Home() {
  const cards = [
    {
      title: "HAVA DURUMU",
      description:
        "OpenWeatherMap API kullanarak anlık hava durumu bilgileri, 5 günlük tahminler ve detaylı meteorolojik veriler. Türkiye'nin tüm şehirleri için güncel hava durumu raporları.",
      icon: <IoCloudOutline className="w-12 h-12 text-blue-500" />,
      href: "/weather",
      color: "bg-white dark:bg-gray-800",
    },
    {
      title: "DEPREMLER",
      description:
        "Kandilli Rasathanesi API entegrasyonu ile son depremler, büyüklük ve lokasyon bilgileri. Deprem riski olan bölgeler ve alınması gereken önlemler hakkında kapsamlı bilgiler.",
      icon: <IoLocationOutline className="w-12 h-12 text-red-500" />,
      href: "/navigation",
      color: "bg-white dark:bg-gray-800",
    },
    {
      title: "HAKKIMIZDA",
      description:
        "Next.js 14, Tailwind CSS, TypeScript ve çeşitli modern web teknolojileri kullanılarak geliştirilen projemizin detayları. Açık kaynak kodlu geliştirme sürecimiz ve kullanılan API'lar hakkında bilgiler.",
      icon: <IoInformationCircleOutline className="w-12 h-12 text-emerald-500" />,
      href: "/about",
      color: "bg-white dark:bg-gray-800",
    },
    {
      title: "YENİ PROJE",
      description:
        "Geliştirilmekte olan yeni projelerimiz ve gelecek özellikler. Su kaynaklarının korunması ve çevre bilinci konusunda farkındalık oluşturmayı hedefleyen yenilikçi çözümlerimiz.",
      icon: <IoRocketOutline className="w-12 h-12 text-violet-500" />,
      href: "/coming-soon",
      color: "bg-white dark:bg-gray-800",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <Link
              className="group transform transition-all duration-300 "
              href={card.href}
              key={index}
            >
              <div
                className={`${card.color} rounded-3xl p-8 h-full group-hover:scale-[1.02] group-hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-lg`}
              >
                <div className="flex flex-col items-center text-gray-800 dark:text-white">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-2xl">{card.icon}</div>
                  <h2 className="text-2xl font-bold mt-6 mb-4">{card.title}</h2>
                  <p className="text-center leading-relaxed">{card.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
