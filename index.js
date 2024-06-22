import express from 'express';
import mongoose from 'mongoose'

import User from './model/User.js'

const PORT = 5821;
const url = "mongodb+srv://longpracticesummer:longpracticesummer123456@personblogging.umnak8i.mongodb.net/?retryWrites=true&w=majority&appName=PersonBlogging";

const app = new express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})

// Get List Of Article
app.get("/articles", (req, res) => {
    console.log("Get List Of Article");
});

// Get Article By Article Id
app.get("/articles", (req, res) => {
    console.log("Get Article By ID");
})

// Create A New Article
app.post("/articles", (req, res) => {
    console.log("Create Article");
})

// Delete A Article By ID
app.delete("/articles", (req, res) => {
    console.log("Delete Article By ID");
})

// Update A Article By ID
app.put("/articles", (req, res) => {
    console.log("Update Article By ID");
})

const connectDB = async () => {
    try {
        await mongoose.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}