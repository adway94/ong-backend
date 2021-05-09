const aws = require("aws-sdk");
const constant = require("../../constant/const");
const fs = require("fs");

const uploadImage = (req, res) => {
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: constant.AWS_ACCESS_KEY_ID,
    secretAccessKey: constant.AWS_SECRET_ACCESS_KEY,
    region: constant.AWS_REGION,
  });
  const s3 = new aws.S3();
  var params = {
    ACL: "public-read",
    Bucket: constant.AWS_BUCKET_NAME,
    Body: fs.createReadStream(req.file.path),
    Key: "image/" + Date.now() + req.file.originalname,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log("Error occured while trying to upload to S3 bucket", err);
      res.sendStatus(constant.code_failure);
    }
    if (data) {
      fs.unlinkSync(req.file.path); // Empty temp folder
      return res(data.Location);
    }
  });
};

module.exports = uploadImage;
