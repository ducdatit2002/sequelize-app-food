const {  User, Restaurant } = require("../models");
const { AppError } = require("../helpers/error");

const likedRes = async (userId, resId) => {
  try {
    const restaurant = await Restaurant.findByPk(resId);

    if (!restaurant) {
      // throw new Error(400, "restaurant not found");
      throw new AppError(400, "Restaurant not found");
    }

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error(400, "User not found");
      // throw new AppError(400, "user not found");
    }
    
    // console.log(restaurant.__proto__);

    const hasliked = await restaurant.hasRestaurantLikedUser(user.userId);
    // console.log(hasliked);
    
    if (hasliked) {
      await restaurant.removeRestaurantLikedUser(userId);
    } else {
      await restaurant.addRestaurantLikedUser(userId);
    }

    return null;
  } catch (error) {
    throw error;
  }
};



const getLikeResByUser = async (userId) => {
  try {
    const user = await User.findOne({ where: { userId } });

    if (!user) {
      throw new AppError(400, "User not found");
    }

    const likedRes = User.findOne({
      where: {
        userId: userId,
      },
      include: "userLikesRestaurant",
    });

    return likedRes;
  } catch (error) {
    throw error;
    // throw new AppError(500, "Something went wrong with DB");
  }
};

const getLikeResByRes = async (resId) => {
  try {
    const restaurant = await Restaurant.findOne({ where: { resId } });

    if (!restaurant) {
      throw new AppError(400, "Restaurant not found");
    }
    const likedRes = Restaurant.findOne({
      where: {
        resId: resId,
      },
      include: "restaurantLikedUser",
    });

    return likedRes;
  } catch (error) {
    throw error;
    // throw new AppError(500, "Something went wrong with DB");
  }
};

module.exports = {
    likedRes,
  getLikeResByUser,
  getLikeResByRes,
};
