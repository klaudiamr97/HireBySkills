import { useForm, FormProvider } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import EssentialTypeSection from "./EssentialSkills";
import OptionalTypeSection from "./OptionalSkills";
import { JobListingType } from "../../../../backend/src/shared/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type JobListingFormData = {
  jobTitle: string;
  company: string;
  location: string;
  salary: number;
  essentialSkills: string[];
  optionalSkills: string[];
  description: string;
};

type Props = {
  listing?: JobListingType;
  onSave: (formData: FormData) => Promise<void>;
  isLoading: boolean;
};

const ManageJobListingForm = ({ onSave, isLoading, listing }: Props) => {
  const navigate = useNavigate();
  const formMethods = useForm<JobListingFormData>({
    defaultValues: {
      jobTitle: "",
      company: "",
      location: "",
      salary: 0,
      essentialSkills: [],
      optionalSkills: [],
      description: "",
    },
  });
  const { handleSubmit, reset } = formMethods;

  const [promptMessage, setPromptMessage] = useState<string>("");

  useEffect(() => {
    if (listing) {
      reset(listing);
    }
  }, [listing, reset]);

  const onSubmit = handleSubmit(async (formDataJson: JobListingFormData) => {
    const formData = new FormData();
    if (listing) {
      formData.append("listingId", listing._id);
    }
    formData.append("jobTitle", formDataJson.jobTitle);
    formData.append("company", formDataJson.company);
    formData.append("location", formDataJson.location);
    formData.append("salary", formDataJson.salary.toString());
    formData.append("description", formDataJson.description);
    formDataJson.essentialSkills.forEach((essentialSkill, index) => {
      formData.append(`essentialSkills[${index}]`, essentialSkill);
    });
    formDataJson.optionalSkills.forEach((optionalSkill, index) => {
      formData.append(`optionalSkills[${index}]`, optionalSkill);
    });

    try {
      await onSave(formData);
      setPromptMessage("Job successfully added");
      reset(); // Reset the form after successful submission
      navigate(`/my-account`);
    } catch (error) {
      console.error("Error adding job listing:", error);
      setPromptMessage("Error adding job listing");
    }
  });

  return (
    <div className="bg-body w-screen">
      <section className="flex flex-grow">
        <div className="container mx-auto px-4">
          <FormProvider {...formMethods}>
            <form className="flex flex-col" onSubmit={onSubmit}>
              <DetailsSection />
              <EssentialTypeSection
                essentialSkills={listing ? listing.essentialSkills : []}
              />
              <OptionalTypeSection
                optionalSkills={listing ? listing.optionalSkills : []}
              />
              <div className="flex justify-end">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="py-3 px-7 text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </FormProvider>
          {promptMessage && (
            <div className="mt-4 text-center text-lg text-purple">
              {promptMessage}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ManageJobListingForm;
