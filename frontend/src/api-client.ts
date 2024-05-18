import { LogInFormData } from "./pages/LogIn";
import { RegisterFormData } from "./pages/Register";
import {
  ApplicationFormData,
  JobListingSearchResponse,
  JobListingType,
  UserType,
} from "../../backend/src/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const fetchCurrentUser = async (): Promise<UserType> => {
  const response = await fetch(`${API_BASE_URL}/api/users/myaccount`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
};

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

export const fetchMyJobListingById = async (
  listingId: string
): Promise<JobListingType> => {
  const response = await fetch(`${API_BASE_URL}/api/jobs/${listingId}`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching job listings");
  }
  return response.json();
};

export const updateMyJobListingById = async (JobListingFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/jobs/${JobListingFormData.get("listingId")}`,
    {
      method: "PUT",
      body: JobListingFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update job listing");
  }

  return response.json();
};

export type SearchParams = {
  company?: string;
  location?: string;
  page?: string;
  essentialSkills?: string[];
  optionalSkills?: string[];
};

export const searchJobListing = async (
  searchParams: SearchParams
): Promise<JobListingSearchResponse> => {
  const queryParams = new URLSearchParams();
  queryParams.append("company", searchParams.company || "");
  queryParams.append("location", searchParams.location || "");
  queryParams.append("page", searchParams.page || "");

  searchParams.essentialSkills?.forEach((essentialSkill) =>
    queryParams.append("essentialSkills", essentialSkill)
  );

  searchParams.optionalSkills?.forEach((optionalSkill) =>
    queryParams.append("optionalSkills", optionalSkill)
  );
  const response = await fetch(
    `${API_BASE_URL}/api/joblistings/search?${queryParams}`
  );
  if (!response.ok) {
    throw new Error("Error fetching job listings");
  }
  return response.json();
};

export const fetchListings = async (): Promise<JobListingType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/joblistings?`);
  if (!response.ok) {
    throw new Error("Error fetching job listings");
  }
  return response.json();
};

export const fetchJobListingById = async (listingId: string) => {
  const response = await fetch(`${API_BASE_URL}/api/joblistings/${listingId}`);
  if (!response.ok) {
    throw new Error("Error fetching job listing");
  }
  return response.json();
};

export const submitApplication = async (formData: ApplicationFormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/joblistings/${formData.listingId}/applications`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Error submitting application");
  }
};

export const fetchMyApplications = async (): Promise<JobListingType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-applications`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Unable to fetch applications");
  }

  return response.json();
};
