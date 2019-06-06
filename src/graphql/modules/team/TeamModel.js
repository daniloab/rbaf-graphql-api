import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    status: {
        type: Number
    },
    name: {
        type: String,
        required: 'name is required',
    },
    taxId: {
        type: String,
        required: 'tax number is required'
    }
}, { timestamps: true });

export default mongoose.model('Team', teamSchema)
