import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: 'name is required',
    },   
    username: {
        type: String,
        required: 'name is required',
    },
    email: {
        type: String,
        required: 'name is required',
    },
    password: {
        type: String,
        required: 'name is required',
    }
}, { timestamps: true });

UserSchema.methods = {
    authenticate(plainTextPassword) {
      return bcrypt.compareSync(plainTextPassword, this.password);
    },
    encryptPassword(password) {
      return bcrypt.hashSync(password, 8);
    },
  };

export default mongoose.model('User', UserSchema)