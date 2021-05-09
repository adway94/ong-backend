const { body, validationResult } = require("express-validator");
const activitiesQuery = require("../querys/activities");
const consts = require("../constant/const");
const uploadImage = require("../services/aws/s3UploadImage");

const activitiesValidationRules = () => {
  return [body("name").notEmpty(), body("content").notEmpty()];
};

const validate = (req, res, next) => {
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

const postActivities = (req, res, next) => {
  if (!req.body.name || !req.body.content) {
    res.status(consts.FORBIDDEN_ACTION_CODE).send({
      error: consts.MISING_FIELDS,
    });
  } else {
    const activity = {
      name: req.body.name,
      content: req.body.content,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      activity["image"] = "";
      activitiesQuery
        .createActivities(activity)
        .then((dataActivity) => {
          if (dataActivity.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataActivity);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({
            Error: err.message,
          });
        });
    } else {
      uploadImage(req, (img) => {
        activity["image"] = img;
        activitiesQuery
          .createActivities(activity, req.params.id)
          .then((dataActivity) => {
            if (dataActivity.length == consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(dataActivity);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({
              Error: err.message,
            });
          });
      });
    }
  }
};

const updateActivity = (req, res, next) => {
  if (!req.params.id) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.NOT_FOUND_USER });
  } else {
    const activity = {
      name: req.body.name,
      content: req.body.content,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      activity["image"] = req.body.image;
      activitiesQuery
        .updateActivity(activity, req.params.id)
        .then((activityData) => {
          if (activityData.length === consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(activityData);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    } else {
      uploadImage(req, (img) => {
        activity["image"] = img;
        activitiesQuery
          .updateTestimonial(activity, req.params.id)
          .then((activityData) => {
            if (activityData.length === consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(activityData);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({ Error: err.message });
          });
      });
    }
  }
};

const getActivities = (req, res, next) => {
  activitiesQuery
    .getActivities()
    .then((activities) => {
      res.status(consts.code_success).json(activities);
    })
    .catch((err) =>
      res.status(consts.code_failure).json({ message: err.message })
    );
};

const getActivity = (req, res, next) => {
  const activityId = req.params.id;
  activitiesQuery
    .getActivity(activityId)
    .then((activity) => {
      res.status(consts.code_success).send(activity);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

const deleteOneActivity = async (req, res) => {
  try {
    const activityDeleted = await activitiesQuery.deleteOneActivity(
      req.params.id
    );

    res.status(consts.code_success).json(activityDeleted);
  } catch (err) {
    res.status(consts.FORBIDDEN_ACTION_CODE).json({ Error: err.message });
  }
};


module.exports = {
  activitiesValidationRules,
  validate,
  postActivities,
  updateActivity,
  getActivities,
  getActivity,
  deleteOneActivity,
};
