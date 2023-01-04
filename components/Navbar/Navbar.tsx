import Link from "next/link";
import Image from "next/image";

import navbarDiskImage from "../../public/favicon.ico"
import CPmenuImage from "../../public/CP-menu.ico"

import localFont from "@next/font/local";

const myFont = localFont({
  src: "../../public/fonts/W95FA.otf",
});


const Navbar = () => {
  return (
    <header className="font-display flex items-center justify-between mb-1 space-x-2 pr-5 py-5">
      <div className="pl-5">
        <Link className={myFont.className} href="/">
          KLARA KELLER
        </Link>
      </div>

      <div className={myFont.className}>
        <ul className="hidden justify-between space-x-12 pr-5 py-5 md:flex md:items-center md:text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/tour">Tour</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <Image
          src={navbarDiskImage}
          alt="Listen to Klara on Spotify"
          width={30}
          height={30}
        />
      </div>

      <div className="block md:hidden">
        <Image
          src={CPmenuImage}
          alt="Listen to Klara on Spotify"
          width={30}
          height={30}
        />
      </div>
    </header>
  );
};

export default Navbar;
