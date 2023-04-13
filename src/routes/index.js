import { Router } from "express";
import CDNRouter from "./CDNRouter.js";

const router = Router();

router.use("/cdn", CDNRouter);

export default router;
