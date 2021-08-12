const User = require('../models/User');
const Cat = require('../models/Cat');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        cats: async () => {
            return await Cat.find({})
        },
        cat: async  (_, { catId }) => {
            return await Cat.findById({_id: catId})
        }
    },
    Mutation: {
        addUser: async (_, { username, email, password }) => {
            return User.create({ username, email, password })
        },
        loginUser: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No profile with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
        addCat: async (_, {name, dob, sex, shy, otherCats, dogs, childU8, child8to13, specialReq}) => {
            return Cat.create({ name, dob, sex, shy, otherCats, dogs, childU8, child8to13, specialReq })
        },
    }
}

module.exports = resolvers;