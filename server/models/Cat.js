const { Schema, model } = require('mongoose');

const catSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    shy: {
        type: Boolean,
        required: true,
    },
    otherCats:{
        type: Boolean,
        required: true,
    },
    dogs: {
        type: Boolean,
        required: true,
    },
    childU8: {
        type: Boolean,
        required: true,
    },
    child8to13: {
        type: Boolean,
        required: true,
    },
    specialReq: {
        type: String,
    }
});

const Cat = model('Cat', catSchema);

module.exports = Cat;