"use server"

import { connectDB } from "../mongodb";
import Transaction from "../models/Transaction";

// Create a new transaction
export const createTransaction = async (transactionData: {
    id: string;
    name: string;
    type: string;
    category: string;
    date: string;
    amount: number;
    pending: boolean;
    senderBankId: string;
    receiverBankId: string;
    paymentChannel: string;
}) => {
    const {id, name, type, category, date, amount, pending,
        senderBankId, receiverBankId, paymentChannel } = transactionData;

    try {
        await connectDB();
        const transaction = new Transaction({
            id,
            name,
            type,
            category,
            date,
            amount,
            pending,
            senderBankId,
            receiverBankId,
            paymentChannel
        });

        const savedTransaction = await transaction.save();
        return savedTransaction;
    } catch (error) {
        console.error('Error creating transaction:', error);
        return { error: 'Error creating transaction.' };
    }
}

export const getTransactionById = async (transactionId: string) => {
    try {
        await connectDB();
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) {
            return {
                error: 'Transaction not found.'
            };
        }
        return transaction;
    } catch (error) {
        console.error('Error fetching transaction:', error);
        return { error: 'Error fetching transaction.' };
    }
}

export const updateTransaction = async (transactionId: string, updateData: Partial<{
    id: string;
    name: string;
    type: string;
    category: string;
    date: string;
    amount: number;
    pending: boolean;
    senderBankId: string;
    receiverBankId: string;
    paymentChannel: string;
}>) => {
    try {
        await connectDB();
        const updatedTransaction = await Transaction.findByIdAndUpdate(transactionId, updateData, { new: true });
        if (!updatedTransaction) {
            return {
                error: 'Transaction not found.'
            };
        }
        return updatedTransaction;
    } catch (error) {
        console.error('Error updating transaction:', error);
        return { error: 'Error updating transaction.' };
    }
}

export const deleteTransaction = async (transactionId: string) => {
    try {
        await connectDB();
        const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
        if (!deletedTransaction) {
            return {
                error: 'Transaction not found.'
            };
        }
        return { message: 'Transaction deleted successfully.' };
    } catch (error) {
        console.error('Error deleting transaction:', error);
        return { error: 'Error deleting transaction.' };
    }
}