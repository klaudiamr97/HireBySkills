import express, { Request, Response } from "express";
import JobListing from "../models/joblisting";
import { ApplicationType, JobListingSearchResponse } from "../shared/types";
import { param, validationResult } from "express-validator";
import verifyToken from "../middleware/auth";
import mongoose from "mongoose";

const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
  try {
    const query = constructSearchQuery(
      req.query as {
        company?: string;
        location?: string;
        essentialSkills?: string[];
        optionalSkills?: string[];
      }
    );

    const pageSize = 5;
    const pageNumber = parseInt(req.query.page?.toString() || "1");
    const skip = (pageNumber - 1) * pageSize;
    const joblistings = await JobListing.find(query).skip(skip).limit(pageSize);

    const total = await JobListing.countDocuments(query);

    const response: JobListingSearchResponse = {
      data: joblistings,
      pagination: {
        total,
        page: pageNumber,
        pages: Math.ceil(total / pageSize),
      },
    };
    res.json(response);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get(
  "/:id",
  [param("id").notEmpty().withMessage("Job listing ID is required")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id.toString();
    try {
      const listing = await JobListing.findById(id);
      res.json(listing);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching job listing" });
    }
  }
);

router.post(
  "/:listingId/applications",
  verifyToken,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newApplication: ApplicationType = {
        _id: new mongoose.Types.ObjectId().toString(),
        userId: req.userId as string,
        ...req.body,
      };

      const listing = await JobListing.findOneAndUpdate(
        { _id: req.params.listingId },
        { $push: { applications: newApplication } },
        { new: true }
      );

      if (!listing) {
        return res.status(404).json({ message: "Job listing not found" });
      }

      res.status(201).json({ message: "Application submitted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

const constructSearchQuery = (queryParams: {
  company?: string;
  location?: string;
  essentialSkills?: string[];
  optionalSkills?: string[];
}): Record<string, unknown> => {
  let constructedQuery: Record<string, unknown> = {};

  if (queryParams.company) {
    constructedQuery.company = new RegExp(queryParams.company, "i");
  }

  if (queryParams.location) {
    constructedQuery.location = new RegExp(queryParams.location, "i");
  }
  if (queryParams.essentialSkills) {
    constructedQuery.essentialSkills = {
      $all: Array.isArray(queryParams.essentialSkills)
        ? queryParams.essentialSkills
        : [queryParams.essentialSkills],
    };
  }
  if (queryParams.optionalSkills) {
    constructedQuery.optionalSkills = {
      $all: Array.isArray(queryParams.optionalSkills)
        ? queryParams.optionalSkills
        : [queryParams.optionalSkills],
    };
  }

  return constructedQuery;
};

export default router;
