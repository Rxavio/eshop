import express from "express";
import dotenv from "dotenv";
import ImportData from "./DataImport.js";
import connectDatabase from "./config/MongoDb.js";
import productRoute from "./Routes/ProductRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
  });
// API
app.use("/api/import", ImportData);  
app.use("/api/products", productRoute);


const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
