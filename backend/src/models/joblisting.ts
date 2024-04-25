import mongoose from "mongoose";

export type JobListingType = {
  _id: string;
  userId: string;
  jobTitle: string;
  location: string;
  salary: number;
  essentialSkills: string[];
  optionalSkills: string[];
  description: string;
};

const jobListingSchema = new mongoose.Schema<JobListingType>({
  userId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  essentialSkills: [{ type: String, required: true }],
  optionalSkills: [{ type: String, required: true }],
  description: { type: String, required: true },
});

const JobListing = mongoose.model<JobListingType>(
  "Job Listing",
  jobListingSchema
);
export default JobListing;
