import CategoryModel, { ICategory } from "../database/models/category.model";

export const createCategory = async (categoryData: Partial<ICategory>) => {
  try {
    const newCategory = new CategoryModel(categoryData);
    await newCategory.save();
    return newCategory;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const categories = await CategoryModel.find();
    return categories;
  } catch (error) {
    console.error("Error getting categories:", error);
    throw error;
  }
};

export const getCategoryById = async (categoryId: string) => {
  try {
    const category = await CategoryModel.findById(categoryId);
    return category;
  } catch (error) {
    console.error("Error getting category by ID:", error);
    throw error;
  }
};

export const updateCategory = async (
  categoryId: string,
  categoryData: Partial<ICategory>
) => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      categoryData,
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (categoryId: string) => {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    return deletedCategory;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
