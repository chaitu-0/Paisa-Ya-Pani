const User = require("../models/userModel");

exports.placeTrade = async (req, res) => {
    try {
        const { type, amount, crypto, price } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ message: "User not found" });

        const cost = amount * price;

        if (type === "buy" && user.balance < cost) {
            return res.status(400).json({ message: "Insufficient balance" });
        }

        if (type === "buy") user.balance -= cost;
        else user.balance += cost;

        const newTrade = { type, amount, crypto, price, date: new Date() };
        user.transactions.push(newTrade);
        await user.save();

        res.json({ message: "Trade successful", trade: newTrade });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

exports.getTrades = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json({ trades: user.transactions });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
