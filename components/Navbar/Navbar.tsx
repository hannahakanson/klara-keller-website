"use client";

import Link from "next/link";
import Image from "next/image";


import { useState } from "react";

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
    <div className="font-display flex justify-center items-center md:flex-col mb-1 space-x-2 py-5 h-20 m-4 md:h-80">
      <div className="flex-1 z-50 h-20 w-60 md:w-full relative">
        <Link href="/">
          <Image
            src="/../public/Klara-header.png"
            alt="Klara Keller"
            className="object-contain"
            fill
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="menu">
        <div className="block w-full">
          <ul
            className={`z-40 text-2xl fixed top-0 left-0 w-full h-full bg-indigo-900 py-5 md:justify-between md:flex md:flex-row md:items-center md:static md:top-0 md:bg-transparent ${
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

      {/* Menu image */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="z-50 block flex-none mt-2 md:hidden">
        <Image src="/../public/Klara-mobile-menu.png" alt="menu" width={40} height={30}/>
      </div>
    </div>
  );
};

export default Navbar;
