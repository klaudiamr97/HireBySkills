import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CardProps {
  title: string;
  content?: string;
  redirectLink: string;
  location?: string;
  applications?: string;
  dateTime?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  redirectLink,
  location,
  applications,
  dateTime,
}) => {
  return (
    <div className="w-full md:w-1/3 p-16 md:p-3">
      <div className="h-fit px-10 pt-11 bg-white h-96 rounded-xl">
        <h3 className="mb-12 text-xl text-center font-bold font-heading leading-normal">
          {title}
        </h3>
        {location && (
          <p className="mb-6 text-gray-600 font-medium leading-relaxed">
            Location: {location}
          </p>
        )}
        <p className="mb-6 text-gray-600 font-medium leading-relaxed">
          {content}
        </p>
        {applications && (
          <p className="mb-6 text-gray-600 font-medium leading-relaxed">
            {applications} Applications Received
          </p>
        )}
        {dateTime && (
          <p className="mb-6 text-gray-600 font-medium leading-relaxed">
            Date & Time: {dateTime}
          </p>
        )}
        <Link
          to={redirectLink}
          className="inline-flex items-center max-w-max text-purple hover:text-dark-purple"
        >
          <p className="pb-8 mr-2 font-semibold">See more...</p>
        </Link>
      </div>
    </div>
  );
};

const MyJobs: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="pt-28 pb-40 bg-body overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="container px-4 mx-auto">
            <h4 className="mb-12 mt-16 text-3xl font-bold font-heading leading-snug">
              Your Applications
            </h4>
            <div className="flex flex-wrap -m-16 md:-m-3">
              <Card
                title="UX/UI Designer"
                content="As a UX Designer, you'll be responsible for creating intuitive and engaging user experiences..."
                redirectLink="/ux-ui-designer"
                location="London"
              />
              <Card
                title="Front-end Developer"
                content="Join our team as a Front-End Developer where you'll utilize your expertise in HTML, CSS, and JavaScript..."
                redirectLink="/front-end-developer"
                location="London"
              />
              <Card
                title="Accountant"
                content="We're seeking a detail-oriented Accountant to manage financial transactions, prepare reports..."
                redirectLink="/accountant"
                location="London"
              />
            </div>
          </div>
          <div className="container px-4 mx-auto">
            <h4 className="mb-12 mt-16 text-3xl font-bold font-heading leading-snug">
              Upcoming Interviews
            </h4>
            <div className="flex flex-wrap -m-16 md:-m-3">
              <Card
                title="UX/UI Designer"
                redirectLink="/interview-1"
                dateTime="22/03/2024 4:30pm"
              />
              <Card
                title="Front-end Developer"
                redirectLink="/interview-2"
                dateTime="10/03/2024 9:00am"
              />
              <Card
                title="Accountant"
                redirectLink="/interview-3"
                dateTime="12/03/2024 1:30pm"
              />
            </div>
          </div>
          <div className="container px-4 mx-auto">
            <h4 className="mb-12 mt-16 text-3xl font-bold font-heading leading-snug">
              Saved Jobs
            </h4>
            <div className="flex flex-wrap -m-16 md:-m-3">
              <Card
                title="UX/UI Designer"
                content="As a UX Designer, you'll be responsible for creating intuitive and engaging user experiences..."
                redirectLink="/ux-ui-designer"
                location="London"
              />
              <Card
                title="Front-end Developer"
                content="Join our team as a Front-End Developer where you'll utilize your expertise in HTML, CSS, and JavaScript..."
                redirectLink="/front-end-developer"
                location="London"
              />
              <Card
                title="Accountant"
                content="We're seeking a detail-oriented Accountant to manage financial transactions, prepare reports..."
                redirectLink="/accountant"
                location="London"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyJobs;
