import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from 'src/schemas/book.schema';
import { Bookid, CreateBookInput, UpdateBookInput } from './book.input';
import { BookService } from './book.service';

@Resolver()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book])
  async fetchAll(): Promise<any> {
    return await this.bookService.readAll();
  }

  @Mutation((returns) => Book)
  async createBook(@Args('input') input: CreateBookInput) {
    return await this.bookService.create(input);
  }

  @Mutation((returns) => Book)
  async findById(@Args('bookid') bookid: Bookid) {
    return await this.bookService.readById(bookid.id);
  }

  @Mutation((returns) => Book)
  async update(@Args('updateBook') updateBook: UpdateBookInput) {
    return await this.bookService.update(updateBook);
  }

  @Mutation((returns) => Book)
  async delete(@Args('bookid') bookid: Bookid) {
    return await this.bookService.delete(bookid.id);
  }
}
