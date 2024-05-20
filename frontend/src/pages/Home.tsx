import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import { useState } from "react";
import Collaboration from "../assets/Collaborate .png";
import dataAnalysisIcon from "../assets/data-analysis-case-study.png";
import laptopIcon from "../assets/working-with-laptop.png";
import girlWithLaptopIcon from "../assets/girl-work-on-laptop.png";
import businessInterviewIcon from "../assets/business-interview1.png";
import joinUsIcon from "../assets/man-with-join-us-sign-for-open-recruitment.png";

const Home = () => {
  const [careerGuideItems] = useState([
    {
      title: "Mastering the Art of Career Transitions: A Step-by-Step Guide",
      description:
        "Changing careers can be one of the most daunting yet rewarding decisions you'll ever make. Whether you're looking to find more satisfaction in your work, achieve better work-life balance, or align your job with your passions...",
      link: "/careerguide/careertransition",
    },
    {
      title: "Top 10 Most In-Demand Skills for the Modern Job Market",
      description:
        "The job market is constantly evolving, and so are the skills that employers are seeking. To stay competitive and enhance your employability, it's essential to develop skills that are in high demand...",
      link: "/careerguide/indemandskills",
    },
    {
      title: "Navigating Remote Work: Tips for Success in the Virtual Office",
      description:
        "Remote work has become a new norm for many professionals. While it offers flexibility and eliminates commuting, it also comes with its own set of challenges. Here are some tips to help you succeed in the virtual office...",
      link: "/careerguide/remoteworktips",
    },
  ]);

  const howItWorksItems = [
    {
      image: dataAnalysisIcon,
      text: "Choose your skills from the list",
    },
    { image: laptopIcon, text: "Find a perfect match" },
    { image: girlWithLaptopIcon, text: "Apply" },
    { image: businessInterviewIcon, text: "Prepare for your interview" },
    { image: joinUsIcon, text: "Good luck at your new job!" },
  ];

  return (
    <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
      <Header />
      <Hero
        title="Unlock Your Potential
        Find the Perfect Career Match Today!"
        buttonText="Sign Up Today"
        buttonLink="/register"
        imgSrc={Collaboration}
      />
      <section className="bg-white overflow-hidden">
        <div className="container py-20 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 flex flex-col p-4">
            <h4 className="text-3xl leading-normal xl:text-4xl font-bold font-heading tracking-px-n">
              Match your skills with job offers
            </h4>
          </div>
          <div className="md:w-1/2 p-4">
            <p>
              Use our "Match Your Skills with Job Offers" feature to simplify
              your job search. Input your skills, and our advanced algorithm
              finds tailored opportunities, eliminating the need to sift through
              countless listings. Focus on securing your ideal career with
              personalized recommendations designed just for you.
            </p>
          </div>
        </div>

        <div className="relative pb-10 z-10 px-4 mx-auto bg-body text-center overflow-hidden">
          <h4 className="py-16 text-3xl md:text-4xl font-bold font-heading tracking-px-n leading-tight">
            How It Works
          </h4>
          <div className="container mx-auto flex flex-wrap justify-center">
            {howItWorksItems.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/5 p-4">
                <img
                  src={item.image}
                  alt={`how-it-works-icon-${index}`}
                  className="mx-auto mb-8 h-25 w-40"
                />
                <div className="md:max-w-xs mx-auto">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container pb-24 px-4 mx-auto overflow-hidden">
          <h4 className="py-16 text-3xl md:text-4xl text-center font-bold font-heading tracking-px-n leading-tight">
            Career Guide
          </h4>
          <div className="flex flex-wrap justify-between">
            {careerGuideItems.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <div className="bg-body h-96 mx-4 rounded-xl flex-grow relative overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <h5 className="text-lg font-bold pb-4">
                        <a href={item.link}>{item.title}</a>
                      </h5>
                      <p>{item.description}</p>
                    </div>
                    <div className="text-right ">
                      <a
                        href={item.link}
                        className="text-purple  font-semibold hover:underline"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Cta />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
