"use client";

import Link from "next/link";
import Image from "next/image";

import navbarDiskImage from "../../public/favicon.ico";
import CPmenuImage from "../../public/CP-menu.ico";

import localFont from "@next/font/local";
import { useRef } from "react";

const myFont = localFont({
  src: "../../public/fonts/W95FA.otf",
});

const Navbar = () => {
  // Ref to store a reference to the menu
  const menuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    // Toggle the "hidden" class on the menu if ref is not null
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="font-display flex items-center justify-between mb-1 space-x-2 pr-5 py-5">
      <div className="pl-5">
        <Link className={myFont.className} href="/">
          KLARA KELLER
        </Link>
      </div>

      <div className={myFont.className}>
        <div className="block w-full">
          <ul
            className="reset-list hidden absolute top-50 right-0 flex-col justify-between py-5 md:flex md:flex-row md:items-center md:text-sm md:static md:top-0"
            ref={menuRef}>
            <li className="space-x-12 md:px-4">
              <Link href="/">Home</Link>
            </li>
            <li className="space-x-12 md:px-4">
              <Link href="/music">Music</Link>
            </li>
            <li className="space-x-12 md:px-4">
              <Link href="/tour">Tour</Link>
            </li>
            <li className="space-x-12 md:px-4">
              <Link href="/about">About</Link>
            </li>
            <li className="space-x-12 md:px-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          src={navbarDiskImage}
          alt="Listen to Klara on Spotify"
          width={30}
          height={30}
        />
      </div>

      <div onClick={openMenu} className="block md:hidden">
        <Image src={CPmenuImage} alt="Menu" width={30} height={30} />
      </div>
    </div>
  );
};

export default Navbar;
