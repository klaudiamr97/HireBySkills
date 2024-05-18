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
    return <span>No applications found</span>;
  }

  return (
    <div className="container mx-auto mb-20">
      <div className="flex justify-between mb-20">
        <h2 className="text-4xl font-bold font-heading tracking-px-n leading-none">
          My Applications
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {listings.map((listing) => (
          <div
            key={listing._id}
            className="flex flex-col justify-between border border-purple rounded-lg p-8 gap-5 bg-white"
          >
            <h3 className="mb-12 text-xl text-center font-bold font-heading leading-normal">
              {listing.jobTitle}
            </h3>
            <div className="whitespace-pre-line">{listing.description}</div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              <div className="border border-purple rounded-lg p-3 flex items-center">
                <BsBuilding className="mr-1" />
                {listing.company}
              </div>
              <div className="border border-purple rounded-lg p-3 flex items-center">
                <BsMap className="mr-1" />
                {listing.location}
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] mt-4">
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
                      <span>{application.coverLetterName}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <span className="flex justify-end mt-4">
              <Link
                to={`/job-listing/${listing._id}`}
                className="py-3 px-7 flex text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
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
