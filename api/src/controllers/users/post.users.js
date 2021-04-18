const { User } = require("../../db");
const bcrypt = require('bcrypt');

module.exports = {

  addUser: async (user) => {    
    return await User.findOrCreate({
      where:{
        email:user.email
      }, 
      defaults:{
        name: user.name,
        email: user.email,
        password_virtual: user.password_virtual
      }
    }).then(user => user)
    .catch((error)=>{
      return error
    }); 
     
  },

  signIn: (email,password) =>{
    return User.findOne({ where: { email: email } }).then(async (user) => {
      if (user) {
        let result = await bcrypt.compare(password, user.password);
        if (result) {
          console.log('esto me trae el result',result)
          return { success: result, user };
        }
      }
    });
  }


}