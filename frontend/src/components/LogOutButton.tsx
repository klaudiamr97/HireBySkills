import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";

const LogOutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.logOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
    },
    onError: (error: Error) => {
      console.log("Error: Log out unsuccessful", error.message);
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <button
      onClick={handleClick}
      className="items-center px-5 w-full text-offwhite font-medium border border-purple rounded-xl focus:ring focus:ring-purple bg-purple hover:bg-dark-purple transition ease-in-out duration-200"
    >
      Log out
    </button>
  );
};
export default LogOutButton;
