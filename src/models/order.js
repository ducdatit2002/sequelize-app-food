const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  return sequelize.define(
    "Order",
    {
      // id: {
      //   type: DataTypes.VIRTUAL,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   get() {
      //     return `${this.userId}-${this.foodId}`;
      //   },
      // },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      foodId: {
        type: DataTypes.INTEGER,
        field: "food_id",
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrSubId: {
        type: DataTypes.STRING,
        field: "arr_sub_id",
      }
    },
    {
      tableName: "orders",
      timestamps: false,
    }
  );
};