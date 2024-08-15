import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    currentBalance: {type: Number, required: true},
    availableBalance: {type: Number, required: true},
    institution: {type: String, required: true}


    
})

const Account = mongoose.models.Account || mongoose.model('Account', accountSchema);

export default Account;

// id: string;
//   availableBalance: number;
//   currentBalance: number;
//   officialName: string;
//   mask: string;
//   institutionId: string;
//   name: string;
//   type: string;
//   subtype: string;
//   appwriteItemId: string;
//   sharableId: string;