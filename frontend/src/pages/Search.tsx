import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useSearchContext } from "../contexts/SearchContext";
import JoinUs from "../assets/man-with-join-us-sign-for-open-recruitment.png";
import SearchBar from "../components/SearchBar";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import SearchResultsCard from "../components/SearchResultsCard";
import Pagination from "../components/Pagination";
import EssentialSkillsFilter from "../components/EssentialSkillsFilter";
import { skillsList } from "../config/skills-options-config";
import OptionalSkillsFilter from "../components/OptionalSkillsFilter";

const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedEssentialSkills, setSelectedEssentialSkills] = useState<
    string[]
  >([]);
  const [selectedOptionalSkills, setSelectedOptionalSkills] = useState<
    string[]
  >([]);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

  const searchParams = {
    company: search.company,
    location: search.location,
    page: page.toString(),
    essentialSkills: selectedEssentialSkills,
    optionalSkills: selectedOptionalSkills,
  };

  const { data: JobListingData } = useQuery(
    ["searchJobListings", searchParams],
    () => apiClient.searchJobListing(searchParams)
  );

  const handleEssentialSkillsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const essentialSkill = event.target.value;
    setSelectedEssentialSkills((prevEssentialSkills) =>
      event.target.selectedOptions.length > 0
        ? [...prevEssentialSkills, essentialSkill]
        : prevEssentialSkills.filter(
            (prevEssentialSkill) => prevEssentialSkill !== essentialSkill
          )
    );
  };

  const handleEssentialSkillRemove = (index: number) => {
    const updatedSkills = [...selectedEssentialSkills];
    updatedSkills.splice(index, 1);
    setSelectedEssentialSkills(updatedSkills);
  };

  const handleOptionalSkillsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const optionalSkill = event.target.value;
    setSelectedOptionalSkills((prevOptionalSkills) =>
      event.target.selectedOptions.length > 0
        ? [...prevOptionalSkills, optionalSkill]
        : prevOptionalSkills.filter(
            (prevOptionalSkill) => prevOptionalSkill !== optionalSkill
          )
    );
  };

  const handleOptionalSkillRemove = (index: number) => {
    const updatedSkills = [...selectedOptionalSkills];
    updatedSkills.splice(index, 1);
    setSelectedOptionalSkills(updatedSkills);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero
        title="Skill-Based Job Search Your Ideal Career Awaits Here!"
        buttonText="Sign Up Today!"
        buttonLink="/register"
        imgSrc={JoinUs}
      />
      <section className="py-10 min-h-screen bg-body">
        <div className="container mx-auto px-4">
          <SearchBar />
          <button
            className="md:hidden border border-gray-300 rounded px-3 py-1 mb-4"
            onClick={toggleFilterVisibility}
          >
            {isFilterVisible ? "Hide Filters" : "Show Filters"}
          </button>
          <div className="flex flex-wrap">
            <div
              className={`md:w-1/4 p-5 sticky top-10 bg-white rounded-l-3xl ${
                isFilterVisible ? "block" : "hidden"
              } md:block`}
            >
              <h3 className="font-heading text-lg text-gray-900 font-black tracking-tight border-b pb-5">
                Filter by:
              </h3>
              <EssentialSkillsFilter
                skillsList={skillsList}
                selectedEssentialSkills={selectedEssentialSkills}
                onChange={handleEssentialSkillsChange}
                onSkillRemove={handleEssentialSkillRemove}
              />
              <OptionalSkillsFilter
                skillsList={skillsList}
                selectedOptionalSkills={selectedOptionalSkills}
                onChange={handleOptionalSkillsChange}
                onSkillRemove={handleOptionalSkillRemove}
              />
            </div>
            <div className="md:w-3/4 p-5 bg-white rounded-r-3xl flex flex-col gap-4">
              {JobListingData?.data.map((listing) => (
                <SearchResultsCard key={listing._id} listing={listing} />
              ))}
              <Pagination
                page={JobListingData?.pagination.page || 1}
                pages={JobListingData?.pagination.pages || 1}
                onPageChange={(page) => setPage(page)}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Search;
