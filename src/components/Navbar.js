import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSubMenu = (menu) => {
    setIsSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  const closeSubMenu = (menu) => {
    setIsSubMenuOpen((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="bg-[#111827] shadow fixed w-full z-50">
      <nav className="bg-[#111827] shadow-lg relative">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="https://acpkhi.com/logo.png"
              alt="Arts Council Logo"
              className="w-14 h-14"
            />
            {/* <span className="text-xl font-bold text-[#15803D]">Arts Council</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`text-white hover:text-[#15803D] ${isActiveLink("/") ? "font-bold text-green-700" : ""}`}
                >
                  Home
                </Link>
              </li>
              
              
              
              <li
                className="relative group"
                onMouseEnter={() => openSubMenu("production")}
                onMouseLeave={() => closeSubMenu("production")}
              >
                <button className="text-white hover:text-[#15803D]">Production</button>
                {isSubMenuOpen["production"] && (
                  <ul className="absolute bg-white shadow-lg mt-2 space-y-2 z-50 group-hover:opacity-100 transition-opacity">
                    <li>
                      <Link to="/production/films" className="block px-4 py-2 hover:bg-gray-100">Films</Link>
                    </li>
                    <li>
                      <Link to="/production/theatre" className="block px-4 py-2 hover:bg-gray-100">Theatre</Link>
                    </li>
                  </ul>
                )}
              </li>
             
             
             
              <li>
                <Link
                  to="/academies"
                  className={`text-white hover:text-[#15803D] ${isActiveLink("/academies") ? "font-bold text-[#15803D]" : ""}`}
                >
                  Academies
                </Link>
              </li>
              
              
               <li>
                <Link
                  to="/VenuesPage"
                  className={`text-white hover:text-[#15803D] ${isActiveLink("/VenuesPage") ? "font-bold text-[#15803D]" : ""}`}
                >
                  Venue
                </Link>
              </li>
              <li>
                <Link
                  to="/cafeteria"
                  className={`text-white hover:text-[#15803D] ${isActiveLink("/cafeteria") ? "font-bold text-[#15803D]" : ""}`}
                >
                  Cafeteria
                </Link>
              </li>
             
             
             
             
              <li>
              <li
                className="relative group"
                onMouseEnter={() => openSubMenu("about")}
                onMouseLeave={() => closeSubMenu("about")}
              >
                <button className="text-white hover:text-[#15803D]">About Us</button>
                {isSubMenuOpen["about"] && (
                  <ul className="absolute bg-white shadow-lg mt-2 space-y-2 z-50 group-hover:opacity-100 transition-opacity">
                    <li>
                      <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                    </li>
                    <li>
                      <Link to="/GoverningBody" className="block px-4 py-2 hover:bg-gray-100">GoverningBody</Link>
                    </li>

                    <li>
                      <Link to="/TeamMembers" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
                    </li>
                  </ul>
                )}
              </li>
              </li>




              <li>
                <Link to="#contact" className="text-white hover:text-[#15803D]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-[#F5F1E1] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-[#111827] shadow-lg absolute w-full left-0 top-16 px-6 py-4 z-50`}
        >
          <ul>
            <li className="py-2">
              <Link to="/" className="text-[#F5F1E1] hover:text-[#15803D]">Home</Link>
            </li>
            <li className="py-2 relative">
              <button
                onClick={() =>
                  setIsSubMenuOpen((prevState) => ({
                    ...prevState,
                    mobileProduction: !prevState.mobileProduction,
                  }))
                }
                className="w-full text-left text-[#F5F1E1] hover:text-[#15803D]"
              >
                Production
              </button>
              {isSubMenuOpen["mobileProduction"] && (
                <ul className="pl-4 mt-2 space-y-2 z-50">
                  <li><Link to="/production/films" className="block px-4 py-2 hover:bg-gray-100">Films</Link></li>
                  <li><Link to="/production/theatre" className="block px-4 py-2 hover:bg-gray-100">Theatre</Link></li>
                </ul>
              )}
            </li>
            <li className="py-2">
              <Link to="/VenuesPage" className="text-[#F5F1E1] hover:text-[#15803D]">Venue</Link>
            </li>
            <li className="py-2">
              <Link to="/cafeteria" className="text-[#F5F1E1] hover:text-[#15803D]">Cafeteria</Link>
            </li>
            <li className="py-2">
              <Link to="/about" className="text-[#F5F1E1] hover:text-[#15803D]">About Us</Link>
            </li>
            <li className="py-2">
              <Link to="#contact" className="text-[#F5F1E1] hover:text-[#15803D]">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
