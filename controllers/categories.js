const { body, validationResult } = require("express-validator");
const consts = require("../constant/const");
const categoriesQuery = require("../querys/categories");

// Validators
exports.categoriesValidationRules = () => {
  return [
    body("name").notEmpty().isString(),
    body("description").notEmpty().isString(),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

// Categories UPDATE
exports.categoriesUpdate = async (req, res, next) => {
  const categoryId = req.params.id;
  const newCategoryData = req.body;

  try {
    const categoryInDataBase = await categoriesQuery.getCategoryById(
      categoryId
    );

    if (categoryInDataBase) {
      await categoriesQuery.updateCategoryById(newCategoryData, categoryId);
      res.status(consts.code_success).send(consts.SUCCESS_CATEGORY_UPDATE);
    } else
      res.status(consts.code_failure).send(consts.ERROR_CATEGORIES_NOT_FOUND);
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_UPDATE_CATEGORIES);
  }
};

// Categories UPDATE Whith PATCH

exports.categoriesUpdatePatch = async (req, res, next) => {
  const categoryId = req.params.id;
  const newValue = req.body;
  try {
    const categoryInDataBase = await categoriesQuery.getCategoryById(
      categoryId
    );

    if (categoryInDataBase) {
      await categoriesQuery.updateCategoryById(newValue, categoryId);
      res.status(consts.code_success).send(consts.SUCCESS_CATEGORY_UPDATE);
    } else
      res.status(consts.code_failure).send(consts.ERROR_CATEGORIES_NOT_FOUND);
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_UPDATE_CATEGORIES);
  }
};

// Categories DELETE

exports.categoriesDelete = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryInDataBase = await categoriesQuery.getCategoryById(
      categoryId
    );

    if (categoryInDataBase) {
      await categoriesQuery.deleteCategoryById(categoryId);
      res.status(consts.code_success).send(consts.SUCCESS_CATEGORY_DELETE);
    } else
      res.status(consts.code_failure).send(consts.ERROR_CATEGORIES_NOT_FOUND);
  } catch (err) {
    res.status(consts.code_failure).send(consts.ERROR_DELETE_CATEGORIES);
  }
};

exports.getCategories = (req, res, next) => {
  categoriesQuery
    .getCategories()
    .then((categories) => {
      res.status(consts.code_success).send(categories);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

exports.getACategories = (req, res, next) => {
  categoriesQuery
    .getCategoryById(req.params.id)
    .then((categories) => {
      res.status(consts.code_success).send(categories);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

exports.createCategory = (req, res, next) => {
  categoriesQuery
    .createCategory(req.body.name, req.body.description)
    .then((result) => {
      res.status(consts.code_success).send(consts.SUCCESS_CATEGORY_CREATE);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};
