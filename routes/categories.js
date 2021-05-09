const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");
const consts = require("../constant/const");

// Update categories endpoint
router.put(consts.URL_CATEGORIES_UPDATE, categoriesController.categoriesUpdate);

// Delete categories endpoint
router.delete(
  consts.URL_CATEGORIES_DELETE,
  categoriesController.categoriesDelete
);
// Get all categories
router.get(consts.URL_CATEGORIES_GET, categoriesController.getCategories);

router.get("/:id", categoriesController.getACategories);

// Create a category
router.post(
  consts.URL_CATEGORIES_POST,
  categoriesController.categoriesValidationRules(),
  categoriesController.validate,
  categoriesController.createCategory
);

router.patch(
  consts.URL_CATEGORIES_UPDATE,
  categoriesController.categoriesUpdatePatch
);

module.exports = router;
