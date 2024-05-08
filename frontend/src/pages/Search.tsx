import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useSearchContext } from "../contexts/SearchContext";
import JoinUs from "../assets/man-with-join-us-sign-for-open-recruitment.png";
import SearchBar from "../components/SearchBar";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { useState } from "react";
import SearchResultsCard from "../components/SearchResultsCard";
import Pagination from "../components/Pagination";

const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);

  const searchParams = {
    company: search.company,
    location: search.location,
    page: page.toString(),
  };
  const { data: JobListingData } = useQuery(
    ["searchJobListings", searchParams],
    () => apiClient.searchJobListing(searchParams)
  );

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
          <div className="flex flex-wrap">
            <div className="md:w-1/4 p-5 sticky top-10 bg-white rounded-l-3xl">
              <h3 className="font-heading text-lg text-gray-900 font-black tracking-tight border-b pb-5">
                Filter by:
              </h3>
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
