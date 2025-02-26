"use client";

import React from "react";
import Link from "next/link";
import {
  IoArrowBack,
  IoLogoGithub,
  IoRocketOutline,
  IoCodeSlash,
  IoLibrary,
  IoServer,
  IoCloud,
} from "react-icons/io5";

export default function About() {
  const technologies = [
    {
      category: "Frontend Teknolojileri",
      items: [
        { name: "Next.js 14", description: "React tabanlı modern web framework" },
        { name: "TypeScript", description: "Tip güvenli JavaScript süper kümesi" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Hero UI", description: "Modern ve özelleştirilebilir UI bileşenleri" },
        { name: "React Icons", description: "Popüler ikon kütüphaneleri koleksiyonu" },
      ],
    },
    {
      category: "API Entegrasyonları",
      items: [
        { name: "OpenWeatherMap API", description: "Hava durumu verileri için kullanılan servis" },
        { name: "Kandilli Rasathanesi API", description: "Deprem verilerinin kaynağı" },
        {
          name: "Carbon Interface API",
          description: "Karbon ayak izi hesaplamaları için kullanılan servis",
        },
      ],
    },
    {
      category: "Geliştirme Araçları",
      items: [
        { name: "Git & GitHub", description: "Versiyon kontrol ve kod paylaşımı" },
        { name: "VS Code", description: "Kod editörü" },
        { name: "ESLint", description: "Kod kalitesi ve standartları" },
        { name: "Prettier", description: "Kod formatlama" },
      ],
    },
  ];

  const features = [
    {
      title: "Hava Durumu İzleme",
      description: "OpenWeatherMap API entegrasyonu ile Türkiye'deki tüm şehirler için anlık hava durumu bilgileri, 5 günlük tahminler ve detaylı meteorolojik veriler sunulmaktadır.",
      icon: <IoCloud className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Deprem Takip Sistemi",
      description: "Kandilli Rasathanesi API entegrasyonu sayesinde Türkiye ve çevresindeki son depremler, büyüklük ve lokasyon bilgileri anlık olarak takip edilebilmektedir.",
      icon: <IoServer className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Su Kalitesi Analizi",
      description: "Türkiye'deki önemli su kaynaklarının kalite değerleri, içilebilirlik durumu ve çevresel etki analizleri detaylı olarak sunulmaktadır.",
      icon: <IoLibrary className="w-8 h-8 text-violet-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Geri Dönüş Linki */}
        <div className="mb-8">
          <Link
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            href="/"
          >
            <IoArrowBack className="w-5 h-5 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <IoRocketOutline className="w-20 h-20 mx-auto text-blue-500 mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Proje Hakkında
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern web teknolojileri kullanılarak geliştirilmiş, çevre ve doğal olayları takip etmeye yönelik kapsamlı bir bilgilendirme platformu.
          </p>
        </div>

        {/* Özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gray-50 dark:bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Teknolojiler */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <IoCodeSlash className="w-8 h-8 mr-3 text-blue-500" />
            Kullanılan Teknolojiler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col">
                      <span className="font-medium text-gray-700 dark:text-gray-200">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Bağlantısı */}
        <div className="text-center">
          <a
            href="https://github.com/yamandogus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl
            hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <IoLogoGithub className="w-6 h-6 mr-2" />
            GitHub&apos;da İncele
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </div>
  );
}
