import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Cta = () => {
  const { isLoggedIn } = useAppContext();

  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="w-screen flex overflow-hidden items-center justify-between bg-body py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="md:w-2/3 flex flex-col md:mr-8">
          <p className="py-8 md:py-16 text-lg md:text-2xl text-left font-heading tracking-tight leading-tight">
            Sign up now to discover personalized job matches tailored to your
            skills and embark on your path to professional success!
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="flex space-x-4">
            <Link
              to="/register"
              className="flex items-center py-3 px-6 md:px-8 text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
            >
              Join Today
            </Link>
            <Link
              to="/aboutus"
              className="flex items-center py-3 px-6 md:px-8 text-black-tint font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-body hover:bg-black-tint hover:text-offwhite transition ease-in-out duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
