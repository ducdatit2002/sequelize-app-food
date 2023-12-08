const { response } = require("../helpers/response");
const ordersService = require("../services/orders.service");

const order = () => {
  return async (req, res, next) => {
    try {
      const {foodId} = req.params;
      const data = req.body;
      
      const ordered = await ordersService.order(foodId, data)

      res.status(200).json(response(ordered));
    } catch (error) {
      // res.status(500).json({ error: error });
      next(error);
    }
  };
};

module.exports = {
  order,
}