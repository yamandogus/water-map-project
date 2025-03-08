"use client";

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
        className={`p-2.5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
              hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300
              group-hover:shadow-lg group-hover:shadow-purple-500/20 rounded-xl from-${gradient.from}/10 to-${gradient.to}/10 
        hover:from-${gradient.from}/20 hover:to-${gradient.to}/20 transition-all duration-300
        group-hover:shadow-lg group-hover:shadow-${gradient.shadow}/20`}
      >
        <motion.div
          className={`${textColor}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </motion.button>
      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        {title}
      </span>
    </Link>
  );
};
