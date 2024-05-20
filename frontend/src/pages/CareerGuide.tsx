import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import CareerImg from "../assets/career.png";
import SkillsImg from "../assets/goal_aim_target_team_icon.png";
import RemoteWorkImg from "../assets/developer_coding_programming_code_web_icon.png";
import DistanceWorking from "../assets/distance-learning.png";

const CareerGuide = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero
        title="Read Our Expert Guides And Empower Your Career Journey "
        buttonText="Sign Up Today!"
        buttonLink="/register"
        imgSrc={DistanceWorking}
      />
      <section className="bg-white">
        <div className="container py-20 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 flex flex-col pr-0 md:pr-40 p-4">
            <img
              src={CareerImg}
              alt="man-walking-up-the-stairs"
              className="w-full md:w-auto"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h4 className="py-8 text-3xl leading-normal xl:text-4xl font-bold font-heading tracking-px-n">
              Mastering the Art of Career Transitions: A Step-by-Step Guide
            </h4>
            <p>
              Changing careers can be one of the most daunting yet rewarding
              decisions you'll ever make. Whether you're looking to find more
              satisfaction in your work, achieve better work-life balance, or
              align your job with your passions, mastering the art of career
              transitions is crucial...
            </p>
            <span className="inline-flex my-10">
              <Link
                to="/careerguide/careertransition"
                className="flex items-center py-3 px-8 text-black-tint font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-body hover:bg-black-tint hover:text-offwhite transition ease-in-out duration-200"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className="bg-body">
        <div className="container py-20 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 p-8">
            <h4 className="py-8 text-3xl leading-normal xl:text-4xl font-bold font-heading tracking-px-n">
              Top 10 Most In-Demand Skills for the Modern Job Market
            </h4>
            <p>
              The job market is constantly evolving, and so are the skills that
              employers are seeking. To stay competitive and enhance your
              employability, it's essential to develop skills that are in high
              demand...
            </p>
            <span className="inline-flex my-10">
              <Link
                to="/careerguide/indemandskills"
                className="flex items-center py-3 px-8 text-black-tint font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-body hover:bg-black-tint hover:text-offwhite transition ease-in-out duration-200"
              >
                Read More
              </Link>
            </span>
          </div>
          <div className="w-full md:w-1/2 flex flex-col pl-0 md:pl-40 p-4">
            <img
              src={SkillsImg}
              alt="skills icon"
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-white overflow-hidden">
        <div className="container py-20 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 flex flex-col pr-0 md:pr-40 p-4">
            <img
              src={RemoteWorkImg}
              alt="remote work icon"
              className="w-full md:w-auto"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h4 className="py-8 text-3xl leading-normal xl:text-4xl font-bold font-heading tracking-px-n">
              Navigating Remote Work: Tips for Success in the Virtual Office
            </h4>
            <p>
              Remote work has become a new norm for many professionals. While it
              offers flexibility and eliminates commuting, it also comes with
              its own set of challenges. Here are some tips to help you succeed
              in the virtual office...
            </p>
            <span className="inline-flex my-10">
              <Link
                to="/careerguide/remoteworktips"
                className="flex items-center py-3 px-8 text-black-tint font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-body hover:bg-black-tint hover:text-offwhite transition ease-in-out duration-200"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </div>
  );
};

export default CareerGuide;
