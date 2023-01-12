import Link from "next/link";
import { BsSpotify, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="flex justify-center mt-6">
        <footer className="absolute bg-transparent p-4 bottom-0 w-screen">
          <div className="gap-4 flex justify-center mx-auto items-center">
            <Link href="https://www.instagram.com/klarakeller/" target="_blank">
              <BsInstagram size={40} />
            </Link>
            <Link
              href="https://open.spotify.com/artist/3Utd6WFwBcRb2Piu9boAGm?si=4lOnSMtnSSyBJ0CZlc3nXQ"
              target="_blank">
              <BsSpotify size={40} />
            </Link>
            <Link href="https://www.facebook.com/klarakeller" target="_blank">
              <BsFacebook size={40} />
            </Link>
          </div>
        </footer>
      </div>
    );
}

export default Footer
