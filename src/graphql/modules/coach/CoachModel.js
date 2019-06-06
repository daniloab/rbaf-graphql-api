import mongoose from 'mongoose';

import CoachStaffEnumType from './CoachStaffEnumType'

const { ObjectId } = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const coachSchema = new Schema({
    staff: {
        type: CoachStaffEnumType,
        description: '0: offense; 1: defense 2: special team',
        required: 'staff is required',
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
    taxId: {
        type: String,
        required: 'tax number is required'
    },
    team: {
        type: ObjectId,
        ref: 'Team'
    }
}, { timestamps: true });

export default mongoose.model('Coach', coachSchema)
