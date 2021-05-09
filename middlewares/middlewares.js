const middlewares = (req, res, next) => {

  isAdmin = (user) => {
    if (user.roleId === 1) return next();
    res.redirect('/');
  }
}

module.exports = middlewares;