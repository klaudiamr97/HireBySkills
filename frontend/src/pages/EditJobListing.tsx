import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../../src/api-client";
import ManageJobListingForm from "../forms/ManageJobListingForm/ManageJobListingForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditJobListing = () => {
  const { listingId } = useParams();

  const { data: listing } = useQuery(
    "fetchMyJobListingById",
    () => apiClient.fetchMyJobListingById(listingId || ""),
    {
      enabled: !!listingId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyJobListingById, {
    onSuccess: () => {
      console.log("Job listing updated!");
      alert("Job listing updated!");
    },
    onError: () => {
      console.log("Job listing update unsuccessful");
      alert("Error updating job listing");
    },
  });

  const handleSave = (JobListingFormData: FormData) => {
    mutate(JobListingFormData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-body overflow-hidden ">
      <Header />
      <section className="pt-28 flex-grow">
        <ManageJobListingForm
          listing={listing}
          onSave={handleSave}
          isLoading={isLoading}
        />
      </section>
      <Footer />
    </div>
  );
};
export default EditJobListing;
