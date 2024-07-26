import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    service: String,
    status: { type: String, default: "pending" },
    phone: String,
    address: String,
    media: [String]
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);

export default Request;
