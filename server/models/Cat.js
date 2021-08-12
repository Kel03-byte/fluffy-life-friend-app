const { Schema, model } = require('mongoose');

const catSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    shy: {
        type: String,
        required: true,
    },
    otherCats:{
        type: String,
        required: true,
    },
    dogs: {
        type: String,
        required: true,
    },
    childU8: {
        type: String,
        required: true,
    },
    child8to13: {
        type: String,
        required: true,
    },
    specialReq: {
        type: String,
        required: true,
    }
});

const Cat = model('Cat', catSchema);

module.exports = Cat;