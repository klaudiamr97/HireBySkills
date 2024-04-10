import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

interface SkillItemProps {
  text: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ text }) => (
  <p className="mb-6 appearance-none px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-offwhite outline-none">
    {text}
  </p>
);

interface SkillsSectionProps {
  title: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title }) => (
  <div className="container bg-white pb-12 rounded-xl">
    <h4 className="my-10 mx-11 pt-6 text-3xl font-bold font-heading leading-snug">
      {title}
    </h4>
    <div className="flex flex-wrap mx-6 -mb-4 md:mb-0">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="container md:w-2/6 p-6 bg-white">
          <SkillItem text="Skill" />
          <SkillItem text="Skill" />
        </div>
      ))}
    </div>
  </div>
);

const JobListing: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="pt-28 pb-40 bg-body overflow-hidden">
        <div className="container px-4 mx-auto">
          <h4 className="mb-10 text-3xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
            [Job title]
          </h4>
          <p>[Company]</p>
          <p>[Location]</p>
          <p>[Salary]</p>

          <SkillsSection title="Essential Skills" />
          <SkillsSection title="Optional Skills" />

          <div className="container bg-white pb-12 rounded-xl">
            <h4 className="my-10 mx-11 pt-6 text-3xl font-bold font-heading leading-snug">
              Description
            </h4>
            <div className="flex flex-wrap mx-6 -mb-4 md:mb-0">
              <p className="mx-5 mb-6 appearance-none px-4 py-3.5 w-full text-gray-400 placeholder-gray-400 bg-offwhite outline-none">
                {[...Array(4)].map((_, index) => (
                  <React.Fragment key={index}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus placeat mollitia quod inventore odio. Vel
                    reprehenderit vitae distinctio cum eaque sunt veniam
                    repudiandae! Magnam quas aut similique! Consequuntur,
                    dolorem aperiam.
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          <span className="inline-flex my-10 float-right">
            <Link
              to="/sign-in"
              className="flex items-center py-3 px-9 w-full text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
            >
              Apply
            </Link>
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JobListing;
