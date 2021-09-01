import mongoose, { Document, Model } from "mongoose";

const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: "name is required",
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
  createdAt: Date;
  updatedAt: Date;
}

const TeamModel: Model<ITeam> = mongoose.model("Team", teamSchema);

export default TeamModel;
