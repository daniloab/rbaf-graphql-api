import mongoose, { Document, Model } from "mongoose";

const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: "name is required",
    },
    domainName: {
      type: String,
      description: "The name of the domain to be used on application",
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    collection: "Team",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export interface ITeam extends Document {
  name: string;
  domainName: string;
  createdAt: Date;
  updatedAt: Date;
}

const TeamModel: Model<ITeam> = mongoose.model("Team", teamSchema);

export default TeamModel;
