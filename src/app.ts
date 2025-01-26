// external imports
import express from "express";
import  { Express } from "express";
import morgan from "morgan";

// internal imports
import setupSwagger from "../config/swagger";
import itemRoutes from "./api/v1/routes/itemRoutes";
import { timeStamp } from "console";


const app: Express = express();

setupSwagger(app);

app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
 */

app.get("/tasks", (req, res) => {
    res.send("Retrieved Tasks");
});

app.get("/api/v1/health", (req, res) =>{
    res.json ({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
});

app.use("/api/v1/items", itemRoutes);

export default app;