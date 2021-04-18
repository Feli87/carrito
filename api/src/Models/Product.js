const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    ofert: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0,
    },
    overcome: {
      type: DataTypes.ENUM("can", "glass-bottle", "plastic-bottle", "barrel"),
      defaultValue:"can"
    },
    amount:{
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0,
    },
    measure: {
      type: DataTypes.ENUM("ml", "l", "cm3"),
      defaultValue:"ml"
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"default.jpg"
    },
  });
};
