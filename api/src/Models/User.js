const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "default.jpg",
    },
    online: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING,
    },
    password_virtual:{
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        len:{
          args: [6,30],
          msg: 'invalid password'
        }
      }
    },
    rol: {
      type: DataTypes.ENUM("admin", "client"),
      defaultValue:"client"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          msg: 'invalid email'
        }
      }
    },
    resetCode: {
      type: DataTypes.STRING,
      unique: true
  },
  });
};
