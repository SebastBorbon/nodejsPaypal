import express from "express";
import morgan from "morgan";
import paymentRoutes from "./routes/payment.routes";

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(paymentRoutes);

app.listen(port);
console.log("server on port", port);
