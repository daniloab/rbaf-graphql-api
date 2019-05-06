import { buildSchema } from 'graphql'

export default buildSchema(`
    type Team {
        _id: ID!
        name: String!
        img: String!
        players: [Player!]
    }

    type Player {
        _id: ID!
        name: String!
    }

    input TeamInput {        
        name: String!
        img: String!
        players: [Player!]
    }

    input PlayerInput {
        name: String!
    }

    type RootQuery {
        teams: [Team!]!
        players: [Player!]!
    }

    type RootMutation {
        createTeam(teamInput: TeamInput): Team
        createPlayer(playerInput: PlayerInput): Player
    }

    schema {
        query: RootQuery
        mutation: RootMutation
      }
`)