import React from "react";
import { IoGrid } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { ThemeSwitch } from "./theme-switch";

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-col items-center w-20 h-screen backdrop-blur-sm bg-white/30 fixed left-0 top-0 py-6 gap-6 m-2 rounded">
        <div className="text-2xl text-blue-500">
          <IoGrid />
        </div>

        <div className="flex flex-col gap-6 text-xl text-gray-400">
          <button className="hover:text-blue-500 transition-colors">
            <IoLocationOutline />
          </button>
          <button className="hover:text-blue-500 transition-colors">
            <ThemeSwitch />
          </button>
        </div>

        <div className="mt-auto">
          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
