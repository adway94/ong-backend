const multer = require("multer");
const express = require("express");
const router = express.Router();
const uploadImage = require("./s3UploadImage");

router.post(
  "/upload",
  multer({ dest: "temp/" }).single("image"),
  function (req, res) {
    uploadImage(req, (imgUrl) => {
      console.log(imgUrl);
      res.end();
    });
  }
);

module.exports = router;
