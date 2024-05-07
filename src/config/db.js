const mongoose = require('mongoose');
const url = "mongodb+srv://linoy800081:UHT1ydyblzdYlPIa@cluster0.zjd9nio.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(url);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connectDB;
