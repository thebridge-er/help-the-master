require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});