import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.model';
import { Bookid, CreateBookInput, UpdateBookInput } from './book.input';
import { BookService } from './book.service';

//!================================================
import { createWriteStream, unlink } from 'fs';
import { join } from 'path';
//!================================================

@Resolver()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async fetchAllBook(): Promise<any> {
    return await this.bookService.readAll();
  }

  @Query(() => Book)
  async findBookById(@Args('bookid') bookid: Bookid) {
    return await this.bookService.readById(bookid._id);
  }

  //!==============================================
  @Mutation(() => Book)
  async createBookInput(
    @Args('createBookInputDto') createBookInputDto: CreateBookInput,
  ): Promise<Book> {
    const { name, author, publisher, publishedYear, image } =
      createBookInputDto;

    // const { filename, mimetype, encoding, createReadStream } = await image;
    const { filename, createReadStream } = await image;
    //console.log(filename, mimetype, encoding, createReadStream);

    const ReadStream = createReadStream();
    console.log(__dirname);
    const newFilename = `${Date.now()}-${filename}`;
    const savePath = join(__dirname, '..', '..', 'uploads', newFilename);
    // const Path = join(__dirname, '..', '..', 'uploads', newFilename);
    const writeStream = createWriteStream(savePath);
    await ReadStream.pipe(writeStream);
    console.log('+================', savePath);
    return await this.bookService.create({
      name,
      author,
      publisher,
      publishedYear,
      image: `uploads\\${newFilename}`,
    });
  }
  // @Mutation(() => Book)
  // async createBook(@Args('input') input: CreateBookInput) {
  //   return await this.bookService.create(input);
  // }

  @Mutation(() => Book)
  async updateBook(@Args('updateBook') updateBook: UpdateBookInput) {
    return await this.bookService.update(updateBook);
  }

  @Mutation(() => Book)
  async deleteBook(@Args('bookid') bookid: Bookid) {
    //!===============================================
    const book = await this.bookService.readById(bookid._id);
    console.log('book......', book.image);
    // using the unlink method to delete file from uploads directory
    unlink(book.image, (err) => {
      if (err) throw err;
      console.log('File deleted');
    });
    //!===============================================
    return await this.bookService.delete(bookid._id);
  }
}
