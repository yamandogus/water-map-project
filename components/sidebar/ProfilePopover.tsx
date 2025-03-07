"use client";

import { PopoverContent } from "@heroui/popover";
import React from "react";

const ProfilePopover = () => {
  return (
    <PopoverContent
      className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl 
      border border-gray-200/50 dark:border-gray-700/50 rounded-2xl
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
      min-w-[300px]"
    >
      <div className="space-y-6">
        {/* Profil Bölümü */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">DY</span>
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Doğuş Yaman
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Frontend Developer</p>
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yamandogus"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
            transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dogusyaman/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
            transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="mailto:dogusyaman@gmail.com"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
            transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* Proje Bilgileri */}
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
            <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
              Proje Teknolojileri
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">
                Next.js 14
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">
                TypeScript
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
            <h3 className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">
              API Entegrasyonları
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded-md bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300">
                OpenWeatherMap
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300">
                Kandilli
              </span>
              <span className="px-2 py-1 text-xs rounded-md bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300">
                Carbon Interface
              </span>
            </div>
          </div>
        </div>

        {/* Versiyon Bilgisi */}
        <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Versiyon 1.0.0 • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </PopoverContent>
  );
};

export default ProfilePopover;
