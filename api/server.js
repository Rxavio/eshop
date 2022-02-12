import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
  });


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
