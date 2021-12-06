import express from "express";
import morgan from "morgan";
import paymentRoutes from "./routes/payment.routes";
import path from "path";

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(paymentRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port);
console.log("server on port", port);
