import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

mongoose.models = {} // making models empty as we are reconnecting or connecting the old connection everytime

module.exports = mongoose.model('blogs', blogSchema);