import mongoose from "mongoose";
import validator, { trim } from 'validator';



const salesSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    paymentMethod: {
        type: String,
        enum: ["cash", "credit_card", "debit_card", "mobile_payment"],
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["paid", "pending", "failed"],
        default: "pending"
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    tax: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        required: true,
        trim: true,
        default: "USD"
    },
    saleDate: {
        type: Date,
        default: Date.now
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true 
    },
    staff: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                return value.length > 0;
            },
            message: "Staff name cannot be empty"
        },
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        required: true 
    }
},{
    timestamps:true
})