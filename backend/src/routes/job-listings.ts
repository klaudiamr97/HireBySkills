import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import JobListing, { JobListingType } from "../models/joblisting";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});

// api/job-listings
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
  upload.array("imageFiles", 1),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newListing: JobListingType = req.body;

      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "dat:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
      });
      const imageUrls = await Promise.all(uploadPromises);
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
