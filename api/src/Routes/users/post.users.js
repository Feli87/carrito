const server = require("express").Router();
const {addUser} = require("../../controllers/users/post.users");

server.post("/",(req, res, next) => {
  let {name, email, password} =  req.body

  let user = {
    name: name,
    email: email, 
    password_virtual:password
  }
  return addUser(user).then((user) => {
    res.status(200).json(user);
  }).catch((error) => {
    res.status(400).json(error);
  });
});



module.exports = server;
