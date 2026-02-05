import type { Request, Response } from "express";
import ListBookService from "../services/ListBookService.js";
import ShowBookService from "../services/ShowBookService.js";
import CreateBookService from "../services/CreateBookService.js";
import UpdateBookService from "../services/UpdateBookService.js";
import DeleteBookService from "../services/DeleteBookService.js";

export default class BooksControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listBooksService = new ListBookService();
    const books = await listBooksService.execute();
    return response.json(books);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showBooksService = new ShowBookService();
    const books = await showBooksService.execute({ id: Number(id) });
    return response.json(books);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title, num_pages, isbn, publisher } = request.body;
    const createBookService = new CreateBookService();
    const book = await createBookService.execute({
      title,
      num_pages,
      isbn,
      publisher,
    });
    return response.json(book);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, num_pages, isbn, publisher } = request.body;
    const updateBookService = new UpdateBookService();
    const book = await updateBookService.execute({
      id: Number(id),
      title,
      num_pages,
      isbn,
      publisher,
    });
    return response.json(book);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteBookService = new DeleteBookService();
    await deleteBookService.execute({ id: Number(id) });
    return response.status(204).send([]);
  }
}
