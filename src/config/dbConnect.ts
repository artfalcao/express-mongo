import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/alura-books";

async function connectDatabase() {
  mongoose
  .connect(mongoURI, {
    dbName: "alura-books",
  });

  return mongoose.connection;
}

export default connectDatabase;
