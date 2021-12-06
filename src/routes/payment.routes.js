import { Router } from "express";
import {
  createOrder,
  captureOrder,
  cancelOrder,
} from "../controllers/payments.controller";

const router = Router();

router.post("/create-order", createOrder);
router.get("/capture-order", captureOrder);
router.get("/cancel-payment", cancelOrder);

export default router;
