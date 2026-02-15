import express from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import routes from "./routes/index.js";
import ErrorHandleMiddleware from "@shared/middleware/ErrorHandleMiddleware.js";
import { AppDataSource } from "@shared/typeorm/data-source.js";
import { errors } from "celebrate";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(routes);
    app.use(errors());
    app.use(ErrorHandleMiddleware.handleError);

    console.log("Connected to the database!");

    app.listen(3433, () => {
      console.log("Server running on port 3433!");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
