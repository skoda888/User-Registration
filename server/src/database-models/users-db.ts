
import mongoose from 'mongoose';

// database url
export const databaseUrl = 'mongodb://127.0.0.1/users';

// User's collectection schema
const schema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(value: string): boolean {
                let regex = /^[a-zA-Z0-9_]+\@[a-zA-Z0-9_]+\.com$/
                return regex.test(value);
            }
        } 
    },
    password: { 
        type: String, 
        min: 8, 
        required: true 
    }
});   

// User's collection model
export const usersModel = mongoose.model('usersModel', schema);
