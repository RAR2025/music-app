import { Router } from "express";
import { getAllSongs, getFeaturedSongs, getmadeforyou, gettrending } from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const router = Router()
router.get('/' ,protectRoute, requireAdmin, getAllSongs);
router.get('/featured', getFeaturedSongs);
router.get('/madeforyou', getmadeforyou);
router.get('/trending', gettrending);
export default router