//Update later
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import JoinUs from "../assets/man-with-join-us-sign-for-open-recruitment.png";
import SearchBar from "../components/SearchBar";

const JobSearch = () => {
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: "Senior Product Designer",
      company: "ABC Design Studio",
      location: "New York",
      skills: [
        "UI/UX Design",
        "Adobe Creative Suite",
        "Wireframing",
        "Prototyping",
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: 2,
      title: "Creative Director",
      company: "XYZ Agency",
      location: "Los Angeles",
      skills: ["Art Direction", "Brand Strategy", "Team Management"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Tech Innovations",
      location: "San Francisco",
      skills: ["UI Design", "Frontend Development", "User Research"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ]);

  const [filterValues, setFilterValues] = useState({
    is100PercentMatch: false,
    isSomeSkillsMissing: false,
    locationFilter: "",
  });

  useEffect(() => {
    const filteredListings = jobListings.filter((job) => {
      if (filterValues.is100PercentMatch && job.skills.length !== 4) {
        return false;
      }
      if (filterValues.isSomeSkillsMissing && job.skills.length === 4) {
        return false;
      }

      if (
        filterValues.locationFilter &&
        job.location !== filterValues.locationFilter
      ) {
        return false;
      }

      return true;
    });

    setJobListings(filteredListings);
  }, [filterValues, jobListings]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilterValues({ ...filterValues, [name]: checked });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  return (
    <div className=" overflow-hidden">
      <Header />
      <Hero
        title="Skill-Based Job Search Your Ideal Career Awaits Here!"
        buttonText="Sign Up Today!"
        buttonLink="/register"
        imgSrc={JoinUs}
      />
      <section className="py-10 bg-body">
        <div className="container mx-auto px-4">
          <SearchBar />
          <div className="py-16 px-8 bg-white rounded-3xl flex flex-wrap">
            <div className="w-full md:w-1/4">
              <h2 className="font-heading text-4xl text-gray-900 font-black tracking-tight">
                Filters
              </h2>
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-2">Skills</h3>
                <label className="flex items-center mb-2">
                  <input
                    name="is100PercentMatch"
                    type="checkbox"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                    checked={filterValues.is100PercentMatch}
                  />
                  <span>100% Match</span>
                </label>
                <label className="flex items-center mb-2">
                  <input
                    name="isSomeSkillsMissing"
                    type="checkbox"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                    checked={filterValues.isSomeSkillsMissing}
                  />
                  <span>Some skills missing</span>
                </label>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <select
                  name="locationFilter"
                  className="w-full bg-white border border-gray-300 rounded p-2"
                  onChange={handleSelectChange}
                  value={filterValues.locationFilter}
                >
                  <option value="">Select location</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="San Francisco">San Francisco</option>
                </select>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-2">Industry</h3>
                <select
                  id="industrySelect"
                  className="w-full bg-white border border-gray-300 rounded p-2"
                >
                  <option value="">Select industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-3/4 p-8">
              <div className="flex flex-wrap -m-3">
                {jobListings.map((job) => (
                  <div key={job.id} className="w-full p-3">
                    <div className="p-10 bg-body rounded-3xl">
                      <h4 className="font-heading text-2xl text-gray-900 font-black mb-2">
                        {job.title}
                      </h4>
                      <p className="text-gray-500 ">Company: {job.company}</p>
                      <p className="text-gray-500 ">Location: {job.location}</p>
                      <div className="mt-4">
                        <p className="font-bold mb-4">Skills:</p>
                        <div className="flex flex-wrap">
                          {job.skills.map((skill, index) => (
                            <div
                              key={index}
                              className="bg-white  px-3 py-1 mr-2 mb-2"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="mt-4">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JobSearch;
