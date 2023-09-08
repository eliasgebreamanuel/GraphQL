export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        authors: [Author]

    }
    type Mutation {
        addGame(): Game
        deleteGame{id: ID!}: [Game]
        updateGame(id: ID!, edits: EditGameInput!): Game
    }
    input AddGameInput {
        title: String!
        paltform: [String!]
    }
    input EditGameInput {
        id: ID
        title: String
        platform: [String!]
    }


`

// int, float, string, boolean, ID