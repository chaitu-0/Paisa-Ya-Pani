const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 10000 }, // Default virtual money
    transactions: [{ type: Object }],
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
