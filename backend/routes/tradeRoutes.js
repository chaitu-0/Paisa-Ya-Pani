// const express = require("express");
// const Trade = require("../models/Trade");
// const User = require("../models/User");
// const authMiddleware = require("../middleware/authMiddleware");

// const router = express.Router();

// // 🔹 Fake Crypto Prices
// const cryptoPrices = {
//     "BTC": 50000,
//     "ETH": 3000,
//     "DOGE": 0.08
// };

// // 🔹 Buy Crypto
// router.post("/buy", authMiddleware, async (req, res) => {
//     const { coin, amount } = req.body;
//     const userId = req.user.id;
    
//     if (!cryptoPrices[coin]) return res.status(400).json({ message: "Invalid coin" });

//     const price = cryptoPrices[coin] * amount;
//     const user = await User.findById(userId);
    
//     if (user.balance < price) return res.status(400).json({ message: "Insufficient balance" });

//     user.balance -= price;
//     user.portfolio.push({ coin, amount });

//     await user.save();
//     const trade = new Trade({ userId, coin, amount, price, type: "buy" });
//     await trade.save();

//     res.json({ message: "Trade successful", balance: user.balance });
// });

// module.exports = router;
