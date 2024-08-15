"use server"

import { connectDB } from "../mongodb";
import Account from "../models/Account"; 

export const createAccount = async (accountData: {
    id: string;
    name: string;
    type: string;
    currentBalance: number;
    availableBalance: number;
    institution: string;
}) => {
    const { id, name, type, currentBalance, availableBalance, institution } = accountData;

    try {
        await connectDB();
        const account = new Account({
            id,
            name,
            type,
            currentBalance,
            availableBalance,
            institution
        });

        const savedAccount = await account.save();
        return savedAccount;
    } catch (error) {
        console.error('Error creating account:', error);
        return { error: 'Error creating account.' };
    }
}

export const getAccountById = async (accountId: string) => {
    try {
        await connectDB();
        const account = await Account.findById(accountId);
        if (!account) {
            return {
                error: 'Account not found.'
            };
        }
        return account;
    } catch (error) {
        console.error('Error fetching account:', error);
        return { error: 'Error fetching account.' };
    }
}

export const updateAccount = async (accountId: string, updateData: Partial<{
    id: string;
    name: string;
    type: string;
    currentBalance: number;
    availableBalance: number;
    institution: string;
}>) => {
    try {
        await connectDB();
        const updatedAccount = await Account.findByIdAndUpdate(accountId, updateData, { new: true });
        if (!updatedAccount) {
            return {
                error: 'Account not found.'
            };
        }
        return updatedAccount;
    } catch (error) {
        console.error('Error updating account:', error);
        return { error: 'Error updating account.' };
    }
}

export const deleteAccount = async (accountId: string) => {
    try {
        await connectDB();
        const deletedAccount = await Account.findByIdAndDelete(accountId);
        if (!deletedAccount) {
            return {
                error: 'Account not found.'
            };
        }
        return { message: 'Account deleted successfully.' };
    } catch (error) {
        console.error('Error deleting account:', error);
        return { error: 'Error deleting account.' };
    }
}