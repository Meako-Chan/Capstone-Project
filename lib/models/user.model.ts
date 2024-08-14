import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    $id: {type: String, required: true},
    email: {type: String, required: true},
    userId: { type: String, required: true, unique: true},
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

// $id: string;
//   email: string;
//   userId: string;
//   dwollaCustomerUrl: string;
//   dwollaCustomerId: string;
//   firstName: string;
//   lastName: string;
//   address1: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   dateOfBirth: string;
//   ssn: string;