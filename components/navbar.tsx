"use client";
import {
  Navbar as NextNavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import Link from "next/link";
import React from "react";
import { IoHome } from "react-icons/io5";

import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <NextNavbar
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <Link href="/">
          <IoHome className="w-6 h-6" />
        </Link>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col gap-2">
          <Link className="w-full" href="/" onClick={() => setIsMenuOpen(false)}>
            Ana Sayfa
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex flex-col gap-2">
          <Link className="w-full" href="/weather" onClick={() => setIsMenuOpen(false)}>
            Hava Durumu
          </Link>
          <NavbarMenuItem>
            <Link className="w-full" href="/navigation" onClick={() => setIsMenuOpen(false)}>
              Depremler
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="/water-quality" onClick={() => setIsMenuOpen(false)}>
              Su Kalitesi
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="flex flex-col gap-2">
            <Link className="w-full" href="/coming-soon" onClick={() => setIsMenuOpen(false)}>
              Yenilikler
            </Link>
          </NavbarMenuItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  );
}
