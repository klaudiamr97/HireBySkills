import mongoose from "mongoose";
import { JobListingType } from "../shared/types";

const jobListingSchema = new mongoose.Schema<JobListingType>({
  userId: { type: String, required: true },
  jobTitle: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  essentialSkills: [{ type: String, required: true }],
  optionalSkills: [{ type: String, required: true }],
  description: { type: String, required: true },
  imageUrls: [{ type: String, required: false }],
  lastUpdated: { type: Date, required: true },
});

const JobListing = mongoose.model<JobListingType>(
  "Job Listing",
  jobListingSchema
);
export default JobListing;
