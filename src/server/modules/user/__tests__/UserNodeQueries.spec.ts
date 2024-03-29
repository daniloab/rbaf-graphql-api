import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from "../../../../../test";

import { createUser } from "../fixture/createUser";
import { toGlobalId } from "graphql-relay";
import { getContext } from "../../../getContext";

import { schema } from "../../../schema";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should return an user info", async () => {
  const user = await createUser();

  const userB = await createUser({
    name: "User B",
    username: "userBxd",
    email: "userB@test.com",
  });

  const query = `
    query Q($id: ID!) {
      user: node (id: $id) {
        ... on User {
          name
          username
          email
        }
      }
    }
  `;

  const globalId = toGlobalId("User", userB._id);

  const variables = {
    id: globalId,
  };

  const rootValue = {};

  const context = await getContext({ user });

  const result = await graphql(schema, query, rootValue, context, variables);

  expect(result.errors).toBeUndefined();
  expect(result.data.user.name).toBe(userB.name);
});
