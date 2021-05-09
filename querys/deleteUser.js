const db = require("../models");
const User = db.User;
const constant = require("../constant/const");

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    console.log(user);
    if (!user) {
      return res
        .status(constant.CODE_FAILURE_404)
        .send(constant.NOT_FOUND_USER);
    } else {
      await user.destroy();
      res.send(constant.code_success);
    }
  } catch (err) {
    res.json(err);
  }
};
