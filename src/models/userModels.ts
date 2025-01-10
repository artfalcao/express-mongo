import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthday: { type: String, required: true },
  address:  {
    street: { type: String, required: true },
    number: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: false },
    country: { type: String, required: true },
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true }
});

const User = mongoose.model("User", userSchema);

export default User;
