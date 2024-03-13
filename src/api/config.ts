import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

// Kết nối với MongoDB
const connect: Promise<Mongoose> = mongoose.connect("mongodb://localhost:27017/Vasiliev-movie");

// Kiểm tra kết nối với cơ sở dữ liệu
connect.then(() => {
    console.log("Database Connected Successfully");
}).catch(() => {
    console.log("Database cannot be Connected");
});

// Tạo Schema
const Loginschema: mongoose.Schema = new mongoose.Schema({
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Phần bảng
const collection = mongoose.model<Document & { gmail: string; password: string }>("users", Loginschema);

export default collection;
