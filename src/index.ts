import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/alura-books";
// mongoose
//   .connect(mongoURI, {
//     dbName: "mydatabase",
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
