import { Model, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
    _id: string
    clerkId: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    emailAddress: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const UserModel = (models?.User as Model<typeof UserSchema>) ?? model<typeof UserSchema>('User', UserSchema)

export default UserModel
