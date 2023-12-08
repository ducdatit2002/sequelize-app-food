const likeResService = require('../services/likeRes.service');
const { response } =require("../helpers/response");

const likedRes = () => {
    return async (req, res, next) => {
        try {
            const { resId } = req.params;
            const { userId } = req.body;
            const createdLikeRes = await likeResService.likedRes(userId,resId);

            // res.status(200).json({data: createdLikeRes});
            res.status(200).json(response(createdLikeRes));

        } catch (error) {
            // res.status(500).json({error: error.message});
            next(error);
        }
    }
}


const getLikeResByUser = () => {
    return async (req, res, next) => {
        try {
            const { userId } = req.params;
            const likedResByUser = await likeResService.getLikeResByUser(userId);

            res.status(200).json(response(likedResByUser));
        } catch (error) {
            // res.status(500).json({error: error.message});
            
            next(error);

        }
    }
}

const getLikeResByRes = () => {
    return async (req, res, next) => {
        try {
            const { resId } = req.params;
            const likedResByRes = await likeResService.getLikeResByRes(resId);
            res.status(200).json(response(likedResByRes));
        } catch (error) {
            // res.status(500).json({error: error.message}); 
            next(error);
        }
    }
}


module.exports = {
    likedRes,
    getLikeResByUser,
    getLikeResByRes,
}