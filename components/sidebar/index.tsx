"use client";

import { Popover, PopoverTrigger } from "@heroui/popover";
import React from "react";
import { motion } from "framer-motion";
import {
  IoGrid,
  IoCloudOutline,
  IoLocationOutline,
  IoSettings,
  IoWaterOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

import { NavItem } from "./NavItem";
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
    href: "/earthquakes",
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
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex flex-col items-center w-18 h-[95vh] fixed left-0 top-0 py-6 gap-6 m-4 rounded-2xl z-50
        bg-white/10 dark:bg-gray-700 backdrop-blur-xl
        border-2 border-gray-300/80 dark:border-gray-700/30
        shadow-[2px_8px_8px_2px_rgba(31,38,135,0.37)] dark:shadow-[2px_8px_8px_2px_rgba(31,38,135,0.37)]"
      >
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Navigasyon Öğeleri */}
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavItem {...item} />
            </motion.div>
          ))}

          {/* Tema Değiştirici */}
          <motion.div
            className="flex flex-col items-center gap-2 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
          >
            <button
              className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 
              hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-purple-500/20"
            >
              <ThemeSwitch />
            </button>
            <span
              className="text-[10px] font-bold text-gray-600 dark:text-gray-400 
              opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Tema
            </span>
          </motion.div>
        </motion.div>

        {/* Ayarlar ve Profil */}
        <motion.div
          className="mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (navItems.length + 1) * 0.1 }}
        >
          <Popover color="secondary" placement="right">
            <PopoverTrigger>
              <button
                className="p-2.5 rounded-xl bg-gradient-to-br from-gray-500/10 to-slate-500/10 
                hover:from-gray-500/20 hover:to-slate-500/20 transition-all duration-300
                hover:shadow-lg hover:shadow-gray-500/20"
              >
                <IoSettings
                  className="w-5 h-5 text-gray-600 dark:text-gray-400 
                  hover:scale-110 transition-transform hover:rotate-90 duration-500"
                />
              </button>
            </PopoverTrigger>
            <ProfilePopover />
          </Popover>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
