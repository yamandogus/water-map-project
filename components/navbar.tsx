import React from "react";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { NavbarBrand, NavbarContent } from "@heroui/navbar";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  return (
    <div>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Weather App</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </div>
  );
};

export default Navbar;
