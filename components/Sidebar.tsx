import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import Link from "next/link";
import React from "react";
import {
  IoGrid,
  IoCloudOutline,
  IoLocationOutline,
  IoSettings,
  IoWaterOutline,
} from "react-icons/io5";

import { ThemeSwitch } from "./theme-switch";

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div
        className="flex flex-col items-center w-20 h-screen fixed left-0 top-0 py-6 gap-6 m-2 rounded-2xl z-50
        bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl
        border border-white/20 dark:border-gray-700/30
        shadow-[2px_8px_8px_2px_rgba(31,38,135,0.37)] dark:shadow-[2px_8px_8px_2px_rgba(31,38,135,0.37)]"
      >
        <div className="flex flex-col gap-8">
          {/* Ana Sayfa */}
          <div className="flex flex-col items-center gap-2 group">
            <button
              className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
              hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-blue-500/20"
            >
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/">
                    <IoGrid
                      className="w-6 h-6 text-blue-500 dark:text-blue-400 
                      group-hover:scale-110 transition-transform"
                    />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Ana Sayfa
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span
              className="text-[10px] font-medium text-gray-600 dark:text-gray-400 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Ana Sayfa
            </span>
          </div>

          {/* Hava Durumu */}
          <div className="flex flex-col items-center gap-2 group">
            <button
              className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 
              hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-cyan-500/20"
            >
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/weather">
                    <IoCloudOutline
                      className="w-6 h-6 text-cyan-500 dark:text-cyan-400 
                      group-hover:scale-110 transition-transform"
                    />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Hava Durumu
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span
              className="text-[10px] font-medium text-gray-600 dark:text-gray-400 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Hava Durumu
            </span>
          </div>

          {/* Depremler */}
          <div className="flex flex-col items-center gap-2 group">
            <button
              className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 
              hover:from-red-500/20 hover:to-orange-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-red-500/20"
            >
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/navigation">
                    <IoLocationOutline
                      className="w-6 h-6 text-red-500 dark:text-red-400 
                      group-hover:scale-110 transition-transform"
                    />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Depremler
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span
              className="text-[10px] font-medium text-gray-600 dark:text-gray-400 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Depremler
            </span>
          </div>

          {/* Su Kalitesi */}
          <div className="flex flex-col items-center gap-2 group">
            <button
              className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 
              hover:from-emerald-500/20 hover:to-green-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-emerald-500/20"
            >
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/water-quality">
                    <IoWaterOutline
                      className="w-6 h-6 text-emerald-500 dark:text-emerald-400 
                      group-hover:scale-110 transition-transform"
                    />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Su Kalitesi
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span
              className="text-[10px] font-medium text-gray-600 dark:text-gray-400 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Su Kalitesi
            </span>
          </div>

          {/* Tema */}
          <div className="flex flex-col items-center gap-2 group">
            <button
              className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 
              hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
            >
              <ThemeSwitch />
            </button>
            <span
              className="text-[10px] font-medium text-gray-600 dark:text-gray-400 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Tema
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <Popover color="secondary" placement="right">
            <PopoverTrigger>
              <button
                className="p-3 rounded-xl bg-gradient-to-br from-gray-500/10 to-slate-500/10 
                hover:from-gray-500/20 hover:to-slate-500/20 transition-all duration-300
                hover:shadow-lg hover:shadow-gray-500/20"
              >
                <IoSettings
                  className="w-6 h-6 text-gray-600 dark:text-gray-400 
                  hover:scale-110 transition-transform"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl 
              border border-gray-200/50 dark:border-gray-700/50 rounded-xl"
            >
              <div className="space-y-3">
                <h2
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                  bg-clip-text text-transparent"
                >
                  Merhaba, ben Doğuş Yaman
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Bu proje şu fremwork kullanılarak yapılmıştır: Next.js ve Tailwind CSS.
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    className="text-sm font-medium text-gray-800 dark:text-gray-200 
                    hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    href="https://github.com/yamandogus"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    className="text-sm font-medium text-gray-800 dark:text-gray-200 
                    hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    href="https://www.linkedin.com/in/dogusyaman/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
