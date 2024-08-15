import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    category: {type: String, required: true},
    date: {type: String, required: true}, 
    amount: {type: Number, required: true},
    pending: {type: Boolean, required: true},
    senderBankId: {type: String, required: true},
    receiverBankId: {type: String, required: true},
    paymentChannel: {type: String, required: true},
})

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction;



// id: string;
//   $id: string;
//   name: string;
//   paymentChannel: string;
//   type: string;
//   accountId: string;
//   amount: number;
//   pending: boolean;
//   category: string;
//   date: string;
//   image: string;
//   type: string;
//   $createdAt: string;
//   channel: string;
//   senderBankId: string;
//   receiverBankId: string;