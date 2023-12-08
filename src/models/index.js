const { Sequelize } = require("sequelize");
const likeRes = require("./LikeRes");


const sequelize = new Sequelize("restaurant_db", "root", "1234", {
    dialect: "mysql",
    host: "localhost",
    port: 3307,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Sequelize Connected");
    } catch (error) {
        console.log(("Sequelize Failed"), error);
    }
})();

//Khởi tạo models
const User = require("./User")(sequelize);
const Restaurant = require("./Restaurant")(sequelize);
const LikeRes = require("./LikeRes")(sequelize);
const RateRes = require("./rateRes")(sequelize);
const Order = require("./Order")(sequelize);
const Food = require("./Food")(sequelize);

// Xử lí like nhà hàng
User.belongsToMany(Restaurant,{
    as: "userLikesRestaurant",
    through: LikeRes,
    foreignKey: "userId",
});

Restaurant.belongsToMany(User, {
    as: "restaurantLikedUser",
    through: LikeRes,
    foreignKey: "resId"
})

// Xử lí rate nhà hàng
User.belongsToMany(Restaurant,{
    as: "userRatesRestaurant",
    through: RateRes,
    foreignKey: "userId",
});

Restaurant.belongsToMany(User, {
    as: "restaurantRatedUser",
    through: RateRes,
    foreignKey: "resId",
})

// User đặt món
User.belongsToMany(Food,{
    as: "userOrder",
    through: Order,
    foreignKey: "userId"
});

Food.belongsToMany(User, {
    as: "FoodOrdered",
    through: Order,
    foreignKey: "foodId"
})


module.exports = {
    sequelize,
    User,
    Restaurant,
    LikeRes,
    RateRes,
    Order,
    Food,
};