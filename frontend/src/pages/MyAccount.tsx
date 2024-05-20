import { useQuery } from "react-query";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobListings from "../components/JobListings";
import MyApplications from "../components/Applications";
import * as apiClient from "../api-client";

const MyAccount = () => {
  const {
    data: currentUser,
    isLoading,
    isError,
  } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser);

  return (
    <div className="flex flex-col min-h-screen bg-body overflow-hidden">
      <Header />
      <section className="pt-16 flex-grow">
        {isLoading && <span>Loading user data...</span>}
        {isError && <span>Failed to load user data</span>}
        {currentUser && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">
                Welcome {currentUser.firstName} {currentUser.lastName}
              </h2>
            </div>
          </div>
        )}
        <MyApplications />
        <JobListings />
      </section>
      <Footer />
    </div>
  );
};

export default MyAccount;
