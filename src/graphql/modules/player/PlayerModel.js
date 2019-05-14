import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    status: {
        type: Number
    },
    name: {
        type: String,
        required: 'name is required',
    },
    lastname: {
        type: String,
        required: 'lastname is required',
    },
    position: {
        type: String,
    },
    document: {
        type: String,
        required: 'document is required'
    }
}, { timestamps: true });

export default mongoose.model('Player', playerSchema)
