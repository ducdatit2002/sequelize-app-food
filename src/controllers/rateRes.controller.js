const { response } = require("../helpers/response");
const rateResService = require("../services/rateRes.service");

const createRate = () => {
  return async (req, res, next) => {
    try {
      const { resId } = req.params;
      const data = req.body;
      const createdRate = await rateResService.createRate(resId, data);

      res.status(200).json(response(createdRate));
    } catch (error) {
      // res.status(500).json({ error: error });
      next(error);
    }
  };
};

const getRateByUser = () => {
  return async (req, res, next) => {
    try {
      const { userId } = req.params;
      const getRatedByUser = await rateResService.getRateByUser(userId);

      res.status(200).json(response(getRatedByUser));
    } catch (error) {
      // res.status(500).json({ error: error });
      next(error);
    }
  };
};

const getRateByRes = () => {
  return async (req, res, next) => {
    try {
      const { resId } = req.params;
      const getRatedByRes = await rateResService.getRateByRes(resId);
      res.status(200).json(response(getRatedByRes));
    } catch (error) {
      // res.status(500).json({error: error});
      next(error);
    }
  };
};

module.exports = {
  createRate,
  getRateByUser,
  getRateByRes,
};
