import User, { IUser } from "../UserModel";
import { getCounter } from "../../../../../test";
import { DeepPartial } from "../../../../../test/deepPartial";

export const createUser = (args: DeepPartial<IUser> = {}) => {
  const i = getCounter("user");

  return new User({
    name: `user#${i}`,
    username: `username${i}`,
    email: `user${i}@example.com`,
    password: `password#${i}`,
    ...args,
  }).save();
};
