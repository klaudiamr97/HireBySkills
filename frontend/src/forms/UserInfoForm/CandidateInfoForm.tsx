import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../../api-client";

type Props = {
  listingId: string;
};

type CandidateInfoFormData = {
  listingId: string;
  firstName: string;
  lastName: string;
  location: string;
  email: string;
};

const CandidateInfoForm = ({ listingId }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const locationURL = useLocation();

  const { data: currentUser, isSuccess } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser,
    {
      enabled: isLoggedIn,
    }
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CandidateInfoFormData>({
    defaultValues: {
      location: search.location,
    },
  });

  useEffect(() => {
    if (isSuccess && currentUser) {
      setValue("firstName", currentUser.firstName);
      setValue("lastName", currentUser.lastName);
      setValue("email", currentUser.email);
    }
  }, [isSuccess, currentUser, setValue]);

  useEffect(() => {
    const savedData = localStorage.getItem("candidateInfoFormData");
    if (savedData) {
      const formData = JSON.parse(savedData) as Omit<
        CandidateInfoFormData,
        "listingId"
      >;
      for (const [key, value] of Object.entries(formData)) {
        setValue(key as keyof CandidateInfoFormData, value);
      }
    }
  }, [setValue]);

  const saveFormDataToLocalStorage = (data: CandidateInfoFormData) => {
    const { firstName, lastName, location, email } = data;
    localStorage.setItem(
      "candidateInfoFormData",
      JSON.stringify({ firstName, lastName, location, email })
    );
  };

  const clearFormDataFromLocalStorage = () => {
    localStorage.removeItem("candidateInfoFormData");
  };

  const onSignInClick: SubmitHandler<CandidateInfoFormData> = (data) => {
    saveFormDataToLocalStorage(data);
    search.saveSearchValues("", data.location);
    navigate("/login", { state: { from: locationURL } });
  };

  const onSubmit: SubmitHandler<CandidateInfoFormData> = (data) => {
    saveFormDataToLocalStorage(data);
    search.saveSearchValues("", data.location);

    const formData = {
      listingId: listingId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };

    // Log formData to the console instead of submitting to an API
    console.log("Form Data:", formData);

    // Navigate to a success page or perform any other actions
    clearFormDataFromLocalStorage();
    navigate(`/joblistings/${listingId}/application`);
  };

  return (
    <div className="flex flex-col p-4 bg-purple rounded text-offwhite gap-4">
      <form
        onSubmit={
          isLoggedIn ? handleSubmit(onSubmit) : handleSubmit(onSignInClick)
        }
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col w-full">
            First name
            <input
              className="w-full text-black-tint p-1 focus:ring focus:ring-indigo-300 font-bold"
              type="text"
              {...register("firstName", {
                required: "This field is required",
              })}
            />
            {errors.firstName && (
              <span className="text-red font-medium">
                {errors.firstName.message}
              </span>
            )}
          </label>
          <label className="flex flex-col w-full">
            Last name
            <input
              className="w-full p-1 text-black-tint focus:ring focus:ring-indigo-300 font-bold"
              type="text"
              {...register("lastName", {
                required: "This field is required",
              })}
            />
            {errors.lastName && (
              <span className="text-red font-medium">
                {errors.lastName.message}
              </span>
            )}
          </label>
          <label className="flex flex-col mb-5 w-full">
            Email
            <input
              type="email"
              className="w-full p-1 text-black-tint focus:ring focus:ring-indigo-300 font-bold"
              {...register("email", {
                required: "This field is required",
              })}
            />
            {errors.email && (
              <span className="text-red font-medium">
                {errors.email.message}
              </span>
            )}
          </label>
          <div className="flex justify-end">
            {isLoggedIn ? (
              <button
                type="submit"
                className="py-3 px-9 text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
              >
                Apply
              </button>
            ) : (
              <button
                type="submit"
                className="py-3 px-9 text-offwhite font-medium border border-black-tint rounded-xl focus:ring focus:ring-black-tint bg-black-tint hover:bg-body hover:text-black-tint transition ease-in-out duration-200"
              >
                Log in to Apply
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidateInfoForm;
