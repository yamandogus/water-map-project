import React from "react";
import { IoGrid } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { ThemeSwitch } from "./theme-switch";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex flex-col items-center w-20 h-screen backdrop-blur-sm bg-white/30 fixed left-0 top-0 py-6 gap-6 m-2 rounded">
        <div className="text-2xl text-blue-500">
          <Popover placement="right">
            <PopoverTrigger>
              <Link href="/">
                <IoGrid />
              </Link>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Popover Content</div>
                <div className="text-tiny">This is the popover content</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-6 text-xl text-gray-400">
          <button className="hover:text-blue-500 transition-colors">
            <Popover placement="right">
              <PopoverTrigger>
                <Link href="/navigation">
                  <IoLocationOutline />
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Find City</div>
                </div>
              </PopoverContent>
            </Popover>
          </button>
          <button className="hover:text-blue-500 transition-colors">
            <ThemeSwitch />
          </button>
        </div>

        <div className="mt-auto">
          <Popover placement="right" color="secondary" radius="sm">
            <PopoverTrigger>
              <img
                src="https://i.pravatar.cc/150"
                alt="avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent className="gap-2">
              <div className="px-1 py-2">
                <h2 className="text-xl font-bold">Merhaba, ben Doğuş Yaman</h2>
                <div className="text-tiny">
                  Bu proje şu fremwork kullanılarak yapılmıştır: Next.js ve
                  Tailwind CSS.
                </div>
                <div className="font-bold text-md text-gray-100 flex flex-col gap-2">
                  <a href="https://github.com/yamandogus" target="_blank">
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dogusyaman/"
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
