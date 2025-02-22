"use client";

import { SiAccuweather, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function AboutPage() {
  const technologies = [
    {
      name: "Next.js",
      description: "React tabanlı web framework",
      icon: <SiNextdotjs className="w-12 h-12" />,
    },
    {
      name: "Tailwind CSS",
      description: "Modern CSS framework",
      icon: <SiTailwindcss className="w-12 h-12" />,
    },
    {
      name: "TypeScript",
      description: "Tip güvenli JavaScript",
      icon: <SiTypescript className="w-12 h-12" />,
    },
    {
      name: "Cursor",
      description: "Kod editörü",
      icon: <SiAccuweather className="w-12 h-12" />,
    },
  ];

  const resources = [
    {
      name: "OpenWeatherMap API",
      description: "Hava durumu verileri için kullanılan API",
      url: "https://openweathermap.org/",
    },
    {
      name: "Kandilli Rasathanesi API",
      description: "Deprem verileri için kullanılan API",
      url: "http://www.koeri.boun.edu.tr/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Hakkımızda
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            Bu proje, Türkiye genelindeki hava durumu ve deprem verilerini tek bir platformda
            toplayarak kullanıcılara kolay erişim sağlamayı amaçlamaktadır.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Kullanılan Teknolojiler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex items-center space-x-4"
                key={index}
              >
                <div className="text-blue-500 dark:text-blue-400">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Kullanılan Kaynaklar
          </h2>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" key={index}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {resource.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{resource.description}</p>
                <a
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
                  href={resource.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Daha fazla bilgi →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
