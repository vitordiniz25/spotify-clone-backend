import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYou,
  getTrendingSongs,
} from "../controller/song.controller.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/made-for-you", getMadeForYou);
router.get("/trending", getTrendingSongs);

export default router;
