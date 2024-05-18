import mongoose from "mongoose";
import { ApplicationType, JobListingType } from "../shared/types";

const applicationSchema = new mongoose.Schema<ApplicationType>({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  cv: { type: String, required: true },
  cvName: { type: String, required: true },
  coverLetter: { type: String, required: false },
  coverLetterName: { type: String, required: false },
});
const jobListingSchema = new mongoose.Schema<JobListingType>({
  userId: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  essentialSkills: [{ type: String, required: true }],
  optionalSkills: [{ type: String, required: true }],
  description: { type: String, required: true },
  imageUrls: [{ type: String, required: false }],
  lastUpdated: { type: Date, required: true },
  applications: [applicationSchema],
});

const JobListing = mongoose.model<JobListingType>(
  "Job Listing",
  jobListingSchema
);
export default JobListing;
