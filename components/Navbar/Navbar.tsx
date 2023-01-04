"use client";

import Link from "next/link";
import Image from "next/image";

import navbarDiskImage from "../../public/favicon.ico";
import CPmenuImage from "../../public/CP-menu.ico";

import localFont from "@next/font/local";
import { useRef } from "react";

//Font
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

  const menuLinks = [
    { url: "/", title: "Home" },
    { url: "/music", title: "Music" },
    { url: "/tour", title: "Tour" },
    { url: "/about", title: "About" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="font-display relative flex items-center justify-between mb-1 space-x-2 pr-5 py-5">
      <div className="pl-5">
        <Link className={myFont.className} href="/">
          KLARA KELLER
        </Link>
      </div>

      <div className={myFont.className}>
        <div className="block w-full bg-black">
          <ul
            className="z-50 reset-list hidden absolute top-50 right-1/2 flex-col py-5 md:justify-between md:flex md:flex-row md:items-center md:text-sm md:static md:top-0"
            ref={menuRef}>
            {menuLinks.map(link => 
                <li className="space-x-12 md:px-4">
                  <Link href={link.url}>{link.title}</Link>
                </li>
            )}
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
