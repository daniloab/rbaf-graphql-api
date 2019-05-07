import { GraphQLSchema } from 'graphql'

import QueryType from '../types/QueryType'
import MutationType from '../types/MutationType'

export const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

// import { buildSchema } from 'graphql'

// export default buildSchema(`
//     type Player {
//         _id: ID!
//         name: String!
//     }  

//     type Team {
//         _id: ID!
//         name: String!
//         img: String!
//         players: [Player!]
//     }

//     type User {
//         id: ID!
//         name: String!
//         username: String!
//         email: String!
//         password: String!
//     }

//     input LoginInput {
//         email: String!
//         passwortd: String!
//     }

//     input PlayerInput {
//         name: String!
//     }

//     input SignUpInput {
//         name: String!
//         username: String!
//         email: String!
//         password: String!
//     }

//     input TeamInput {        
//         name: String!
//         img: String!
//     }
    
//     type Query {
//         me: [User]
//         players: [Player!]!
//         teams: [Team!]!
//     } 

//     type Mutation {
//         createTeam(teamInput: TeamInput): Team
//         createPlayer(playerInput: PlayerInput): Player
//         login(loginInput: LoginInput): String
//         signup(signUpInput: SignUpInput): String
//     }
// `)