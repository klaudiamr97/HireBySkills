// import express, { Request, Response } from "express";
// import JobListing from "../models/joblisting";
// import { JobListingType } from "../shared/types";
// import verifyToken from "../middleware/auth";
// import { body } from "express-validator";

// const router = express.Router();

// router.post(
//   "/",
//   verifyToken,
//   [
//     body("jobTitle").notEmpty().withMessage("Job title is required"),
//     body("location").notEmpty().withMessage("Location is required"),
//     body("salary")
//       .notEmpty()
//       .isNumeric()
//       .withMessage("Salary title is required and must be a number"),
//     body("essentialSkills")
//       .notEmpty()
//       .isArray()
//       .withMessage("Essential skills are required"),
//     body("optionalSkills")
//       .notEmpty()
//       .isArray()
//       .withMessage("Optional Skills are required"),
//     body("description").notEmpty().withMessage("Description is required"),
//   ],
//   async (req: Request, res: Response) => {
//     try {
//       const newListing: JobListingType = req.body;

//       newListing.userId = req.userId;

//       const listing = new JobListing(newListing);
//       await listing.save();
//       res.status(201).send(listing);
//     } catch (error) {
//       console.log("Error creating job listing: ", error);
//       res.status(500).json({ message: "Something went wrong" });
//     }
//   }
// );

// export default router;
import express, { Request, Response } from "express";
import JobListing from "../models/joblisting";
import { JobListingType } from "../shared/types";
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

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const listings = await JobListing.find({ userId: req.userId });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job listings" });
  }
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  const id = req.params.id.toString();
  try {
    const listing = await JobListing.findOne({
      _id: id,
      userId: req.userId,
    });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job listing" });
  }
});

router.put("/:listingId", verifyToken, async (req: Request, res: Response) => {
  try {
    const updatedListing: JobListingType = req.body;
    const listing = await JobListing.findOneAndUpdate(
      {
        _id: req.params.listingId,
        userId: req.userId,
      },
      updatedListing,
      { new: true }
    );

    if (!listing) {
      return res.status(404).json({ message: "Job listing not found" });
    }

    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
