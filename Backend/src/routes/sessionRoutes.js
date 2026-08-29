import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createSession,
  activeSessions,
  recentSessions,
  sessionById,
  joinSession,
  endSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.get("/", protectRoute, createSession);
router.get("/active", protectRoute, activeSessions);
router.get("/recent", protectRoute, recentSessions);

router.get("/:id", protectRoute, sessionById);
router.post("/:id/join", protectRoute, joinSession);
router.post("/:id/end", protectRoute, endSession);

export default router;
