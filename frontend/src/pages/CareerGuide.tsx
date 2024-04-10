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
    <div>
      <Header />
      <Hero
        title="Read Our Expert Guides And Empower Your Career Journey "
        buttonText="Sign Up Today!"
        buttonLink="/register"
        imgSrc={DistanceWorking}
      />
      <section className="bg-white overflow-hidden">
        <div className="container py-20 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full pr-40 md:w-1/2 flex flex-col">
            <img src={CareerImg} alt="man-walking-up-the-stairs" />
          </div>
          <div className="md:w-1/2 p-8">
            <h4 className="py-8 text-3xl leading-normal xl:text-10xl font-bold font-heading tracking-px-n">
              Mastering the Art of Career Transitions: A Step-by-Step Guide
            </h4>
            <p>
              Embarking on a career transition marks a transformative journey
              that holds both excitement and challenges. This comprehensive
              guide aims to be your compass, navigating you through the
              essential steps needed to ensure a smooth and successful career
              change...
            </p>
            <span className="inline-flex my-10 float-left">
              <Link
                to="#"
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
            <h4 className="py-8 text-3xl leading-normal xl:text-10xl font-bold font-heading tracking-px-n">
              Top 10 Most In-Demand Skills for the Modern Job Market
            </h4>
            <p>
              In our fast-paced job market, the pursuit of relevant skills has
              become a cornerstone of professional success. This blog post
              unveils the top 10 in-demand skills that employers seek in the
              modern landscape...
            </p>
            <span className="inline-flex my-10 float-left">
              <Link
                to="#"
                className="flex items-center py-3 px-8 text-black-tint font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-body hover:bg-black-tint hover:text-offwhite transition ease-in-out duration-200"
              >
                Read More
              </Link>
            </span>
          </div>
          <div className="w-full pl-40 md:w-1/2 flex flex-col">
            <img src={SkillsImg} alt="man-walking-up-the-stairs" />
          </div>
        </div>
      </section>
      <section className="bg-white overflow-hidden">
        <div className="container py-20 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full pr-40 md:w-1/2 flex flex-col">
            <img src={RemoteWorkImg} alt="man-walking-up-the-stairs" />
          </div>
          <div className="md:w-1/2 p-8">
            <h4 className="py-8 text-3xl leading-normal xl:text-10xl font-bold font-heading tracking-px-n">
              Navigating Remote Work: Tips for Success in the Virtual Office
            </h4>
            <p>
              The global shift toward remote work has redefined the professional
              landscape. This blog post aims to equip you with practical tips
              and insights to not only adapt but thrive in the virtual office
              environment...
            </p>
            <span className="inline-flex my-10 float-left">
              <Link
                to="#"
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
