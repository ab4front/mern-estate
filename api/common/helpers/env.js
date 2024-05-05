import dotenv from "dotenv";
dotenv.config();

export const getEnv = (key) => process?.env[key] || "";
