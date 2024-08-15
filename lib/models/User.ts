import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    postalCode: {type: String, required: true},
    dateOfBirth: {type: String, required: true},
    ssn: {type: String, required: true},
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

