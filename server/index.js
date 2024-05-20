import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import jobApplicationRoutes from "./routes/jobApplications.js";

const app = express();

app.use(bodyParser.json({ limit: "70mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "70mb", extended: true }));

app.use(cors());

app.use("/posts", postRoutes);
app.use("/api/joblistings", jobApplicationRoutes);

const CONNECTION_URL = "your-mongodb-connection-string";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
