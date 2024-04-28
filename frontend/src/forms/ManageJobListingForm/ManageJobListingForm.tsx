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

const ManageJobListingForm = () => {
  const formMethods = useForm<JobListingFormData>();
  return (
    <div className=" bg-body w-screen min-h-screen">
      <section className=" flex-grow">
        <div className="container mx-auto px-4 ">
          <FormProvider {...formMethods}>
            <form className="flex flex-col ">
              <DetailsSection />
              <EssentialTypeSection />
              <OptionalTypeSection />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-7  text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                >
                  Save
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
