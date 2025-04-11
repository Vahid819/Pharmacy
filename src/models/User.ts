import mongoose, {Schema, Document} from "mongoose";




export interface User extends Document {
    username: string;
    password: string;
    email: string;
    isadmin: boolean;
    verifyCode: string;
    verifyCodeExpire: Date;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;

    
}

const UserSchema: Schema<User> = new Schema({
    username: { type: String, required: [true, "username is required"],trim: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true,unique: true, match: [/.+\@.+\..+/,"please etner valid email"] },
    isadmin: { type: Boolean, default: false },
    verifyCode: { type: String, required: true }, 
    verifyCodeExpire: { type: Date, required: true },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;