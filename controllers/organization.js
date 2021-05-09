const orgQuery = require('../querys/organizations');
var consts = require('../constant/const');

exports.getOrganization = (req, res, next) => {
    const orgId = req.params.id;
    
    orgQuery.getOrganization(orgId).then(org => {
        res.status(consts.code_success).send(org);
    }).catch(err => res.status(consts.code_failure).send({message: err.message}));
};

//fd