import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-body py-10 overflow-hidden hidden md:block">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center -mb-5 lg:-mx-6">
            <span className="black-font font-bold tracking-tight flex gap-4 mb-5">
              <a
                className="px-16 hover:text-dark-purple transition ease-in-out duration-200"
                href="/jobs"
              >
                <p>Jobs</p>
              </a>
              <a
                className="px-16 hover:text-dark-purple transition ease-in-out duration-200"
                href="/careerguide"
              >
                <p>Career Guide</p>
              </a>
            </span>
            <span>
              <Link to="/">
                <div className="text-2xl px-24 mb-5">
                  <span className="text-black-tint">Hire</span>
                  <span className="text-purple">By</span>
                  <span className="text-black-tint">Skills</span>
                </div>
              </Link>
            </span>
            <span className="black-font font-bold tracking-tight flex gap-4 mb-5">
              <a
                className="px-16 hover:text-dark-purple transition ease-in-out duration-200"
                href="/register"
              >
                <p>Register</p>
              </a>
              <a
                className="px-16 hover:text-dark-purple transition ease-in-out duration-200"
                href="/aboutus"
              >
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>
      </footer>

      <footer className="bg-body py-10 overflow-hidden block md:hidden">
        <div className="container mx-auto px-10 text-left">
          <Link
            to="/"
            className="text-2xl font-bold mb-5 block text-black-tint"
          >
            <span>Hire</span>
            <span className="text-purple">By</span>
            <span className="text-black-tint">Skills</span>
          </Link>
          <nav className="flex flex-col items-start gap-4 mt-5">
            <Link
              to="/register"
              className="hover:text-dark-purple transition ease-in-out duration-200"
            >
              Register
            </Link>
            <Link
              to="/jobs"
              className="hover:text-dark-purple transition ease-in-out duration-200"
            >
              Jobs
            </Link>
            <Link
              to="/careerguide"
              className="hover:text-dark-purple transition ease-in-out duration-200"
            >
              Career Guide
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-dark-purple transition ease-in-out duration-200"
            >
              About Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
