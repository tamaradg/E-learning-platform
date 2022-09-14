import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    userType: {
      type: [String],
      default: "student",
      required: true,
    },
    // correspond à l'id de l'utilisateur
    owner: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "users",

    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("users", userShema);
export default User;
