import { LogInFormData } from "./pages/LogIn";
import { RegisterFormData } from "./pages/Register";
import { JobListingType } from "../../backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const logIn = async (formData: LogInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message);
  }
  return body;
};

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Token invalid");
  }
  return response.json();
};

export const logOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error during sgin out");
  }
};

export const addMyJobListing = async (JobListingFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/jobs`, {
    credentials: "include",
    method: "POST",
    body: JobListingFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add job listing");
  }

  return response.json();
};

export const fetchMyJobListings = async (): Promise<JobListingType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/jobs`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching job listings");
  }

  return response.json();
};
