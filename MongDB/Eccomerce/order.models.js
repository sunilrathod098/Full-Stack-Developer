import mongoose from "mongoose";

//mini schema this ref gose to orderItems
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    orderItems: {
        type: [orderItemsSchema]//ref from mini schema
    },
    address: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["'PENDING', 'CANCELLED', 'DELIVERED'"],
        default: 'PENDING'
    }
}, { timestamps: true })



export const Order = mongoose.model("Order", orderSchema);