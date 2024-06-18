import { useForm } from "react-hook-form";
import { UserType } from "../../../../backend/src/shared/types";
import * as apiClient from "../../api-client";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  currentUser: UserType;
  listingId: string;
  jobTitle: string;
  company: string;
};

export type ApplicationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  cv: FileList;
  coverLetter?: FileList;
  jobTitle: string;
  company: string;
  location: string;
  listingId: string;
  cvName: string;
  coverLetterName?: string;
};

const ApplicationForm = ({ currentUser }: Props) => {
  const navigate = useNavigate();
  const { listingId, jobTitle, company, location } = useParams<{
    listingId: string;
    jobTitle: string;
    company: string;
    location: string;
  }>();

  const { handleSubmit, register, reset } = useForm<ApplicationFormData>({
    defaultValues: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      jobTitle: jobTitle!,
      company: company!,
      location: location!,
      listingId: listingId!,
    },
  });

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (formData: ApplicationFormData) => {
    try {
      const cvFile = formData.cv[0];
      const cvBase64 = await convertFileToBase64(cvFile);
      const cvBase64Content = cvBase64.split(",")[1];

      let coverLetterBase64Content;
      let coverLetterName;
      if (formData.coverLetter && formData.coverLetter.length > 0) {
        const coverLetterFile = formData.coverLetter[0];
        const coverLetterBase64 = await convertFileToBase64(coverLetterFile);
        coverLetterBase64Content = coverLetterBase64.split(",")[1];
        coverLetterName = coverLetterFile.name;
      }

      const applicationData = {
        listingId: listingId!,
        jobTitle: jobTitle!,
        company: company!,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        cv: cvBase64Content,
        cvName: cvFile.name,
        coverLetter: coverLetterBase64Content,
        coverLetterName: coverLetterName,
      };

      await apiClient.submitApplication(applicationData);

      console.log("Application successful");
      alert("Application Successful");
      reset(); // Reset the form on successful submission
      navigate(`/my-account`);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        `Error submitting application: ${
          error instanceof Error ? error.message : "Unknown error occurred."
        }`
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 bg-white rounded-lg border border-dark-purple p-5"
    >
      <span className="text-3xl font-bold">Confirm Your Details</span>
      <div className="grid grid-cols-2 gap-6">
        <label className="text-black-tint text-sm font-bold flex-1">
          First Name
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-black-tint bg-offwhite font-normal"
            type="text"
            readOnly
            disabled
            {...register("firstName")}
          />
        </label>
        <label className="text-black-tint text-sm font-bold flex-1">
          Last Name
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-black-tint bg-offwhite font-normal"
            type="text"
            readOnly
            disabled
            {...register("lastName")}
          />
        </label>
        <label className="text-black-tint text-sm font-bold flex-1">
          Email
          <input
            className="mt-1 border rounded w-full py-2 px-3 text-black-tint bg-offwhite font-normal"
            type="text"
            readOnly
            disabled
            {...register("email")}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <label className="flex flex-col w-full">
          CV Upload
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full p-1 focus:ring focus:ring-indigo-300 font-bold"
            {...register("cv", { required: true })}
          />
        </label>
        <label className="flex flex-col w-full">
          Cover Letter (Optional)
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full p-1 focus:ring focus:ring-indigo-300 font-bold"
            {...register("coverLetter")}
          />
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-3 px-9 text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplicationForm;
