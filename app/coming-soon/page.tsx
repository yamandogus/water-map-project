"use client";

import { IoRocketOutline } from "react-icons/io5";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <IoRocketOutline className="w-24 h-24 mx-auto text-purple-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Çok Yakında</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Yeni projemiz için çalışmalarımız devam ediyor...
        </p>
      </div>
    </div>
  );
}
