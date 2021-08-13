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
        shy: String!
        otherCats: String!
        dogs: String!
        childU8: String!
        child8to13: String!
        specialReq: String!
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        cats: [Cat]
        cat(catId: ID!): Cat
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        addCat(
            name: String!
            dob: String!
            sex: String!
            shy: String!
            otherCats: String!
            dogs: String!
            childU8: String!
            child8to13: String!
            specialReq: String!
        ): Cat
        updateCat(
            catId: ID!,
            name: String!
            dob: String!
            sex: String!
            shy: String!
            otherCats: String!
            dogs: String!
            childU8: String!
            child8to13: String!
            specialReq: String!
        ): Cat
        removeCat(catId: ID!): Cat
    }
`;

module.exports = typeDefs;