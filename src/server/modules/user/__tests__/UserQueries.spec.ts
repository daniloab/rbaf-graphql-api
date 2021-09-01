import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from "../../../../../test";

import { createUser } from "../fixture/createUser";
import { getContext } from "../../../getContext";

import { schema } from "../../../schema";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should return an user info", async () => {
  const user = await createUser({ name: "user" });

  const userB = await createUser({
    name: "User B",
    username: "user_xd_B",
    email: "userB@test.com",
  });

  const userC = await createUser({
    name: "User C",
    username: "user_xd_C",
    email: "userC@test.com",
  });

  const query = `
    query Q {
      users (first: 10) {
        edges {
          node {
            name
            username
            email
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
  expect(result.data.users.edges.length).toBe(3);

  expect(result.data.users.edges[0].node.name).toBe(userC.name);
  expect(result.data.users.edges[1].node.name).toBe(userB.name);
  expect(result.data.users.edges[2].node.name).toBe(user.name);
});
