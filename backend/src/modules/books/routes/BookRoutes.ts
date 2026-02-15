import { Router } from "express";
import BooksControllers from "../controllers/BooksControllers.js";
import {
  createBookSchema,
  idParamsValidation,
  updateBookSchema,
} from "../schemas/BookSchemas.js";

const booksRouter = Router();
const booksControllers = new BooksControllers();

booksRouter.get("/", booksControllers.index);
booksRouter.get("/:id", idParamsValidation, booksControllers.show);
booksRouter.post("/", createBookSchema, booksControllers.create);
booksRouter.put("/:id", updateBookSchema, booksControllers.update);
booksRouter.delete("/:id", idParamsValidation, booksControllers.delete);

export default booksRouter;
