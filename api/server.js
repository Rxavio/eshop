import express from "express";
import dotenv from "dotenv";
import products from "./data/Products.js"

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
  });
  
app.get("/api/products", (req, res) => {
res.json(products);
});


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
