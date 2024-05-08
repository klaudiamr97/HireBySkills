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
