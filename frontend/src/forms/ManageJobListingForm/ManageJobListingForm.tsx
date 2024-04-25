import { useForm, FormProvider } from "react-hook-form";
import DetailsSection from "./DetailsSection";

export type JobListingFormData = {
  jobTitle: string;
  location: string;
  salary: number;
  essentialSkills: string[];
  optionalSkills: string[];
  description: string;
};

const ManageJobListingForm = () => {
  const formMethods = useForm<JobListingFormData>();
  return (
    <FormProvider {...formMethods}>
      <form>
        <DetailsSection />
      </form>
    </FormProvider>
  );
};

export default ManageJobListingForm;
