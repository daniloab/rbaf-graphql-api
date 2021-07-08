import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";

const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: "name is required",
    },
    username: {
      type: String,
      required: "name is required",
    },
    email: {
      type: String,
      required: "name is required",
    },
    password: {
      type: String,
      required: "name is required",
    },
    team: {
      type: ObjectId,
      ref: "Team",
    },
  },
  { timestamps: true }
);

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  // @todo relate with ITeam interface
  team: string;
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
  createdAt: Date;
  updatedAt: Date;
}

UserSchema.methods = {
  authenticate(plainTextPassword) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  encryptPassword(password) {
    return bcrypt.hashSync(password, 8);
  },
};

export default mongoose.model("User", UserSchema);
