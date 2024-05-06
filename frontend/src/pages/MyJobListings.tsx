import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { BsBuilding, BsCurrencyPound, BsMap } from "react-icons/bs";

const MyJobListings = () => {
  const { data: JobListingData } = useQuery(
    "fetchMyJobListings",
    apiClient.fetchMyJobListings,
    {
      onError: () => {},
    }
  );

  if (!JobListingData) {
    return <span>No Job Listings Found</span>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-body overflow-hidden">
      <Header />
      <section className="pt-28 flex-grow">
        <div className="container mx-auto">
          <div className="flex justify-between mb-20">
            <h2 className="text-4xl font-bold font-heading tracking-px-n leading-none">
              My Job Listings
            </h2>
            <Link
              to="/add-job-listing"
              className="flex py-3 px-7 text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
            >
              Add Job Listing
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {JobListingData?.map((joblisting) => (
              <div
                className="flex flex-col justify-between border border-purple rounded-lg p-8 gap-5 bg-white"
                key={joblisting._id}
              >
                <h3 className="mb-12 text-xl text-center font-bold font-heading leading-normal">
                  {joblisting.jobTitle}
                </h3>
                <div className="whitespace-pre-line">
                  {joblisting.description}
                </div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                  <div className="border border-purple rounded-lg p-3 flex items-center">
                    <BsBuilding className="mr-1" />
                    {joblisting.company}
                  </div>
                  <div className="border border-purple rounded-lg p-3 flex items-center">
                    <BsMap className="mr-1" />
                    {joblisting.location}
                  </div>
                  <div className="border border-purple rounded-lg p-3 flex items-center">
                    <BsCurrencyPound className="mr-1" />
                    {joblisting.salary}
                  </div>
                </div>
                <span className="flex justify-end">
                  <Link
                    to={`/edit-job-listing/${joblisting._id}`}
                    className="py-3 px-7 flex text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
                  >
                    View Details
                  </Link>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyJobListings;
