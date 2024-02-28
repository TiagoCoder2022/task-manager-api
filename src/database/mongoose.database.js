const mongoose = require("mongoose");

const connectToDatabase = async () => {
    const url = `mongodb+srv://sickgeek07:${process.env.DB_PASSWORD}@taskmanager.cywriqn.mongodb.net/`;

    try {
        await mongoose.connect(url);

        return console.log("Connected to MongoDB!");
    } catch (err) {
        return console.log(`Could not connect to MongoDB: ${err.message}`);
    }
};

module.exports = connectToDatabase;
