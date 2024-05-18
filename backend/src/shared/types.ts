export type JobListingType = {
  _id: string;
  userId: string;
  jobTitle: string;
  company: string;
  location: string;
  salary: number;
  essentialSkills: string[];
  optionalSkills: string[];
  description: string;
  imageUrls: string[];
  lastUpdated: Date;
  applications: ApplicationType[];
};

export type UserType = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type JobListingSearchResponse = {
  data: JobListingType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
export type ApplicationFormData = {
  listingId: string;
  jobTitle: string;
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  cv: string;
  cvName: string;
  coverLetter?: string;
};

export type ApplicationType = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  cv: string;
  cvName: string;
  coverLetter?: string;
  coverLetterName?: string;
};
