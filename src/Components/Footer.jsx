import logo from "../assets/logo.png";
import discord from "../assets/Discord.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-20 px-4">
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="Logo" className="h-12 mb-4"/>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 items-center text-black text-sm md:text-base mt-4">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Events</li>
          <li className="cursor-pointer hover:text-blue-500">About Us</li>
        </ul>
        <div className="flex justify-center items-center gap-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="h-6 w-6 md:h-8 md:w-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={twitter}
              alt="Twitter"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={youtube}
              alt="YouTube"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={discord}
              alt="Discord"
              className="h-6 w-6 md:h-8 md:w-8"
            />
          </a>
        </div>
        <p className="text-xs md:text-sm text-gray-600 mt-4">
          © 2024 EthJos. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
