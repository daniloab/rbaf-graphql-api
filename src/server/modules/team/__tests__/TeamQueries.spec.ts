import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from "../../../../../test";

import { createUser } from "../../user/fixture/createUser";
import { getContext } from "../../../getContext";

import { schema } from "../../../schema";
import { createTeam } from "../fixture/createTeam";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should return a list of teams", async () => {
  const team = await createTeam({
    name: "Team A",
  });

  const user = await createUser({ name: "user", team: team._id });

  const teamB = await createTeam({
    name: "Team B",
  });

  const query = `
    query Q {
      teams (first: 10) {
        edges {
          node {
            name
          }
        }
      }
    }
  `;
  const variables = {};

  const rootValue = {};

  const context = await getContext({ user });

  const result = await graphql(schema, query, rootValue, context, variables);

  expect(result.errors).toBeUndefined();
  expect(result.data.teams.edges.length).toBe(2);

  expect(result.data.teams.edges[0].node.name).toBe(teamB.name);
  expect(result.data.teams.edges[1].node.name).toBe(team.name);
});
