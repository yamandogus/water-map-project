import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-gradient-to-b font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <div className="flex md:hidden">
              <Navbar />
            </div>
            <Sidebar />
            <main className="md:pl-20 flex-1 pt-16 md:pt-0">
              <div className="h-full md:pl-4 pl-0">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
