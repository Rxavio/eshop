import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js"
import users from "./data/users.js"

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
  });

app.get("/api/products", (req, res) => {
res.json(products);
});

app.get("/api/users", (req, res) => {
    res.json(users);
    });


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
