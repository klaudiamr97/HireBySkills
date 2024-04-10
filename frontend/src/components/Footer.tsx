import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-body py-10 ">
      <div className="flex flex-wrap -mb-5 lg:-mx-6 items-center justify-center">
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
            {" "}
            <p>About Us</p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
