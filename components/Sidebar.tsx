import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import Link from "next/link";
import React from "react";
import { IoGrid, IoCloudOutline, IoLocationOutline, IoSettings } from "react-icons/io5";

import { ThemeSwitch } from "./theme-switch";

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-col items-center w-20 h-screen backdrop-blur-md bg-white/10 dark:bg-black/10 fixed left-0 top-0 py-6 gap-6 m-2 rounded-2xl shadow-lg z-50 border border-gray-200/20">
        <div className="flex flex-col gap-8 text-xl text-gray-400">
          {/* Ana Sayfa */}
          <div className="flex flex-col items-center gap-1">
            <button className="text-blue-500 hover:scale-110 transition-transform">
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/">
                    <IoGrid />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Ana Sayfa</div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">Ana Sayfa</span>
          </div>

          {/* Hava Durumu */}
          <div className="flex flex-col items-center gap-1">
            <button className="hover:text-blue-500 hover:scale-110 transition-transform">
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/weather">
                    <IoCloudOutline />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Hava Durumu</div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">Hava Durumu</span>
          </div>

          {/* Depremler */}
          <div className="flex flex-col items-center gap-1">
            <button className="hover:text-blue-500 transition-colors hover:scale-110">
              <Popover placement="right">
                <PopoverTrigger>
                  <Link href="/navigation">
                    <IoLocationOutline />
                  </Link>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Depremler</div>
                  </div>
                </PopoverContent>
              </Popover>
            </button>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">Depremler</span>
          </div>

          {/* Tema */}
          <div className="flex flex-col items-center gap-1">
            <button className="hover:text-blue-500 transition-colors hover:scale-110">
              <ThemeSwitch />
            </button>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">Tema</span>
          </div>
        </div>

        <div className="mt-auto">
          <Popover color="secondary" placement="right" radius="sm">
            <PopoverTrigger>
              <IoSettings className="text-blue-500" size={24} />
            </PopoverTrigger>
            <PopoverContent className="gap-2">
              <div className="px-1 py-2">
                <h2 className="text-xl font-bold">Merhaba, ben Doğuş Yaman</h2>
                <div className="text-tiny">
                  Bu proje şu fremwork kullanılarak yapılmıştır: Next.js ve Tailwind CSS.
                </div>
                <div className="font-bold text-md text-gray-100 flex flex-col gap-2">
                  <a href="https://github.com/yamandogus" rel="noreferrer" target="_blank">
                    Github
                  </a>
                  <a
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
