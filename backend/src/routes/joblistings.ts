import express, { Request, Response } from "express";
import JobListing from "../models/joblisting";
import { JobListingSearchResponse } from "../shared/types";

const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
  try {
    const query = constructSearchQuery(req.query);
    const pageSize = 5;
    const pageNumber = parseInt(
      req.query.page ? req.query.page.toString() : "1"
    );
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
const constructSearchQuery = (queryParams: {
  company?: string;
  location?: string;
}) => {
  let constructedQuery: any = {};

  if (queryParams.company) {
    constructedQuery.company = new RegExp(queryParams.company, "i");
  }

  if (queryParams.location) {
    constructedQuery.location = new RegExp(queryParams.location, "i");
  }

  return constructedQuery;
};

export default router;
