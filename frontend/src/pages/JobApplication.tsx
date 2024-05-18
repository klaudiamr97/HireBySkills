import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ApplicationForm from "../forms/ApplicationForm/ApplicationForm";
import Hero from "../components/Hero";
import Collaboration from "../assets/Collaborate .png";
import { useParams } from "react-router-dom";

const JobApplication = () => {
  const { listingId } = useParams<{ listingId: string }>();

  const { data: listing, isLoading: isListingLoading } = useQuery(
    ["fetchJobListingById", listingId],
    () => apiClient.fetchJobListingById(listingId!),
    {
      enabled: !!listingId,
    }
  );

  const { data: currentUser, isLoading: isUserLoading } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  if (isListingLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  if (!listingId || !currentUser) {
    return <div>Error: Missing required data</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Hero
        title="Unlock Your Potential
        Find the Perfect Career Match Today!"
        imgSrc={Collaboration}
      />
      <main className="flex-grow py-8">
        <section className="container bg-purple mx-auto grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="rounded bg-white border border-dark-purple p-4">
            <h3 className="text-lg font-bold mb-4">Job Details Summary</h3>
            <div>
              <p>
                <strong>Job Title:</strong> {listing.jobTitle}
              </p>
              <p>
                <strong>Company:</strong> {listing.company}
              </p>
              <p>
                <strong>Location:</strong> {listing.location}
              </p>
              <div>
                <strong>Essential Skills:</strong>
                <ul>
                  {listing.essentialSkills.map(
                    (skill: string, index: number) => (
                      <li
                        className="inline-block bg-purple px-3 py-1 rounded text-offwhite cursor-pointer mr-2 mb-2"
                        key={index}
                      >
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <strong>Optional Skills:</strong>
                <ul>
                  {listing.optionalSkills.map(
                    (skill: string, index: number) => (
                      <li
                        className="inline-block bg-purple px-3 py-1 rounded text-offwhite cursor-pointer mr-2 mb-2"
                        key={index}
                      >
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded bg-purple p-4">
            <ApplicationForm
              currentUser={currentUser}
              listingId={listingId}
              jobTitle={listing.jobTitle}
              company={listing.company}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplication;
