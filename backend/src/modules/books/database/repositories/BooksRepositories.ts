import { AppDataSource } from "@shared/typeorm/data-source.js";
import { Book } from "../entities/Book.js";

export const booksRepositories = AppDataSource.getRepository(Book).extend({
  async findByID(id: number): Promise<Book | null> {
    return this.findOneBy({ id });
  },

  async findByTitle(title: string): Promise<Book | null> {
    return this.findOneBy({ title });
  },

  async findByISBN(isbn: string): Promise<Book | null> {
    return this.findOneBy({ isbn });
  },
});
