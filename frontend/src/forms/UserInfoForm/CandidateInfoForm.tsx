import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchContext } from "../../contexts/SearchContext";
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

type Props = {
  listingId: string;
};

type CandidateInfoFormData = {
  listingId: string;
  name: string;
  surname: string;
  location: string;
  email: string;
  cv: FileList; // Changed to FileList to handle file input
};

const CandidateInfoForm = ({ listingId }: Props) => {
  const search = useSearchContext();
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CandidateInfoFormData>({
    defaultValues: {
      location: search.location,
    },
  });

  const location = watch("location");

  const onSignInClick: SubmitHandler<CandidateInfoFormData> = (data) => {
    search.saveSearchValues("", data.location);
    navigate("/login", { state: { from: location } });
  };

  const onSubmit: SubmitHandler<CandidateInfoFormData> = (data) => {
    search.saveSearchValues("", data.location);

    const file = data.cv[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const cvBase64 = reader.result as string;
      const formData = {
        listingId: listingId,
        name: data.name,
        surname: data.surname,
        email: data.email,
        cv: cvBase64.split(",")[1], // Remove metadata prefix from Base64 string
        cvName: file.name,
      };

      // Log formData to the console instead of submitting to an API
      console.log("Form Data:", formData);

      // Navigate to a success page or perform any other actions
      navigate(`/joblistings/${listingId}/application`);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      console.error("No file selected");
    }
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
              {...register("name", {
                required: "This field is required",
              })}
            />
            {errors.name && (
              <span className="text-red font-medium">
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="flex flex-col w-full">
            Last name
            <input
              className="w-full p-1 text-black-tint focus:ring focus:ring-indigo-300 font-bold"
              type="text"
              {...register("surname", {
                required: "This field is required",
              })}
            />
            {errors.surname && (
              <span className="text-red font-medium">
                {errors.surname.message}
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
          <label className="flex flex-col w-full">
            CV Upload
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full p-1 focus:ring focus:ring-indigo-300 font-bold"
              {...register("cv", {
                required: "This field is required",
              })}
            />
            {errors.cv && (
              <span className="text-red font-medium">{errors.cv.message}</span>
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
                Sign in to Apply
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidateInfoForm;
