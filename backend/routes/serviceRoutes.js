import express from "express";
import {
  test
} from "../controllers/serviceController.js";

const router = express.Router();

router
  .route("/")
  .get(test)

export default router;