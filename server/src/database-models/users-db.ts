
import mongoose from 'mongoose';

export const databaseUrl = 'mongodb://127.0.0.1/users';
const schema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 8, required: true }
});   
export const usersModel = mongoose.model('usersModel', schema);
