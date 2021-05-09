const express = require("express");
const router = express.Router();
const activitiesController = require("../controllers/activities");
const consts = require("../constant/const");
const multer = require("multer");

router.post(
  "/",
  multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
  activitiesController.postActivities
);

//Update one activity by id
router.patch(
  "/:id",
  multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
  activitiesController.updateActivity
);

router.get(consts.URL_GET_ACTIVITIES, activitiesController.getActivities);

router.get(consts.URL_GET_BY_ID_ACTIVITIES, activitiesController.getActivity);

//Delete one activity
router.delete("/:id", activitiesController.deleteOneActivity);

router.delete("/:id", activitiesController.deleteOneActivity);

module.exports = router;
