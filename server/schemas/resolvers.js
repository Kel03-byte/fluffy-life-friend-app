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
        cat: async (_, { catId }) => {
            return await Cat.findById({ _id: catId })
        }
    },
    Mutation: {
        addUser: async (_, { username, email, password }) => {
            const user = User.create({ username, email, password })
            const token = signToken(user);
            return { token, user };
        },
        login: async (_, { email, password }) => {
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
        addCat: async (_, { name, dob, sex, shy, otherCats, dogs, childU8, child8to13, specialReq, image }) => {
            return Cat.create({ name, dob, sex, shy, otherCats, dogs, childU8, child8to13, specialReq, image })
        },
        updateDob: async (_, { catId, dob }) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { dob }, { new: true })
        },
        updateSex: async (_, { catId, sex }) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { sex }, { new: true })
        },
        updateShy: async (_, { catId, shy }) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { shy }, { new: true })
        },
        updateOtherCats: async (_, { catId, otherCats}) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { otherCats}, { new: true })
        },
        updateDogs: async (_, { catId, dogs }) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { dogs }, { new: true })
        },
        updateChildU8: async (_, { catId, childU8}) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { childU8 }, { new: true })
        },
        updateChild8to13: async (_, { catId, child8to13 }) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { child8to13 }, { new: true })
        },
        updateSpecialReq: async (_, { catId, specialReq }) => {
            return await Cat.findOneAndUpdate({ _id: catId }, { specialReq }, { new: true })
        },
        removeCat: async (_, { catId }) => {
            return await Cat.findByIdAndDelete(catId);
        }
    }
}

module.exports = resolvers;