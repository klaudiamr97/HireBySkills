import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import useAppContext from "../contexts/useAppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="w-screen flex overflow-hidden items-center justify-between px-4 bg-body py-5">
      <div className="container mx-auto flex justify-between">
        <span>
          <Link to="/">
            <div className="text-4xl">
              <span className="text-black-tint">Hire</span>
              <span className="text-purple">By</span>
              <span className="text-black-tint">Skills</span>
            </div>
          </Link>
        </span>
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <ul className="flex items-center mr-16 text-black-font">
              <li className="mr-9 font-medium hover:text-dark-purple">
                <a href="/jobs">Jobs</a>
              </li>
              <li className="mr-9 font-medium hover:text-dark-purple">
                <a href="/careerguide">Career Guide</a>
              </li>

              <li className="font-medium hover:text-dark-purple">
                <a href="/aboutus">About Us</a>
              </li>
            </ul>
          </div>
          <span className="flex space-x-2 mr-9 ">
            {isLoggedIn ? (
              <>
                <Link
                  to="/candidateaccount"
                  className="items-center py-3  px-7  w-full text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
                >
                  Account
                </Link>
                <LogOutButton />
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center py-3 px-7  w-full text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="flex items-center py-3 px-7  w-full text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                >
                  Register
                </Link>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
