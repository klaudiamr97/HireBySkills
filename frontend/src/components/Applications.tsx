import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";

const MyApplications = () => {
  const {
    data: listings,
    isLoading,
    isError,
  } = useQuery("fetchMyApplications", apiClient.fetchMyApplications);

  if (isLoading) {
    return <span>Loading applications...</span>;
  }

  if (isError || !listings || listings.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="flex justify-between mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight leading-none">
          My Applications
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {listings.map((listing) => (
          <div
            key={listing._id}
            className="flex flex-col justify-between border border-purple rounded-lg p-6 sm:p-8 gap-5 bg-white"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl text-center font-bold font-heading leading-snug mb-6 sm:mb-8 lg:mb-12">
              {listing.jobTitle}
            </h3>
            <div className="whitespace-pre-line">{listing.description}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
              <div className="border border-purple rounded-lg p-3 flex items-center">
                <BsBuilding className="mr-1" />
                {listing.company}
              </div>
              <div className="border border-purple rounded-lg p-3 flex items-center">
                <BsMap className="mr-1" />
                {listing.location}
              </div>
            </div>
            {listing.applications.length > 0 && (
              <div className="flex flex-col gap-4 overflow-y-auto max-h-48 sm:max-h-64 lg:max-h-80 mt-4">
                {listing.applications.map((application) => (
                  <div key={application._id} className="mt-4">
                    <div>
                      <span className="font-bold mr-2">Personal Details: </span>
                      <span>
                        {application.firstName} {application.lastName}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold mr-2">Email: </span>
                      <span>{application.email}</span>
                    </div>
                    <div>
                      <span className="font-bold mr-2">CV: </span>
                      <a
                        href={`data:application/octet-stream;base64,${application.cv}`}
                        download={application.cvName}
                        className="text-blue-500 underline"
                      >
                        {application.cvName}
                      </a>
                    </div>
                    {application.coverLetterName && (
                      <div>
                        <span className="font-bold mr-2">Cover Letter: </span>
                        <a
                          href={`data:application/octet-stream;base64,${application.coverLetter}`}
                          download={application.coverLetterName}
                          className="text-blue-500 underline"
                        >
                          {application.coverLetterName}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <span className="flex justify-end mt-4">
              <Link
                to={`/job-listing/${listing._id}`}
                className="py-2 sm:py-3 px-4 sm:px-7 text-white font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
              >
                See More Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
