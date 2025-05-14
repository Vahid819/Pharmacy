import mongoose, { Schema } from "mongoose";

const saleProductSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const salesSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  saleDate: {
    type: Date,
    required: true,
  },
  product: [saleProductSchema],
  paymentMethod: {
    type: String,
    enum: ["Card", "Cash", "UPI", "credit_card", "debit_card", "mobile_payment"],
    required: true,
  },
  salername: {
    type: String,
    required: true,
  },
  totalproduct: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  saveamount: {
    type: Number,
    default: 0,
  },
  totalamount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const saleModel = mongoose.models.sales || mongoose.model("sales", salesSchema);

export default saleModel;
