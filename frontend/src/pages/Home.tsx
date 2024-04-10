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
  const [careerGuideItems /*setCareerGuideItems*/] = useState([
    {
      title: "Mastering the Art of Career Transitions: A Step-by-Step Guide",
      description:
        "Navigate essential steps for a successful career transition.",
    },
    {
      title: "Top 10 Most In-Demand Skills for the Modern Job Market",
      description: "Discover essential skills for today's job market.",
    },
    {
      title: "Navigating Remote Work: Tips for Success in the Virtual Office",
      description: "Guidance for thriving in a remote work environment.",
    },
  ]);

  const howItWorksItems = [
    {
      image: dataAnalysisIcon,
      text: "Add your skills to your profile and upload your CV",
    },
    { image: laptopIcon, text: "Find a perfect match" },
    { image: girlWithLaptopIcon, text: "Apply" },
    { image: businessInterviewIcon, text: "Prepare for your interview" },
    { image: joinUsIcon, text: "Good luck at your new job!" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
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
          <div className="md:w-1/2 flex flex-col">
            <h4 className="p-8 text-3xl leading-normal xl:text-10xl font-bold font-heading tracking-px-n">
              Match your skills with job offers
            </h4>
          </div>
          <div className="md:w-1/2 p-8">
            <p>
              Use our "Match Your Skills with Job Offers" feature to simplify
              your job search. Input your skills, and our advanced algorithm
              finds tailored opportunities, eliminating the need to sift through
              countless listings. Focus on securing your ideal career with
              personalized recommendations designed just for you.
            </p>
          </div>
        </div>

        <div className="relative pb-10 z-10 px-4 mx-auto bg-body text-center">
          <h4 className="py-16 text-6xl md:text-3xl font-bold font-heading tracking-px-n leading-tight">
            How It Works
          </h4>
          <div className="container mx-auto flex flex-wrap justify-center">
            {howItWorksItems.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/5 p-8">
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

        <div className="container pb-24 px-4 mx-auto">
          <h4 className="py-16 text-6xl md:text-3xl text-center font-bold font-heading tracking-px-n leading-tight">
            Career Guide
          </h4>
          <div className="flex justify-between">
            {careerGuideItems.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 p-16 md:p-3">
                <div className="bg-body h-96 mx-8 rounded-xl flex-grow relative">
                  <div className="absolute inset-4 bg-white rounded-xl p-6 flex flex-col justify-between">
                    <div>
                      <h5 className="text-lg font-bold pb-5">
                        <a href="#">{item.title}</a>
                      </h5>
                      <p>{item.description}</p>
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
