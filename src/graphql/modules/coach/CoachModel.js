import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    squad: {
        type: Number,
        description: '1: offense; 2: defense',
        required: 'lastname is required',
    },
    name: {
        type: String,
        required: 'name is required',
    },
    lastname: {
        type: String,
        required: 'lastname is required',
    },
    job: {
        type: String,
        required: 'job is required',
    },
    document: {
        type: String,
        required: 'document is required'
    }
}, { timestamps: true });

export default mongoose.model('Staff', staffSchema)
