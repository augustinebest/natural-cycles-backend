import { Document } from "mongoose";

export interface IUser extends Document {
  phoneNumber: string;
  name: string;
  email: string;
}
