import mongoose, {Schema, InferSchemaType} from "mongoose";

const userSchema = new Schema(
    {
        email: {type: String, required : true},
        username: {type: String, required: true},
        passwordHash: {type: String, required: true}
    },
    { timestamps : true}       
);

//중복 방지 인덱스
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

//타입 추론
export type UserDoc = InferSchemaType<typeof userSchema>;

//모델 export
export default mongoose.model<UserDoc>('User', userSchema);