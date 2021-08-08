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
        dob: Int!
        sex: String!
        shy: Boolean!
        otherCats: Boolean!
        dogs: Boolean!
        childU8: Boolean!
        child8t13: Boolean!
        specialReq: String
    }

    type Query {
        users: [User]
        cats: [Cat]
        cat(id: ID!): Cat
    }

    type Mutation {
        addUser(userId: ID,
            username: String!,
            email: String!,
            password: String!): User
        
        addCat(catId: ID,
            name: String!,
            dob: Int!,
            sex: String!,
            shy: Boolean!,
            otherCats: Boolean!,
            dogs: Boolean!,
            childU8: Boolean!,
            child8t13: Boolean!,
            specialReq: String): Cat
        
        removeCat(catId: ID!): Cat

        updateCat(catId: ID,
            name: String!,
            dob: Int!,
            sex: String!,
            shy: Boolean!,
            otherCats: Boolean!,
            dogs: Boolean!,
            childU8: Boolean!,
            child8t13: Boolean!,
            specialReq: String): Cat
    }
`;

module.exports = typeDefs;