import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js"
import users from "./data/users.js"
import connectDatabase from "./config/MongoDb.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
  });

//all products
app.get("/api/products", (req, res) => {
res.json(products);
});

//single product
// app.get("/api/products/:id", (req, res) => {
//     const product=products.find((p) => p._id === req.params.id);
//     console.log(product);
//     res.json(product);
//     });


app.get("/api/products/:id",(req, res) => {
    const id = Number(req.params.id)
    const product = products.find(product => product._id === id)
        if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})    

//all users
app.get("/api/users", (req, res) => {
    res.json(users);
    });


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
