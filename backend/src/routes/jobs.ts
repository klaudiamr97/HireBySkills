import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";
import JobListing from "../models/joblisting";
import { JobListingType } from "../shared/types";
import verifyToken from "../middleware/auth";
import { body } from "express-validator";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

router.post(
  "/",
  verifyToken,
  [
    body("jobTitle").notEmpty().withMessage("Job title is required"),
    body("company").notEmpty().withMessage("Company is required"),
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

      const imageUrls = await uploadImages(imageFiles);

      newListing.imageUrls = imageUrls;
      newListing.lastUpdated = new Date();
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

router.put(
  "/:listingId",
  verifyToken,
  upload.array("imageFiles"),
  async (req: Request, res: Response) => {
    try {
      const updatedListing: JobListingType = req.body;
      updatedListing.lastUpdated = new Date();
      const listing = await JobListing.findOneAndUpdate(
        {
          _id: req.params.listingId,
          userId: req.userId,
        },
        updatedListing,
        { new: true }
      );

      if (!listing) {
        return res.status(404).json({ message: "Hotel not found" });
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      listing.imageUrls = [
        ...updatedImageUrls,
        ...(updatedListing.imageUrls || []),
      ];

      await listing.save();
      res.status(201).json(listing);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export default router;
