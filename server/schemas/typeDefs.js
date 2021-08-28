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
        image: String
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

        login(email: String!, password: String!): Auth

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
            image: String!
        ): Cat

        updateDob(
            catId: ID!
            dob: String
        ): Cat

        updateSex(
            catId: ID!
            sex: String
        ): Cat

        updateShy(
            catId: ID!
            shy: String
        ): Cat

        updateOtherCats(
            catId: ID!
            otherCats: String
        ): Cat

        updateDogs(
            catId: ID!
            dogs: String
        ): Cat

        updateChildU8(
            catId: ID!
            childU8: String
        ): Cat

        updateChild8to13(
            catId: ID!
            child8to13: String
        ): Cat

        updateSpecialReq(
            catId: ID!
            specialReq: String
        ): Cat

        removeCat(catId: ID!): Cat
    }
`;

module.exports = typeDefs;