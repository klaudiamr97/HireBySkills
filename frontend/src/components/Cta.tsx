import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="w-screen flex items-center justify-between bg-body py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3 mr-36 flex flex-col">
          <p className="py-16  md:text-2xl  text-left font-heading tracking-px-n leading-tight">
            Sign up now to discover personalized job matches tailored to your
            skills and embark on your path to professional success!
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col ">
          <span className="flex space-x-2 mr-9 ">
            <Link
              to="/register"
              className="flex items-center py-3 px-8 mr-5 text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
            >
              Join Today
            </Link>
            <Link
              to="/aboutus"
              className="flex items-center py-3 px-8 text-black-tint font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-body hover:bg-black-tint hover:text-offwhite transition ease-in-out duration-200"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cta;
