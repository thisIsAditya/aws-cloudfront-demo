/**
 * Module Import
 */
import { Router } from "express";

import { getMediaLink } from "../controllers/cdn-controller/index.js";

const router = Router();

router.route("/").get(getMediaLink);
router.route("/:mediaName").get(getMediaLink);

export default router;
