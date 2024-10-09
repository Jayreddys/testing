import express from "express";
import { getTrendingTv, getTvTrailers, getTvDetails, getSimilarTv, getTvByCategories } from "../controller/tv.controller.js";

const router = express.Router();

router.get('/trending', getTrendingTv);
router.get('/:id/trailers', getTvTrailers);
router.get('/:id/details', getTvDetails);
router.get('/:id/similar', getSimilarTv);
router.get('/:category', getTvByCategories);

export default router;