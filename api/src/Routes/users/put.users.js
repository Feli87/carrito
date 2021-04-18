const server = require("express").Router();
const {editUser} = require("../../controllers/users/put.users");


server.put("/:userId", (req, res, next) => {

  let {name, email} =  req.body;
  let {userId} =  req.params;
  let user = {
    name: name,
    email: email,
  }

  return editUser(user,userId).then((user) => {
    res.status(200).json(user);
  }).catch((error) => {
    res.status(400).json(error);
  });
});

module.exports = server;