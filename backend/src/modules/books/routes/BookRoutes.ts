import { Router } from "express";
import BooksControllers from "../controllers/BooksControllers.js";

const booksRouter = Router();
const booksControllers = new BooksControllers();

booksRouter.get("/", booksControllers.index);
booksRouter.get("/:id", booksControllers.show);
booksRouter.post("/", booksControllers.create);
booksRouter.put("/:id", booksControllers.update);
booksRouter.delete("/:id", booksControllers.delete);

export default booksRouter;
