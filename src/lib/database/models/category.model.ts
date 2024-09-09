import { type Document, type Model, model, models, Schema } from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const CategoryModel =
    (models.Category as Model<ICategory>) ??
    model<ICategory>("Category", CategorySchema);

export default CategoryModel;
