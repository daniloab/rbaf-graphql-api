import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from "../../../../../test";

import { createUser } from "../../user/fixture/createUser";
import { toGlobalId } from "graphql-relay";
import { getContext } from "../../../getContext";

import { schema } from "../../../schema";
import { createTeam } from "../fixture/createTeam";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should return a team info", async () => {
  const user = await createUser();

  const team = await createTeam({
    name: "Sport Club Corinthians",
  });

  const query = `
    query Q($id: ID!) {
      team: node (id: $id) {
        ... on Team {
          name
        }
      }
    }
  `;

  const globalId = toGlobalId("Team", team._id);

  const variables = {
    id: globalId,
  };

  const rootValue = {};

  const context = await getContext({ user });

  const result = await graphql(schema, query, rootValue, context, variables);

  expect(result.errors).toBeUndefined();
  expect(result.data.team.name).toBe(team.name);
});
