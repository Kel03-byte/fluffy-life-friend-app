const { Schema, model } = require('mongoose');

const catSchema = new Schema ({
    name: {
        type: String,
    },
    dob: {
        type: String,
    },
    sex: {
        type: String,
    },
    shy: {
        type: String,
    },
    otherCats:{
        type: String,
    },
    dogs: {
        type: String,
    },
    childU8: {
        type: String,
    },
    child8to13: {
        type: String,
    },
    specialReq: {
        type: String,
    },
    image: {
        type: String,
    }
});

const Cat = model('Cat', catSchema);

module.exports = Cat;