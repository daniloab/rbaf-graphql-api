import { createLoader } from "../../../graphql/createLoader";

import { registerLoader } from "../../../graphql/loaderRegister";

import TeamModel from "./TeamModel";

const {
  Wrapper: Team,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: TeamModel,
  loaderName: "TeamLoader",
});

export { getLoader, clearCache, load, loadAll };
export default Team;

registerLoader("TeamLoader", getLoader);
