import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bookRoute from "./routes/bookRoute.js"

dotenv.config();

const app = express();
app.use(express.json());

const DATABASE_URL = "mongodb+srv://christmb017:s4CRuSlfVfmo2YEC@cluster0.pwv1w.mongodb.net/crud_ts?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DATABASE_URL, {
    dbName: "crud_ts",
}).then(() => {
    console.log("MongoDB is connected!");
}).catch((error) => {
    console.log(error);
});

// Route principale
app.get("/", (req, res) => {
    res.send("API is working");
  });
  

app.use("/api/book", bookRoute)

app.listen(9000, () => {
    console.log("Server is running!");
});
