import { Schema, model } from "mongoose";
import { IUser } from "../utils/user.interface";

const UserSchema = new Schema(
  {
    phoneNumber: { type: String, unique: true, index: true },
    name: { type: String },
    email: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const User = model<IUser>("user", UserSchema);
