import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
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

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started on port ${process.env.APP_PORT}!`);
});

app.use(`${process.env.API_PREFIX}/user`, userRouter);
