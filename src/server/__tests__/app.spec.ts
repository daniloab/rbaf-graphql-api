import request from "supertest";

import app from "../app";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from "../../../test";
import { generateToken } from "../auth";
import { createUser } from "../modules/user/fixture/createUser";
import { createTeam } from "../modules/team/fixture/createTeam";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should return errors for user without team", async () => {
  const user = await createUser({
    name: "Danilo",
    team: null,
  });

  const token = generateToken({ user });

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    })
    .send(JSON.stringify(payload));

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toHaveLength(1);
  expect(response.body.errors[0].message).toBe("Invalid session");

  expect(response.body).toMatchSnapshot();
});

it("should return errors for user not existent", async () => {
  const user = {
    _id: "613184269551fa4fb4e0f08c",
  };

  const token = generateToken({ user });

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    })
    .send(JSON.stringify(payload));

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toHaveLength(1);
  expect(response.body.errors[0].message).toBe("Invalid session");

  expect(response.body).toMatchSnapshot();
});

it("should return errors for authorization and domainname null", async () => {
  const user = {
    _id: "613184269551fa4fb4e0f08c",
  };

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: null,
      domainname: null,
    })
    .send(JSON.stringify(payload));

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toHaveLength(1);
  expect(response.body.errors[0].message).toBe("Invalid session");

  expect(response.body).toMatchSnapshot();
});

it("should return errors if domain name is null", async () => {
  const user = await createUser({
    name: "Danilo",
  });

  const token = generateToken({ user });

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
      domainName: null,
    })
    .send(JSON.stringify(payload));

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toHaveLength(1);
  expect(response.body.errors[0].message).toBe("Invalid session");

  expect(response.body).toMatchSnapshot();
});

it("should return errors if domain name not exist", async () => {
  const user = await createUser({
    name: "Danilo",
  });

  const token = generateToken({ user });

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
      domainName: "wolfsburg",
    })
    .send(JSON.stringify(payload));

  expect(response.body.data).toBeNull();
  expect(response.body.errors).toHaveLength(1);
  expect(response.body.errors[0].message).toBe("Invalid session");

  expect(response.body).toMatchSnapshot();
});

it("should return 200 and return logged user", async () => {
  const team = await createTeam();
  const user = await createUser({
    name: "Danilo",
    team,
  });

  const token = generateToken({ user });

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
      domainName: team.domainName,
    })
    .send(JSON.stringify(payload));

  expect(response.body.data.me.name).toBe(user.name);

  expect(response.body).toMatchSnapshot();
});

it("should return 200 but user not logged since is a request only with domainname", async () => {
  const team = await createTeam();

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
      }      
    }
  `;

  const variables = {};

  const payload = {
    query,
    variables,
  };

  const response = await request(app.callback())
    .post("/graphql")
    .set({
      Accept: "application/json",
      "Content-Type": "application/json",
      domainName: team.domainName,
    })
    .send(JSON.stringify(payload));

  expect(response.body.data.me).toBeNull();

  expect(response.body).toMatchSnapshot();
});
