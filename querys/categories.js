const db = require("../models");
const Categories = db.Categories;

// Get category by id
exports.getCategoryById = async (categoriesId) => {
  try {
    const categoryInDataBase = await Categories.findOne({
      where: { id: categoriesId },
    });
    return categoryInDataBase;
  } catch (err) {
    return err;
  }
};

// Update category that match the given id and uses categories parameter data for update process
exports.updateCategoryById = async (categoryData, categoryId) => {
  try {
    const updatedCategory = await Categories.update(categoryData, {
      where: { id: categoryId },
    });
    return updatedCategory;
  } catch (err) {
    return err;
  }
};

// Delete category by id
exports.deleteCategoryById = async (categoryId) => {
  try {
    await Categories.destroy({ where: { id: categoryId } });
  } catch (err) {
    return err;
  }
};

exports.getCategories = () => {
  return Categories.findAll({ order: [["id", "DESC"]] });
};

exports.createCategory = async (name, description) => {
  try {
    const newCategory = await Categories.create({ name, description });
    return newCategory;
  } catch (err) {
    return err;
  }
};
