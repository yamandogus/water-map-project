import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

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
}

const NavItem = ({ href, icon, title, gradient, textColor }: NavItemProps) => {
  return (
    <Link href={href} className="flex flex-col items-center gap-2 group">
      <button
        className={`p-2.5 rounded-xl bg-gradient-to-br from-${gradient.from}/10 to-${gradient.to}/10 
        hover:from-${gradient.from}/20 hover:to-${gradient.to}/20 transition-all duration-300
        group-hover:shadow-lg group-hover:shadow-${gradient.shadow}/20`}
      >
        <Popover placement="right">
          <PopoverTrigger>
            <div
              className={`${textColor} 
              group-hover:scale-110 transition-transform`}
            >
              {icon}
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {title}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </button>
      <span
        className="text-[10px] font-medium text-gray-600 dark:text-gray-400 
        opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {title}
      </span>
    </Link>
  );
};

export default NavItem; 