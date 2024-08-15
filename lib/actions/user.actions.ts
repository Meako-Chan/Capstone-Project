"use server"

import { connectDB } from "../mongodb";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const signIn = async (email: string, password: string) => {
    try {
        await connectDB();
        const user = await User.findOne({ email });
        if (!user) {
            return {
                error: 'User not found.'
            }
        }
        if (user.password !== password) {
            return {
                error: 'Invalid credentials.'
            }
        }
        return user;
    } catch (error) {
        console.error('Error', error);
        return { error: 'Error during sign in.' };
    }
}

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
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
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

export const getUserById = async (userId: string) => {
    try {
        await connectDB();
        const user = await User.findById(userId);
        if (!user) {
            return {
                error: 'User not found.'
            }
        }
        return user;
    } catch (error) {
        console.error('Error', error);
        return { error: 'Error during fetching user.' };
    }
}

export const updateUser = async (userId: string, updateData: Partial<SignUpParams>) => {
    try {
        await connectDB();
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!updatedUser) {
            return {
                error: 'User not found.'
            }
        }
        return updatedUser;
    } catch (error) {
        console.error('Error', error);
        return { error: 'Error during updating user.' };
    }
}

export const deleteUser = async (userId: string) => {
    try {
        await connectDB();
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return {
                error: 'User not found.'
            }
        }
        return { message: 'User deleted successfully.' };
    } catch (error) {
        console.error('Error', error);
        return { error: 'Error during deleting user.' };
    }
}