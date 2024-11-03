import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center h-[50px] justify-between mx-4 md:mx-32 pt-10 px-4 py-2">
      <Link to="/" onClick={handleLinkClick}>
        <img src={logo} alt="logo" className="h-10 cursor-pointer" />
      </Link>

      <ul className="hidden md:flex gap-x-6 items-center text-black text-opacity-80">
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className="cursor-pointer hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            onClick={handleLinkClick}
            className="cursor-pointer hover:text-blue-500"
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="cursor-pointer hover:text-blue-500"
          >
            About Us
          </Link>
        </li>
      </ul>

      <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Connect Wallet
      </button>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-y-4 py-4 shadow-lg">
          <li>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-500"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <button
            onClick={handleLinkClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Connect Wallet
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
