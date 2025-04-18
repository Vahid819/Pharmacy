import mongoose, { Schema, Document } from "mongoose";



export interface Distributor extends Document {
    fname: string;
    lname: string;
    company:string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

const DistributorSchema: Schema<Distributor> = new Schema({
    fname: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minLength: [3, "First name must be at least 3 characters long"],
    },
    lname: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        minLength: [3, "Last name must be at least 3 characters long"],
    },
    company:{
        type: String,
        required: [true, "Please enter company name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10}$/, "Phone number must be 10 digits long"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        minLength: [5, "Address must be at least 5 characters long"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
        minLength: [3, "City must be at least 3 characters long"],
    },
    state: {
        type: String,
        required: [true, "State is required"],
        minLength: [2, "State must be at least 2 characters long"],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
        minLength: [2, "Country must be at least 2 characters long"],
    },
    postalCode: {
        type: String,
        required: [true, "Postal code is required"],
        minLength: [6, "Postal code must be at least 5 characters long"],
    },
},
    {
        timestamps: true,
    }
)

const DistributorModel = (mongoose.models.DistributarSchema as mongoose.Model<Distributor>) || mongoose.model<Distributor>("Distributar", DistributorSchema); 
export default DistributorModel;






