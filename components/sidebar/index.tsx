import { Popover, PopoverTrigger } from "@heroui/popover";
import React from "react";
import {
  IoGrid,
  IoCloudOutline,
  IoLocationOutline,
  IoSettings,
  IoWaterOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

import NavItem from "./NavItem";
import ProfilePopover from "./ProfilePopover";
import { ThemeSwitch } from "../theme-switch";

const navItems = [
  {
    href: "/",
    icon: <IoGrid className="w-5 h-5" />,
    title: "Ana Sayfa",
    gradient: {
      from: "blue-500",
      to: "purple-500",
      shadow: "blue-500",
    },
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    href: "/weather",
    icon: <IoCloudOutline className="w-5 h-5" />,
    title: "Hava Durumu",
    gradient: {
      from: "cyan-500",
      to: "blue-500",
      shadow: "cyan-500",
    },
    textColor: "text-cyan-500 dark:text-cyan-400",
  },
  {
    href: "/navigation",
    icon: <IoLocationOutline className="w-5 h-5" />,
    title: "Depremler",
    gradient: {
      from: "red-500",
      to: "orange-500",
      shadow: "red-500",
    },
    textColor: "text-red-500 dark:text-red-400",
  },
  {
    href: "/water-quality-monitoring",
    icon: <IoWaterOutline className="w-5 h-5" />,
    title: "Su Kalitesi",
    gradient: {
      from: "violet-500",
      to: "purple-500",
      shadow: "violet-500",
    },
    textColor: "text-violet-500 dark:text-violet-400",
  },
  {
    href: "/about",
    icon: <IoInformationCircleOutline className="w-5 h-5" />,
    title: "Hakkımızda",
    gradient: {
      from: "emerald-500",
      to: "green-500",
      shadow: "emerald-500",
    },
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div
        className="flex flex-col items-center w-18 h-screen fixed left-0 top-0 py-6 gap-6 m-2 rounded-2xl z-50
        bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl
        border border-white/20 dark:border-gray-700/30
        shadow-[2px_8px_8px_2px_rgba(31,38,135,0.37)] dark:shadow-[2px_8px_8px_2px_rgba(31,38,135,0.37)]"
      >
        <div className="flex flex-col gap-6">
          {/* Navigasyon Öğeleri */}
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}

          {/* Tema Değiştirici */}
          <div className="flex flex-col items-center gap-2 group">
            <button
              className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 
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

        {/* Ayarlar ve Profil */}
        <div className="mt-auto">
          <Popover color="secondary" placement="right">
            <PopoverTrigger>
              <button
                className="p-2.5 rounded-xl bg-gradient-to-br from-gray-500/10 to-slate-500/10 
                hover:from-gray-500/20 hover:to-slate-500/20 transition-all duration-300
                hover:shadow-lg hover:shadow-gray-500/20"
              >
                <IoSettings
                  className="w-5 h-5 text-gray-600 dark:text-gray-400 
                  hover:scale-110 transition-transform hover:rotate-90 transition-all duration-500"
                />
              </button>
            </PopoverTrigger>
            <ProfilePopover />
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 