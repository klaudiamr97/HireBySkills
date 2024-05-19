import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { BsBuilding, BsCurrencyPound, BsMap } from "react-icons/bs";

const MyJobListings = () => {
  const { data: JobListingData, isLoading } = useQuery(
    "fetchMyJobListings",
    apiClient.fetchMyJobListings,
    {
      onError: () => {},
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="flex justify-between mb-12">
        {JobListingData && JobListingData.length > 0 && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight leading-none">
            My Job Listings
          </h2>
        )}
        <Link
          to="/add-job-listing"
          className="flex py-2 sm:py-3 px-4 sm:px-7 text-white font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
        >
          Add Job Listing
        </Link>
      </div>
      {JobListingData && JobListingData.length > 0 && (
        <div className="grid grid-cols-1 gap-8">
          {JobListingData.map((joblisting) => (
            <div
              className="flex flex-col justify-between border border-purple rounded-lg p-6 sm:p-8 gap-5 bg-white"
              key={joblisting._id}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl text-center font-bold font-heading leading-snug mb-6 sm:mb-8 lg:mb-12">
                {joblisting.jobTitle}
              </h3>
              <div className="whitespace-pre-line">
                {joblisting.description}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
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
              <div className="mt-5">
                <h4 className="text-lg font-bold">Applications</h4>
                {joblisting.applications.length > 0 ? (
                  <div className="flex flex-col gap-4 overflow-y-auto max-h-48 sm:max-h-64 lg:max-h-80 mt-4">
                    {joblisting.applications.map((application) => (
                      <div
                        key={application._id}
                        className="border border-gray-300 rounded-lg p-4"
                      >
                        <div>
                          <span className="font-bold mr-2">Name:</span>
                          <span>
                            {application.firstName} {application.lastName}
                          </span>
                        </div>
                        <div>
                          <span className="font-bold mr-2">Email:</span>
                          <a
                            href={`mailto:${application.email}`}
                            className="text-purple-600 underline"
                          >
                            {application.email}
                          </a>
                        </div>
                        <div>
                          <span className="font-bold mr-2">CV:</span>
                          <a
                            href={`data:application/octet-stream;base64,${application.cv}`}
                            download={application.cvName}
                            className="text-purple-600 underline"
                          >
                            Download CV
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No applications found for this listing.</p>
                )}
              </div>
              <span className="flex justify-end mt-4">
                <Link
                  to={`/edit-job-listing/${joblisting._id}`}
                  className="py-2 sm:py-3 px-4 sm:px-7 text-white font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
                >
                  View Details
                </Link>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyJobListings;
