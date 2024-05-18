import { useFormContext } from "react-hook-form";
import { JobListingFormData } from "./ManageJobListingForm";

const JobListingDetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<JobListingFormData>();

  return (
    <section className="pt-28  w-full overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-5">
          <label className="block mb-5">
            Job Title
            <div className="flex">
              <input
                type="text"
                className="px-4 py-3.5 w-1/2 text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                {...register("jobTitle", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors.jobTitle && (
              <span className="text-red font-medium">
                {errors.jobTitle.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex gap-4">
          <label className="block mb-5">
            Company
            <div className="flex">
              <input
                type="text"
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                {...register("company", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors.company && (
              <span className="text-red font-medium">
                {errors.company.message}
              </span>
            )}
          </label>
          <label className="block mb-5">
            Location
            <div className="flex">
              <input
                type="text"
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                {...register("location", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors.location && (
              <span className="text-red font-medium">
                {errors.location.message}
              </span>
            )}
          </label>

          <label className="block mb-5">
            Salary
            <div className="flex">
              <input
                type="number"
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                {...register("salary", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors.salary && (
              <span className="text-red font-medium">
                {errors.salary.message}
              </span>
            )}
          </label>
        </div>
        <label className="block mb-5">
          Description
          <div className="flex">
            <textarea
              rows={10}
              className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              {...register("description", {
                required: "This field is required",
              })}
            />
          </div>
          {errors.description && (
            <span className="text-red font-medium">
              {errors.description.message}
            </span>
          )}
        </label>
      </div>
    </section>
  );
};

export default JobListingDetailsSection;
