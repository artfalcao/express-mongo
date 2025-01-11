import express, { Express } from "express";
import connectDatabase from "./config/dbConnect";
import routes from "./routes";

const app: Express = express();
const port = process.env.PORT || 3000

// Routes
routes(app);

// MongoDB connection
const conn = await connectDatabase()
conn.on('error', (err) => {
  console.error("CONNECTION ERROR: ", err);
});

conn.once('open', () => {
  console.error("CONNECTED ON MONGO_DB SUCCESSFULY");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
