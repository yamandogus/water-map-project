import React from "react";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-2 flex justify-between items-center bg-white/30 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8">
          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <NextLink href="/" className="font-bold text-dark dark:text-white">
          Weather App
        </NextLink>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
