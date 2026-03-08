
import express from "express";
import {
getPendingProviders,
approveProvider,
rejectProvider
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/pending-providers", getPendingProviders);

router.put("/approve-provider/:id", approveProvider);

router.put("/reject-provider/:id", rejectProvider);

export default router;