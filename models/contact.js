import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.models = {}

module.exports = mongoose.model('contact', contactSchema);