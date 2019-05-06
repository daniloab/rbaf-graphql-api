import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: 'name is required',
    },   
}, {timestamps: true});

export default mongoose.model('Player', playerSchema)
