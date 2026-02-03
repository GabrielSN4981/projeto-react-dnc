import type { Book } from "../database/entities/Book.js";
import { booksRepositories } from "../database/repositories/BooksRepositories.js";

export default class ListBookService {
  async execute(): Promise<Book[]> {
    const books = await booksRepositories.find();
    return books;
  }
}
