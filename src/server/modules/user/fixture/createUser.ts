import User, { IUser } from "../UserModel";
import { getCounter } from "../../../../../test";
import { DeepPartial } from "../../../../../test/deepPartial";
import { getOrCreate } from "../../../../../test/getOrCreate";
import Team from "../../team/TeamModel";
import { createTeam } from "../../team/fixture/createTeam";

export const createUser = async (args: DeepPartial<IUser> = {}) => {
  const i = getCounter("user");

  let { team, ...payload } = args;

  if (team === undefined) {
    team = await getOrCreate(Team, createTeam);
  }

  return new User({
    name: `user#${i}`,
    username: `username${i}`,
    email: `user${i}@example.com`,
    password: `password#${i}`,
    team,
    ...payload,
  }).save();
};
