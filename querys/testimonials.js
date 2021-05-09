const db = require("../models");
const Testimonials = db.Testimonials;
const consts = require("../constant/const");

exports.createTestimonial = async (testimonial) => {
  try {
    const newTestimonial = await Testimonials.create(testimonial);
    return newTestimonial;
  } catch (error) {
    console.log(error);
  }
};

exports.updateTestimonial = async (testimonial, testimonialId) => {
  try {
    const updateTestimonials = await Testimonials.update(testimonial, {
      where: { id: testimonialId },
    });
    testimonial = await Testimonials.findAll({
      where: { id: testimonialId },
    });
    return testimonial;
  } catch (error) {
    console.log(error);
  }
};

exports.getOneTestimonial = async (id) => {
  const oneTestimonial = await Testimonials.findAll({
    where: { id: id },
  });
  return oneTestimonial;
};

exports.getAllTestimonial = async () => {
  const allTestimonial = await Testimonials.findAll({
    order: [["id", "DESC"]],
  });
  return allTestimonial;
};

exports.deleteOneTestimonial = async (testimonialId) => {
  try {
    let testimonialDestroyed = await Testimonials.destroy({
      where: { id: testimonialId },
    });
    console.log(testimonialDestroyed);
    if (testimonialDestroyed === consts.DELETE_SUCCESS) {
      return { succes: consts.DELETE_SUCCESS_TEXT + testimonialId };
    } else {
      return testimonialDestroyed;
    }
  } catch (error) {
    console.log(error);
  }
};
