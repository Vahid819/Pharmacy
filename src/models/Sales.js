import mongoose, {Schema} from "mongoose";
import validator, { trim } from 'validator';
import productModel from "./Product";

const salesSchema = new Schema({
    
    customerName:{
        type: String,
        required: [true, "Please enter customer Name"]
    },
    contact: {
        type: String,
        unique: true
    },
    saleDate: {
        type: Date,
        required: true
    },
    product: {
        type: [productModel],
        required: true
    },
    paymentMethod: {
        type: String,
        enum: {
            values: ["Card", "Cash", "UPI"],
            message: "{values} is not a valid course level"
        },
        required: true
    },
    salername:{
        type: String,
        required: true
    },
    totalproduct: {
        type: String,
        required: true
    },
    discount: {
        type: String,
    },
    saveamount: {
        type: String,
    },
    totalamount: {
        type: String,
    }

},{
    timestamps: true
})

const saleModel = mongoose.models.sales || mongoose.model("sales", salesSchema)

export default saleModel
