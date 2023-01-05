"use client";

import Link from "next/link";
import Image from "next/image";

import navbarDiskImage from "../../public/favicon.ico";
import CPmenuImage from "../../public/CP-menu.ico";

import localFont from "@next/font/local";
import { useState } from "react";

//Font
const myFont = localFont({
  src: "../../public/fonts/W95FA.otf",
});

const Navbar = () => {

  //State for menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Menu links
  const menuLinks = [
    { url: "/", title: "Home" },
    { url: "/music", title: "Music" },
    { url: "/tour", title: "Tour" },
    { url: "/about", title: "About" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    // Header
    <div className="font-display relative flex items-center justify-between mb-1 space-x-2 pr-5 py-5">
      <div className="pl-5 z-50 relative">
        <Link className={myFont.className} href="/">
          KLARA KELLER
        </Link>
      </div>

      {/* Menu */}
      <div className={myFont.className}>
        <div className="block w-full">
          <ul
            className={`z-40 fixed top-0 left-0 w-full h-full bg-gray-900 py-5 md:justify-between md:flex md:flex-row md:items-center md:text-sm md:static md:top-0 md:bg-transparent ${
              isMenuOpen
                ? "flex flex-col justify-center items-center"
                : "hidden"
            }`}>
            {menuLinks.map((link, i) => (
              <li key={i} className="space-x-12 md:px-4">
                <Link
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  href={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spotify image */}
      <div className="hidden md:block">
        <Image
          src={navbarDiskImage}
          alt="Listen to Klara on Spotify"
          width={30}
          height={30}
        />
      </div>

      {/* Menu image */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="z-50 block md:hidden">
        <Image src={CPmenuImage} alt="Menu" width={30} height={30} />
      </div>
    </div>
  );
};

export default Navbar;
