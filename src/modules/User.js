import { Mongoose, Schema } from "mongoose";

export const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
    unique: [true, "Please enter unique username"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    trim: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    trim: true,
  },
  lastLogin: {
    type: Date,
    trim: true,
  },
});


const User = Mongoose.models.User || Mongoose.model("User", UserSchema);
export default User;