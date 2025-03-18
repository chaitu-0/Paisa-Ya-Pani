const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/trades", require("./routes/tradeRoutes")); 

app.get("/", (req, res) => {
    res.send("🚀 PaisaYaPani Backend is Running...");
});

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working fine! 🎉" });
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`✅ Server running on port ${PORT}`));
