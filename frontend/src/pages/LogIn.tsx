import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type LogInFormData = {
  email: string;
  password: string;
};

const LogIn = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LogInFormData>();
  const mutation = useMutation(apiClient.logIn, {
    onSuccess: async () => {
      console.log("User has been logged in");
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      console.log("Log in failed", error.message);
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
            <h2 className="mb-16 text-3xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-tight">
              Log in to your account
            </h2>

            <form onSubmit={onSubmit}>
              <label className="block mb-5">
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

              <span>
                <button
                  className="mb-8 py-4 px-9 w-full text-off-white font-semibold border border-purple rounded-xl shadow-2xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
                  type="submit"
                >
                  Log in
                </button>
              </span>

              <p className="font-medium">
                <span>Not registered? </span>
                <Link
                  className="text-purple hover:text-indigo-700"
                  to="/register"
                >
                  Create an account here
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
export default LogIn;
