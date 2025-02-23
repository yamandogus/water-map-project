"use client";

import { Card } from "@heroui/card";
import Link from "next/link";
import {
  IoRocketOutline,
  IoWaterOutline,
  IoLeafOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";

export default function ComingSoonPage() {
  const upcomingProjects = [
    {
      title: "Su Kalitesi Takip Sistemi",
      description:
        "Şehirlerdeki su kalitesini gerçek zamanlı olarak takip eden ve raporlayan akıllı sistem.",
      icon: <IoWaterOutline className="w-12 h-12 text-blue-500" />,
      status: "Geliştirme Aşamasında",
      link: "#",
      progress: 70,
    },
    {
      title: "Çevre Dostu Su Kullanımı",
      description:
        "Evlerde ve işyerlerinde su tüketimini optimize eden yapay zeka destekli öneri sistemi.",
      icon: <IoLeafOutline className="w-12 h-12 text-green-500" />,
      status: "Planlama Aşamasında",
      link: "#",
      progress: 30,
    },
    {
      title: "Su Kaynakları Haritası",
      description: "Türkiye'deki su kaynaklarının detaylı haritası ve sürdürülebilirlik analizi.",
      icon: <IoCloudUploadOutline className="w-12 h-12 text-purple-500" />,
      status: "Araştırma Aşamasında",
      link: "/water-quality",
      progress: 45,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <IoRocketOutline className="w-20 h-20 mx-auto text-purple-500 mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Gelecek Projelerimiz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Su kaynaklarının korunması ve sürdürülebilir kullanımı için geliştirdiğimiz yenilikçi
            projeler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <Card
              className="p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
              key={index}
            >
              <Link href={project.link}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-6">
                    {project.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-purple-500 dark:text-purple-400">{project.status}</span>
                      <span className="text-gray-500">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Bu projelerle ilgili güncellemeler için bizi takip etmeye devam edin!
          </p>
        </div>
      </div>
    </div>
  );
}
