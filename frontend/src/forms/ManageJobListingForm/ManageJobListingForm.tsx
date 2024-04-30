import { useForm, FormProvider } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import EssentialTypeSection from "./EssentialSkills";
import OptionalTypeSection from "./OptionalSkills";

export type JobListingFormData = {
  jobTitle: string;
  location: string;
  salary: number;
  essentialSkills: string[];
  optionalSkills: string[];
  description: string;
};

type Props = {
  onSave: (JobListingFormData: FormData) => void;
  isLoading: boolean;
};

const ManageJobListingForm = ({ onSave, isLoading }: Props) => {
  const formMethods = useForm<JobListingFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJson: JobListingFormData) => {
    console.log("Essential Skills:", formDataJson.essentialSkills);
    console.log("Optional Skills:", formDataJson.optionalSkills);
    console.log("Job Title:", formDataJson.jobTitle);
    console.log("Salary:", formDataJson.salary);
    console.log("Location:", formDataJson.location);

    const formData = new FormData();
    formData.append("jobTitle", formDataJson.jobTitle);
    formData.append("location", formDataJson.location);
    formData.append("salary", formDataJson.salary.toString());
    formData.append("description", formDataJson.description);
    formDataJson.essentialSkills.forEach((essentialSkill, index) => {
      formData.append(`essentialSkills[${index}]`, essentialSkill);
    });
    formDataJson.optionalSkills.forEach((optionalSkill, index) => {
      formData.append(`optionalSkills[${index}]`, optionalSkill);
    });
    onSave(formData);
  });
  return (
    <div className=" bg-body w-screen ">
      <section className=" flex flex-grow">
        <div className="container mx-auto px-4 ">
          <FormProvider {...formMethods}>
            <form className="flex flex-col " onSubmit={onSubmit}>
              <DetailsSection />
              <EssentialTypeSection />
              <OptionalTypeSection />
              <div className="flex justify-end">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="py-3 px-7  text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200 disabled:bg-dark-purple"
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </section>
    </div>
  );
};

export default ManageJobListingForm;
