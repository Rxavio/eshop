import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";
import { isAdmin, protect } from "./../Middleware/AuthMiddleware.js";


const productRoute = express.Router();
// GET ALL PRODUCT
productRoute.get(
  "/all",
  protect,
  isAdmin,
  asyncHandler(async (req, res) => {
    // const products = await Product.find({ })
    const products = await Product.find({ }).sort({ _id: -1 });
    res.json(products);
  })
);
// GET SINGLE PRODUCT
productRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product not Found");
      }
    })
  );


  // DELETE PRODUCT
productRoute.delete(
  "/:id",
  protect,
  isAdmin,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// CREATE PRODUCT
productRoute.post(
  "/",
  protect,
  isAdmin,
  asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock } = req.body;
    const productExist = await Product.findOne({ name });
    if (productExist) {
      res.status(400);
      throw new Error("Product name already exist");
    } else {
      const product = new Product({
        name,
        price,
        description,
        image,
        countInStock,
        user: req.user._id,
      });
      if (product) {
        const createdproduct = await product.save();
        res.status(201).json(createdproduct);
      } else {
        res.status(400);
        throw new Error("Invalid product data");
      }
    }
  })
);

export default productRoute;
