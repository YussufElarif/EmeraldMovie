function logout(req, res, next){
  // if (!req.session.token){
  //   res.status("500").send("Error loggin out");
  //   next();
  // } else {
  //   req.session.destroy();
  //   res.redirect("/login");
  // }
  console.log("logout")
}

module.exports = {
  post: logout
}
