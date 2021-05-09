const express = require("express");
const router = express.Router();
const multer = require("multer");
const testimonialsController = require("../controllers/testimonials");
const consts = require("../constant/const");

//Create new Testimonial
  router.post(
    "/",
    multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
    testimonialsController.createTestimonials
  )

//Update one testimonial by id
router.patch(
  "/:id",
  multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
  testimonialsController.updateTestimonials
);

//Get one testimonial by id
router.get("/:id", testimonialsController.getOneTestimonial);

//Get all testimonials
router.get("/", testimonialsController.getAllTestimonial);

//Delete one testimonial
router.delete("/:id", testimonialsController.deleteOneTestimonial);

module.exports = router;
