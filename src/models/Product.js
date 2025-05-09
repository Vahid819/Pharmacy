import mongoose, {Schema} from "mongoose";
import validator, { trim } from 'validator';

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    discrption: {
        type: String,
        trim:true
    },
    batch: {
        type: String,
        unique: true
    },
    expireDate: {
        type: Date,
        default: new Date.now()
    },
    updatedata: {
        type: String,
        trim: true
    },
    updatedataDate: {
        type:Date,
        default: new Date.now()
    }
}, {
    timestamps: true
})


const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel