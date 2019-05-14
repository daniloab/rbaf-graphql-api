
# RBFA GraphQL API 

RBFA API is an api to help teams from football in brazil to managed his dailies issues.  

## Queries

### User
- All
	```
	query {
	  users{
	    _id
	    name
	    username
	    email
	    password
	  }
	}
	```
### Players
- All
	```
	query {
	  players{
	    _id
	    status
	    name
	    lastname
	    position
	    document
	    
	  }
	}```
### Summary
_building, almost there ♥_

## Mutations

### User
- Login
```
   mutation {
      LoginEmail(input: {
        email:"jon@jon.com"
        password:"jonpassword"
      }){
        token
        error
      }
    }
   }
```
- Auth
```
	query {
		me{
	    username
	    name
	    username
	  }
	}
```
- Register
```
	mutation {
	  RegisterEmail(input: {
	    name: "Ned"
	    username:"nedstark"
	    email:"ned@ned.com"
	    password:"ned123"
	  }){
	    token
	    error
	  }
	}
```
- Change Password
```
	mutation {
	  ChangePassword(input: {
	    oldPassword:"oldPassword"
	    password:"newPassword"
	  })
	}
```

### Players
- Add Player
```
	mutation {
	  AddPlayer(input: 
	    {
	      name:"Sandor", 
	      lastname:"Clegane",
	      position:"Safety",
	      document:"4477799978"
	    }){
	    status
	    name
	    lastname
	    position
	    document    
	    error
	  }
	}
```
- Remove Player
```
	mutation {
	  RemovePlayer(input:{
	    _id: "_id"
	  }){
	    name
	    lastname
	    error
	  }
	}
```
- Update Player
```
	mutation {
	  UpdatePlayer(input: {
	    _id: "_id"
	    status: 99,
	    name: "Sandor",
	    lastname: "Clegane",
	    position: "Middle Linebacker",
	    document: "4477799978"
	  }){
	    status
	    name
	    lastname
	    position
	    document
	    error
	  }
	}
```

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