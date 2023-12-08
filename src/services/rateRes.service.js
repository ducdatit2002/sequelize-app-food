const { AppError } = require("../helpers/error");
const { User, Restaurant, RateRes } = require("../models");


const createRate = async(resId, data) => {
    try {
        const restaurant = await Restaurant.findByPk(resId);
        if(!restaurant){
            throw new AppError(400, "Restaurant not found");
        }

        const user = await User.findByPk(data.userId);
        if(!user){
            throw new AppError(400, "User not found");
        }

        await restaurant.addRestaurantRatedUser(user.userId,{through: {amount: data.amount}});
        // await RateRes.create({...data, resId});

        return null;
    } catch (error) {
        throw error;
    }
}


const getRateByUser = async (userId) => {
    try {
        const user = await User.findOne({ where : { userId }});

        if(!user){
            throw new AppError(400, "User Not Found");
        }

        const data = await User.findOne({
            where: {
                userId
            },
            include: "userRatesRestaurant",
        })

        return data;
    } catch (error) {
        throw error;
    }
}

const getRateByRes = async (resId) => {
    try {

        const restaurant = await Restaurant.findOne({ where : { resId }});

        if(!restaurant){
            throw new AppError(400, "Restaurant not found");
        }

        const data = await Restaurant.findOne({
            where: {
                resId,
            },
            include: "restaurantRatedUser",
        })

        return data
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createRate,
    getRateByUser,
    getRateByRes,
}