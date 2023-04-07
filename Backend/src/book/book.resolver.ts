import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.model';
import { Bookid, CreateBookInput, UpdateBookInput } from './book.input';
import { BookService } from './book.service';

//!=================================
import { GraphQLUpload, Upload } from 'graphql-upload';
import { createWriteStream } from 'fs';

@Resolver()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async fetchAllBook(): Promise<any> {
    return await this.bookService.readAll();
  }

  //!=======================================
  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );
  }
  //!=======================================

  @Mutation(() => Book)
  async createBook(@Args('input') input: CreateBookInput) {
    return await this.bookService.create(input);
  }

  @Mutation(() => Book)
  async findBookById(@Args('bookid') bookid: Bookid) {
    return await this.bookService.readById(bookid._id);
  }

  @Mutation(() => Book)
  async updateBook(@Args('updateBook') updateBook: UpdateBookInput) {
    return await this.bookService.update(updateBook);
  }

  @Mutation(() => Book)
  async deleteBook(@Args('bookid') bookid: Bookid) {
    return await this.bookService.delete(bookid._id);
  }
}
