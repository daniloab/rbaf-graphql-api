import Team, { ITeam } from "../TeamModel";
import { getCounter } from "../../../../../test";
import { DeepPartial } from "../../../../../test/deepPartial";

export const createTeam = (args: DeepPartial<ITeam> = {}) => {
  const i = getCounter("team");

  let { domainName, ...payload } = args;

  if (domainName === undefined) {
    domainName = `test${i}.com`;
  }

  return new Team({
    name: `team#${i}`,
    domainName,
    ...payload,
  }).save();
};
