const testimonialsQuery = require("../querys/testimonials");
var consts = require("../constant/const");
const uploadImage = require("../services/aws/s3UploadImage");

exports.createTestimonials = (req, res) => {
  if (!req.body.name || !req.body.content) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.MISING_FIELDS });
  } else {
    const testimonial = {
      name: req.body.name,
      content: req.body.content,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      testimonial["image"] = "";
      testimonialsQuery
        .createTestimonial(testimonial)
        .then((dataTestimonial) => {
          if (dataTestimonial.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataTestimonial);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    } else {
      uploadImage(req, (img) => {
        testimonial["image"] = img;
        testimonialsQuery
          .createTestimonial(testimonial, req.params.id)
          .then((dataTestimonial) => {
            if (dataTestimonial.length == consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(dataTestimonial);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({ Error: err.message });
          });
      });
    }
  }
};

exports.updateTestimonials = (req, res) => {
  if (!req.params.id) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.NOT_FOUND_USER });
  } else {
    const testimonial = {
      name: req.body.name,
      content: req.body.content,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      testimonial["image"] = req.body.image;
      testimonialsQuery
        .updateTestimonial(testimonial, req.params.id)
        .then((dataTestimonial) => {
          if (dataTestimonial.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataTestimonial);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    } else {
      uploadImage(req, (img) => {
        testimonial["image"] = img;
        testimonialsQuery
          .updateTestimonial(testimonial, req.params.id)
          .then((dataTestimonial) => {
            if (dataTestimonial.length == consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(dataTestimonial);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({ Error: err.message });
          });
      });
    }
  }
};

exports.getOneTestimonial = (req, res) => {
  testimonialsQuery
    .getOneTestimonial(req.params.id)
    .then((oneTestimonial) => {
      res.status(consts.code_success).json(oneTestimonial);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllTestimonial = (req, res) => {
  testimonialsQuery
    .getAllTestimonial(req.params.id)
    .then((testimonials) => {
      res.status(consts.code_success).json(testimonials);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteOneTestimonial = (req, res) => {
  testimonialsQuery
    .deleteOneTestimonial(req.params.id)
    .then((testimonials) => {
      if (!testimonials.succes) {
        throw new Error(consts.NOT_FOUND_USER);
      }
      res.status(consts.code_success).json(testimonials);
    })
    .catch((err) => {
      res.status(consts.FORBIDDEN_ACTION_CODE).json({ Error: err.message });
    });
};
