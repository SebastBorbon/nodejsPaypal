import { Router } from "express";
import {
  createOrder,
  captureOrder,
  cancelOrder,
} from "../controllers/payments.controller";

const router = Router();

router.get("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("/cancel-order", cancelOrder);

export default router;
