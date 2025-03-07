"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  icon: React.ReactElement<IconType>;
  title: string;
  gradient: {
    from: string;
    to: string;
    shadow: string;
  };
  textColor: string;
  onClick?: () => void;
}

export const NavItem = ({ href, icon, title, gradient, textColor, onClick }: NavItemProps) => {
  return (
    <Link href={href} className="flex flex-col items-center gap-2 group">
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2.5 bg-gray-800 rounded-xl bg-gradient-to-br from-${gradient.from}/10 to-${gradient.to}/10 
        hover:from-${gradient.from}/20 hover:to-${gradient.to}/20 transition-all duration-300
        group-hover:shadow-lg group-hover:shadow-${gradient.shadow}/20`}
      >
        <Popover placement="right">
          <PopoverTrigger>
            <motion.div
              className={`${textColor}`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </PopoverTrigger>
          <PopoverContent>
            <motion.div
              className="px-3 py-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{title}</div>
            </motion.div>
          </PopoverContent>
        </Popover>
      </motion.button>
      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {title}
      </span>
    </Link>
  );
};
