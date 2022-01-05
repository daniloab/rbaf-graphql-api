
# RBFA GraphQL API 

RBFA API is an api to help teams from football in brazil to managed his dailies issues. If you want to see the client project, go to [here](https://github.com/daniloab/rbaf-web).

## Getting Started 

This project use graphql, graphql-relay, koa framework, jsonwebtoken and others stuffs;

```
# clone repo
$ https://github.com/daniloab/rbaf-graphql-api.git
$ cd rbaf-graphql-api

# install dependencies
$ yarn install

# start project
$ yarn start

# see on graphi graphql interface on localhost link
http://localhost:9001/graphql

```

## Queries

### User
- All
```gql
query {
  users {
    _id
    name
    username
    email
    password
  }
}
```
- Auth
```gql
query {
  me {
    username
    name
    username
  }
}
```
### Players
- All
```gql
query {
  players {
    _id
    status
    name
    lastname
    position
    document    
  }
}
```
- By Id
```gql
query {
  playerById(_id: "_id") {
    _id
    status
    name
    lastname
    position
    document
  }
}
```
### Summary
_building, almost there ♥_

## Mutations

### User
- Login
```gql
mutation {
    LoginEmail(input: {
      email:"jon@jon.com"
      password:"jonpassword"
      }) {
        token
        error
    }
  }
}
```
- Register
```gql
mutation {
  RegisterEmail(input: {
    name: "Ned"
    username:"nedstark"
    email:"ned@ned.com"
    password:"ned123"
  }) {
    token
    error
  }
}
```
- Change Password
```gql
mutation {
  ChangePassword(input: {
    oldPassword:"oldPassword"
    password:"newPassword"
  })
}
```

### Players
- Register and Update Player - If you add a new player, just pass the inputs withou _id
```gql
mutation {
  RegisterPlayerMutation(input: {
    _id:""
    status:1,
    name:"Sor"
    lastname:"Jorah"
    position:"Cornerback"
    document:"3456576789"
  }) {
    newPlayer {
      _id
      status
      name
      lastname
      position
      document
    }
    error
  }
}
```
- Remove Player
```gql
mutation {
  RemovePlayer(input:{
    _id: "_id"
  }) {
    name
    lastname
    error
  }
}
```
