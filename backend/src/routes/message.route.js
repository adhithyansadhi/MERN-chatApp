import express from "express"
import router from "./auth.route.js"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages,getUsersForSidebar,sendMessage } from "../controllers/message.controller.js";


router.get("/users",protectRoute, getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)

router.post("/send/:id", protectRoute,sendMessage)

export default router