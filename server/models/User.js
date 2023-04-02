import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        address: {
            type: String,
            max: 100,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', UserSchema);

export default User;