import mongoose, {Schema} from "mongoose";
import validator, { trim } from 'validator';


const userSchema = new Schema({
    clerkId:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true,
        trim: true,

    },
    lastname:{
        type: String,
        required: true,
        trim: true,
    },
    username:{
        type:String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, "Please enter valid email address"]
    },
    image:{
        type: String,
        trim: true,
        default: ""
    },
    role:{
        type: String,
        enum: ["admin", "owner", "staff"],
        default: "staff",
    },
    contact:{
        type: String,
        trim: true,
        default: ""
    },
    isverified:{
        type: Boolean,
        default: false
    },
},{
    timestamps:true
})

const userModel = mongoose.models.users || mongoose.model("users", userSchema)

export default userModel;