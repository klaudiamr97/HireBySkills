export type JobListingType = {
  _id: string;
  userId: string;
  jobTitle: string;
  location: string;
  salary: number;
  essentialSkills: string[];
  optionalSkills: string[];
  description: string;
  imageUrls: string[];
  lastUpdated: Date;
};
