const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String!   
        email: String!
        password: String!
    }

    type Cat {
        _id: ID
        name: String!
        dob: String!
        sex: String!
        shy: Boolean!
        otherCats: Boolean!
        dogs: Boolean!
        childU8: Boolean!
        child8t13: Boolean!
        specialReq: String
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        cats: [Cat]
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        loginUser(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;