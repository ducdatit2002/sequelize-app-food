const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  return sequelize.define(
    "Restaurant",
    {
      resId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "res_id",
      },
      resName: {
        type: DataTypes.STRING,
        field: "res_name",
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: "restaurants",
      timestamps: false,
    }
  );
};

