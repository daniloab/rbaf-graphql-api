import mongoose, { Document, Model, Types } from "mongoose";
import bcrypt from "bcrypt";

import { ITeam } from "../team/TeamModel";

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
      required: false,
    },
    email: {
      type: String,
      required: "email is required",
    },
    password: {
      type: String,
      required: "password is required",
    },
    team: {
      type: ObjectId,
      ref: "Team",
      required: true,
    },
    kind: {
      type: [String],
      default: [],
      required: false,
    },
  },
  {
    collection: "User",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  // @todo relate with ITeam interface
  team: string;
  kind: string[];
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
  team: Types.ObjectId | ITeam;
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

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
