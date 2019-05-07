import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        required: 'name is required',
    },
    img: {
        type: String,
        required: 'img is required',
    },
    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }
    ],
   
}, {timestamps: true});

export default mongoose.model('Team', teamSchema)
