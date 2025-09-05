import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./db/db.js";
import router from "./routes/transections.js";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());


app.use("/api/v1", router);

const PORT = process.env.PORT ;

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Server Started at port:", PORT);
  });
};

server();
