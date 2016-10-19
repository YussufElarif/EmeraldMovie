function logout(req, res, next){
  if (!req.session.token){
    res.status("500").json({message: "error logging out"});
    next();
  } else {
    req.session.destroy();
    res.json({message: "success"});
  }
}

module.exports = logout
