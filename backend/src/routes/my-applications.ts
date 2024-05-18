import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import JobListing from "../models/joblisting";
import { ApplicationType, JobListingType } from "../shared/types";

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const listings = await JobListing.find({
      "applications.userId": req.userId,
    });

    const results = listings.map((listing) => {
      const userApplications = listing.applications.filter(
        (application) => application.userId === req.userId
      );

      return {
        ...listing.toObject(),
        applications: userApplications,
      };
    });

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to fetch applications" });
  }
});

export default router;
