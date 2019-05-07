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
    }

    input PlayerInput {
        name: String!
    }


    type Mutation {
        createTeam(teamInput: TeamInput): Team
        createPlayer(playerInput: PlayerInput): Player
    }
    
    type Query {
        teams: [Team!]!
        players: [Player!]!
    }
`)