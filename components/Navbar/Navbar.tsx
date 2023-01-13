"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

const Navbar = () => {
  //State for menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  

  useEffect(() => {
       setIsMobile(window.matchMedia("(max-width: 600px)").matches)
  }, [])

  //Disable scroll only on mobile when menu is open
  useEffect(() => {
    isMenuOpen && isMobile
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isMobile]);

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
    <div className="font-display flex justify-center items-center md:flex-col mb-1 space-x-2 py-5 h-20 mx-2 md:h-80">
      <Link href="/" className="flex-1 z-50 h-20 w-full relative">
        <Image
          src="/../public/Klara-header.png"
          alt="Klara Keller"
          className="object-contain"
          priority={true}
          fill
        />
      </Link>

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
        className="z-50 block flex-none mt-2 md:hidden w-10 h-10 relative">
        <Image
          src="/../public/Klara-mobile-menu.png"
          alt="menu"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default Navbar;
