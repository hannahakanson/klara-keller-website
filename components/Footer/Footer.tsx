import { BsSpotify, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 bottom-0 w-full">
        <div className="container gap-4 flex justify-center mx-auto items-center">
          <BsInstagram size={40} />
          <BsSpotify size={40} />
          <BsFacebook size={40} />
        </div>
      </footer>
    );
}

export default Footer
