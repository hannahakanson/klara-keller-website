import { BsSpotify, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="flex mt-6">
        <footer className="bg-klara-purple p-4 bottom-0 w-screen md:bg-transparent">
          <div className="gap-4 flex justify-center mx-auto items-center">
            <BsInstagram size={40} />
            <BsSpotify size={40} />
            <BsFacebook size={40} />
          </div>
        </footer>
      </div>
    );
}

export default Footer
