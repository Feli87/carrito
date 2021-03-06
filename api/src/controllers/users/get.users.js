const {User} = require("../../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    findAllUsers() {
        return User.findAll(); 
      },

     findUserById(id) {
        return User.findByPk(id)
        .then((user)=>{
          if(user){
            return user
          }else{
            return "User Dont Exist"
          }
        }).catch((error)=>{
          return error
        });
      },
     findByEmail(email){
       return User.findOne({
         where:{
           email:email
         }
       }).then(user => {
         let userInfo = {
           id:user.id,
           name: user.name,
           email: user.email,
           rol: user.rol,
           subscription: user.subscription,
           online: user.online,
           freeBeats: user.freeBeats,
           image:user.image
         }
         return userInfo
       }).catch(err=>{err.message})
     },
     getUserByLetterIncludeInTheName: async (inputValue) => {
       console.log("en contoller", inputValue)
      return await User.findAll({
        where: {
          name: {
            [Op.iLike]: '%' + inputValue + '%'
          }
        }
      });
    },

};