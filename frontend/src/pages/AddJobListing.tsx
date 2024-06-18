import { useMutation } from "react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ManageJobListingForm from "../forms/ManageJobListingForm/ManageJobListingForm";
import * as apiClient from "../api-client";

const AddJobListing = () => {
  const { mutate, isLoading } = useMutation(apiClient.addMyJobListing, {
    onSuccess: () => {
      console.log("Job listing saved!");
      alert("Job listing saved!");
    },
    onError: () => {
      console.log("Error saving Job Listing");
      alert("Error adding job listing");
    },
  });
  const handleSave = (JobListingFormData: FormData) => {
    mutate(JobListingFormData);
  };
  return (
    <div className="overflow-hidden bg-body flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mb-5">
        <ManageJobListingForm onSave={handleSave} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};
export default AddJobListing;
