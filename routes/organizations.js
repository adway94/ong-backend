var express = require('express');
var router = express.Router();

var orgController = require('../controllers/organization');
var consts = require('../constant/const');

/* GET organization by ID. */
router.get(consts.url_org, orgController.getOrganization);

module.exports = router;