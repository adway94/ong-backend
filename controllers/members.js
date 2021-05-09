const membersQuery = require("../querys/members");
const consts = require("../constant/const");
const { validationResult } = require("express-validator");
const uploadImage = require("../services/aws/s3UploadImage");

exports.getMembers = async (req, res) => {
  try {
    const members = await membersQuery.getAllMembers();

    if (members) {
      return res.json({
        data: members,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: err.message,
      data: {},
    });
  }
};

exports.createMember = (req, res) => {
  console.log(req.body.name);
  if (!req.body.name) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.MISING_FIELDS });
  } else {
    const member = {
      name: req.body.name,
    };
    if (typeof req.body.image === typeof consts.STRING_TYPE) {
      member["image"] = "";
      membersQuery
        .createMember(member, req.params.id)
        .then((dataMember) => {
          if (dataMember.length == consts.ARRAY_ENPTY) {
            throw new Error(consts.NOT_FOUND_USER);
          }
          res.status(consts.code_success).json(dataMember);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    } else {
      uploadImage(req, (img) => {
        member["image"] = img;
        console.log(img);
        membersQuery
          .createMember(member, req.params.id)
          .then((dataMember) => {
            if (dataMember.length == consts.ARRAY_ENPTY) {
              throw new Error(consts.NOT_FOUND_USER);
            }
            res.status(consts.code_success).json(dataMember);
          })
          .catch((err) => {
            res.status(consts.code_failure).send({ Error: err.message });
          });
      });
    }
  }
};

exports.updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, image } = req.body;
  try {
    const member = await membersQuery.updateMember(res, id, name, image);
    if (member) {
      return res.json({
        message: consts.UPDATED_MEMBER,
        data: member,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: err.message,
      data: {},
    });
  }
};

exports.deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await membersQuery.deleteMember(res, id);
    if (member) {
      return res.json({
        message: consts.DELETED_MEMBER,
      });
    }
  } catch (err) {
    res.status(consts.code_failure).json({
      message: err.message,
    });
  }
};
