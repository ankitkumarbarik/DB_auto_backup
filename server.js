import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./src/model.js";

dotenv.config();

const app = express();
app.use(express.json());

// connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error", err));

// add user
app.post("/add", async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email)
        return res.status(400).json({ message: "Name and email are required" });
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: "User added successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
});

// get users
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
