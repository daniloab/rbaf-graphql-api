import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;
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
    taxId: {
        type: String,
        required: 'document is required'
    },
    team: {
        type: ObjectId,
        ref: 'Team'
    }
}, { timestamps: true });

export default mongoose.model('Player', playerSchema)
