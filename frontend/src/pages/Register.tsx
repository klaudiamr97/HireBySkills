import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      console.log("Registration failed", error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="py-16 xl:pb-56 body overflow-hidden flex-grow">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-md mx-auto">
            <h2 className="mb-4 text-3xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-tight">
              Join for free
            </h2>
            <p className="mb-12  text-lg black-font leading-normal">
              Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor
              to the condim entum.
            </p>
            <form onSubmit={onSubmit}>
              <label className="block mb-5">
                {" "}
                <input
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                ></input>
                {errors.firstName && (
                  <span className="text-red font-medium">
                    {errors.firstName.message}
                  </span>
                )}
              </label>
              <label className="block mb-5">
                {" "}
                <input
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                ></input>
                {errors.lastName && (
                  <span className="text-red font-medium">
                    {errors.lastName.message}
                  </span>
                )}
              </label>
              <label className="block mb-5">
                {" "}
                <input
                  type="email"
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "This field is required",
                  })}
                ></input>
                {errors.email && (
                  <span className="text-red font-medium">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <label className="block mb-5">
                {" "}
                <input
                  type="password"
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="Password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                ></input>
                {errors.password && (
                  <span className="text-red font-medium">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="block mb-5">
                {" "}
                <input
                  type="password"
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "This field is required";
                      } else if (watch("password") !== val) {
                        return "Your passwords do not match";
                      }
                    },
                  })}
                ></input>
                {errors.confirmPassword && (
                  <span className="text-red font-medium">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
              <span>
                <button
                  className="mb-8 py-4 px-9 w-full text-off-white font-semibold border border-purple rounded-xl shadow-2xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                  type="submit"
                >
                  Create Account
                </button>
              </span>

              <p className="font-medium">
                <span>Already have an account? </span>
                <Link className="text-purple hover:text-indigo-700" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
