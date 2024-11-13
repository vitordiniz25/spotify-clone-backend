import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkAdmin } from "../controller/admin.controller.js";

import { getStatus } from "../controller/stat.controller.js";

const router = Router();

router.get("/", protectRoute, checkAdmin, getStatus);

export default router;
