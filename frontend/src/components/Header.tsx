import { useState } from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen flex overflow-hidden items-center justify-between px-4 bg-body py-5">
      <div className="container mx-auto flex justify-between items-center">
        <span>
          <Link to="/">
            <div className="text-4xl">
              <span className="text-black-tint">Hire</span>
              <span className="text-purple">By</span>
              <span className="text-black-tint">Skills</span>
            </div>
          </Link>
        </span>
        <div className="lg:hidden">
          <button
            className="text-black-tint focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:items-center">
          <ul className="flex items-center mr-16 text-black-font">
            <li className="mr-9 font-medium hover:text-dark-purple">
              <a href="/search">Jobs</a>
            </li>
            <li className="mr-9 font-medium hover:text-dark-purple">
              <a href="/careerguide">Career Guide</a>
            </li>
            <li className="font-medium hover:text-dark-purple">
              <a href="/aboutus">About Us</a>
            </li>
          </ul>
          <span className="flex space-x-2 mr-9">
            {isLoggedIn ? (
              <>
                <Link
                  to="/my-account"
                  className="items-center py-3 px-7 w-full text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
                >
                  Account
                </Link>
                <LogOutButton />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center py-3 px-7 w-full text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="flex items-center py-3 px-7 w-full text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                >
                  Register
                </Link>
              </>
            )}
          </span>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute top-16 left-0 w-full bg-purple text-white z-50`}
        >
          <ul className="flex flex-col items-center py-4">
            <li className="mb-2 font-medium">
              <a href="/search" className="block px-4 py-2">
                Jobs
              </a>
            </li>
            <li className="mb-2 font-medium">
              <a href="/careerguide" className="block px-4 py-2">
                Career Guide
              </a>
            </li>
            <li className="mb-2 font-medium">
              <a href="/aboutus" className="block px-4 py-2">
                About Us
              </a>
            </li>
            <span className="flex flex-col items-center space-y-2">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/my-account"
                    className="block py-3 px-7 text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
                  >
                    Account
                  </Link>
                  <LogOutButton />
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block py-3 px-7 text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="block py-3 px-7 text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                  >
                    Register
                  </Link>
                </>
              )}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
