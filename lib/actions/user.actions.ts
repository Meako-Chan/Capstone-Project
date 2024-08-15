"use server"

import { connectDB } from "../mongodb";
import User from "../models/User";

// export const signIn = async () => {
//     try{

//     } catch (error){
//         console.error('Error', error)
//     }
// }

export const signUp = async (userData: SignUpParams) => {
    const{firstName,lastName,address,city,state,postalCode,dateOfBirth,ssn,email,password} = userData;

    try{
        //Create a user account
        await connectDB();
        const userFound = await User.findOne({ email });
        if(userFound){
            return{
                error: 'Email already exists.'
            }
        }
        const user = new User({
            email,
            password,
            firstName,
            lastName,
            address,
            city,
            state,
            postalCode,
            dateOfBirth,
            ssn
        })

        const savedUser = await user.save();
        return user;

    } catch (error){
        console.error('Error', error)
    }
}