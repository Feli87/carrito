const { User } = require("../../db");

module.exports = {
    editUser: async (user, userId) => {
        try {
            return await User.update(user,{
                where:{
                id: userId
                } 
            }).then((user)=>{
                return user;
            })
        }
        catch (err) {
            res.status(400).json(err);
          };
    }
}