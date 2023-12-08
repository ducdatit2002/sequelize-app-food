const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  return sequelize.define(
    "Foods",
    {
      foodId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "food_id",
      },
      foodName: {
        type: DataTypes.STRING,
        field: "food_name",
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "type_id"
      }
    },
    {
      tableName: "foods",
      timestamps: false,
    }
  );
};
