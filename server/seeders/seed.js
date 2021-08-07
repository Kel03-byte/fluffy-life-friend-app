const  { User, Cat } = require('../models/');
const userSeeds = require('./userSeeds.json')
const catSeeds = require('./catSeeds.json')
const db = require('../config/connection');

db.once('open', async () => {
    try {
        await Cat.deleteMany({});
        await User.deleteMany({});
        await Cat.create(catSeeds);
        await User.create(userSeeds)
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
    console.log('Database has been seeded!')
    process.exit(0)
});