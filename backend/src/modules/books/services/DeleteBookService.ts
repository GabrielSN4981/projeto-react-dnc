import AppError from "@shared/errors/AppError.js";
import { booksRepositories } from "../database/repositories/BooksRepositories.js";

interface IDeleteBook {
  id: number;
}

export default class DeleteBookService {
  async execute({ id }: IDeleteBook): Promise<void> {
    const book = await booksRepositories.findByID(id);

    if (!book) {
      throw new AppError("Book not found", 404);
    }

    await booksRepositories.remove(book);
  }
}
