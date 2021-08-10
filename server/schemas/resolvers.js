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
        }
    }
}

module.exports = resolvers;