const { AppError } = require("../helpers/error");
const { User, Food } = require("../models");


const order = async (foodId,data) => {
    try {
        const user = await User.findByPk(data.userId);
        if(!user){
            throw new AppError(400, "User not found");
        }

        const food = await Food.findByPk(foodId);
        if(!food){
            throw new AppError(400, "Food not found");
        }

        console.log(user.__proto__);
        // await food.addFoodOrdered(user.userId,{through: data});
        await user.addUserOrder(foodId,{through: data})
        
        
        return null;
    } catch (error) {
        throw error
    }
};


module.exports = {
    order,
}