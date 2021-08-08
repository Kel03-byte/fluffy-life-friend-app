const User = require('../models/User');
const Cat = require('../models/Cat');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        cats: async () => {
            return Cat.find()
        },
        cat: async (_, { catId }) => {
            return Cat.findById({_id: catId})
        }
    },

    Mutation: {
        addUser: async (_, { username, email, password }) => {
            return User.create({ username, email, password })
        },
        addCat: async (_, { name, dob, sex, shy, otherCats, dogs, childU8, child8t13, specialReq }) => {
            return Cat.create({ name, dob, sex, shy, otherCats, dogs, childU8, child8t13, specialReq })
        },
        removeCat: async (_, {catId}) => {
            return Cat.findOneAndDelete({_id: catId})
        },
        updateCat: async (_, {catId, name, dob, sex, shy, otherCats, dogs, childU8, child8t13, specialReq}) => {
            return Cat.findOneAndUpdate({_id: catId, name, dob, sex, shy, otherCats, dogs, childU8, child8t13, specialReq})
        }
    }
}

module.exports = resolvers;