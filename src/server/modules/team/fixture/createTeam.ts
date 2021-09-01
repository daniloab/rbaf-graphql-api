import Team, { ITeam } from "../TeamModel";
import { getCounter } from "../../../../../test";
import { DeepPartial } from "../../../../../test/deepPartial";

export const createTeam = (args: DeepPartial<ITeam> = {}) => {
  const i = getCounter("team");

  return new Team({
    name: `team#${i}`,
    ...args,
  }).save();
};
