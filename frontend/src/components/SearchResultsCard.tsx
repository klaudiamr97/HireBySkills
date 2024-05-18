import { Link } from "react-router-dom";
import { JobListingType } from "../../../backend/src/shared/types";

type Props = {
  listing: JobListingType;
};

const SearchResultsCard = ({ listing }: Props) => {
  return (
    <div className="flex flex-col justify-between m-5 p-10 gap-4 bg-body rounded-3xl">
      <div>
        <Link
          to={`/joblistings/${listing._id}`}
          className="font-heading text-2xl text-gray-900 font-black mb-2 cursor-pointer"
        >
          {listing.jobTitle} at {listing.company}
        </Link>
        <p className="pt-3">
          <span className="font-semibold">Location:</span> {listing.location}
        </p>
        <p className="pt-3">
          <span className="font-semibold">Salary: </span>£{listing.salary}
        </p>
        <div>
          <div className="pt-2 pb-2 font-semibold">Essential Skills:</div>
          <div className="flex gap-1 flex-wrap">
            {listing.essentialSkills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-white p-2 rounded-lg text-gray-900"
              >
                {skill}
              </span>
            ))}
            {listing.essentialSkills.length > 3 && (
              <span className="text-sm font-semibold text-purple">{`+${
                listing.essentialSkills.length - 3
              } more`}</span>
            )}
          </div>
        </div>
        <div>
          <div className="pt-2 pb-2 font-semibold">Optional Skills:</div>
          <div className="flex gap-1 flex-wrap">
            {listing.optionalSkills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="bg-white p-2 rounded-lg text-gray-900"
              >
                {skill}
              </span>
            ))}
            {listing.optionalSkills.length > 3 && (
              <span className="text-sm">{`+${
                listing.optionalSkills.length - 3
              } more`}</span>
            )}
          </div>
        </div>
        <div>
          <div className="pt-2 pb-2 font-semibold">Description:</div>
          <div className="line-clamp-4 mb-6">{listing.description}</div>
        </div>
        <Link
          to={`/joblistings/${listing._id}`}
          className="mx-auto text-sm bg-purple text-white rounded-lg p-2 font-semibold text-center hover:bg-dark-purple w-auto px-10"
        >
          View More Details
        </Link>
      </div>
    </div>
  );
};

export default SearchResultsCard;
