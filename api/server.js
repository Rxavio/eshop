import express from "express";
import dotenv from "dotenv";
import ImportData from "./DataImport.js";
import connectDatabase from "./config/MongoDb.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import products from "./data/products.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
 });

 app.get("/api/products", (req, res) => {
    res.json(products);
 });

// API
app.use("/api/import", ImportData);  
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
