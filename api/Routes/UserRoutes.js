import express from "express";
import asyncHandler from "express-async-handler";
import User from "./../Models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../Middleware/AuthMiddleware.js";

const userRouter = express.Router();

// LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        // token: null,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

// REGISTER
userRouter.post(
    "/register",
    asyncHandler(async (req, res) => {
      const { name, email, password } = req.body;
  
      const userExists = await User.findOne({ email });
  
      if (userExists) {
        res.status(400);
        throw new Error("User already exists");
      }
  
      const user = await User.create({
        name,
        email,
        password,
      });
  
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("Invalid User Data");
      }
    })
  );

  // PROFILE
userRouter.get(
    "/profile",
    protect,
    asyncHandler(async (req, res) => {
        res.send("USER PROFILE");
      
    })
  );


export default userRouter;