import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { getEnv } from "./common/helpers/helpers.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${getEnv("APP_PORT")}!`);
});

app.use(`${getEnv("API_PREFIX")}/user`, userRouter);
app.use(`${getEnv("API_PREFIX")}/auth`, authRouter);
