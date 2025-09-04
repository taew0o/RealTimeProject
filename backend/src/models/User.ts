import mongoose, {Schema, InferSchemaType} from "mongoose";

interface IUser{
    name: string;
    email : string;
    passwordHash: string;
}

const userSchema = new Schema<IUser>(
    {
        name: {type: String, required: true},
        email: {type: String, required : true},
        passwordHash: {type: String, required: true}
    },
    { timestamps : true}       
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

export type UserDoc = InferSchemaType<typeof userSchema>;
export default mongoose.model<UserDoc>('User', userSchema);