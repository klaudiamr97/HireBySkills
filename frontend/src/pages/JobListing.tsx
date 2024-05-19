import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as apiClient from "./../api-client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CandidateInfoForm from "../forms/UserInfoForm/CandidateInfoForm";

const JobListing = () => {
  const { listingId } = useParams();

  const { data: listing } = useQuery(
    "fetchJobListingById",
    () => apiClient.fetchJobListingById(listingId || ""),
    {
      enabled: !!listingId,
    }
  );

  if (!listing) {
    return <></>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-body overflow-hidden">
      <Header />
      <main className="flex-grow">
        <section className="pt-12">
          <div className="container px-4 mx-auto p-8 rounded-xl">
            <h2 className="mb-4 text-3xl font-bold font-heading tracking-px-n leading-none">
              {listing.jobTitle}
            </h2>
            <div className="mb-6">
              <p className="text-lg text-gray-700 font-medium">
                {listing.company}
              </p>
              <p className="text-lg text-gray-600">{listing.location}</p>
              <p className="text-lg text-gray-600">£{listing.salary}</p>
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold font-heading tracking-px-n leading-none">
              Essential Skills
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {listing.essentialSkills.map((essentialSkill: string) => (
                <div
                  key={essentialSkill}
                  className="bg-purple px-3 py-2 rounded text-offwhite cursor-pointer"
                >
                  {essentialSkill}
                </div>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold font-heading tracking-px-n leading-none">
              Optional Skills
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {listing.optionalSkills.map((optionalSkill: string) => (
                <div
                  key={optionalSkill}
                  className="bg-purple px-3 py-2 rounded text-offwhite cursor-pointer"
                >
                  {optionalSkill}
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3 bg-white pb-12 rounded-xl">
                <h4 className="my-10 mx-11 pt-6 text-3xl font-bold font-heading leading-snug">
                  Description
                </h4>
                <div className="mx-6 -mb-4 md:mb-0">
                  <p className="mx-5 mb-6 px-4 py-3.5 text-gray-400 bg-offwhite rounded-lg whitespace-pre-line">
                    {listing.description}
                  </p>
                </div>
              </div>
              <div className="md:w-1/3">
                <CandidateInfoForm listingId={listing._id} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobListing;
