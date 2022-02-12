import express from "express";
import dotenv from "dotenv";
import ImportData from "./DataImport.js";
import connectDatabase from "./config/MongoDb.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome to the e-shop api...");
  });
// API
app.use("/api/import", ImportData);  


const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
