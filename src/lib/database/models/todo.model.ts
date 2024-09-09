import { Document, Model, Schema, Types, model, models } from "mongoose";
import type UserModel from "./user.model";
import type CategoryModel from "./category.model";

export interface ITodoNoDocumentExtends {
    _id: string,
    title: string;
    content: string;
    user: typeof UserModel | Types.ObjectId; // Allow either User object or ObjectId
    category?: typeof CategoryModel | Types.ObjectId; // Allow either Category object or ObjectId
}

export interface ITodo extends Document {
    _id: string,
    title: string;
    content: string;
    user: typeof UserModel | Types.ObjectId; // Allow either User object or ObjectId
    category?: typeof CategoryModel | Types.ObjectId; // Allow either Category object or ObjectId
}

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: Types.ObjectId,
        ref: 'Category'
    }
});

const TodoModel = (models?.Todo as Model<typeof TodoSchema>) ?? model<typeof TodoSchema>('Todo', TodoSchema);

export default TodoModel;