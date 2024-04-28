import express, { Request, Response } from "express";
import JobListing, { JobListingType } from "../models/joblisting";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  [
    body("jobTitle").notEmpty().withMessage("Job title is required"),
    body("location").notEmpty().withMessage("Location is required"),
    body("salary")
      .notEmpty()
      .isNumeric()
      .withMessage("Salary title is required and must be a number"),
    body("essentialSkills")
      .notEmpty()
      .isArray()
      .withMessage("Essential skills are required"),
    body("optionalSkills")
      .notEmpty()
      .isArray()
      .withMessage("Optional Skills are required"),
    body("description").notEmpty().withMessage("Description is required"),
  ],
  async (req: Request, res: Response) => {
    try {
      const newListing: JobListingType = req.body;

      newListing.userId = req.userId;

      const listing = new JobListing(newListing);
      await listing.save();
      res.status(201).send(listing);
    } catch (error) {
      console.log("Error creating job listing: ", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

export default router;
