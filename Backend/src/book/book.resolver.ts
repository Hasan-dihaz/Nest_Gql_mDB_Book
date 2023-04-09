import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.model';
import { Bookid, CreateBookInput, UpdateBookInput } from './book.input';
import { BookService } from './book.service';

//!=================================
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { join } from 'path';

// import { Resolver, Mutation, Args } from '@nestjs/graphql';
// import { FileUpload, GraphQLUpload } from 'graphql-upload';
// import * as multer from 'multer';

//!===============================================
// // Create a multer storage instance to define where to save the uploaded files
// const storage = multer.diskStorage({
//   destination: './uploads',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // Create a multer upload instance with the storage options
// const upload = multer({ storage });
//!================================================

@Resolver()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async fetchAllBook(): Promise<any> {
    return await this.bookService.readAll();
  }

  //!=======================================
  @Mutation(() => Boolean)
  async createBookInput(
    // @Args('_id') _id: string,
    @Args('createBookInputDto') createBookInputDto: CreateBookInput,
  ): Promise<Book> {
    const { name, authorId, publisher, publishedYear, image } =
      createBookInputDto;
    // console.log(image);
    const { filename, mimetype, encoding, createReadStream } = await image;
    //console.log(filename, mimetype, encoding, createReadStream);

    const ReadStream = createReadStream();
    console.log(__dirname);
    const newFilename = `${Date.now()}-${filename}`;
    let savePath = join(__dirname, '..', '..', 'uploads', newFilename);
    console.log(savePath);
    const writeStream = await createWriteStream(savePath);
    await ReadStream.pipe(writeStream);
    const baseUrl = process.env.BASE_URL;
    const port = process.env.PORT;
    savePath = `${baseUrl}${port}\\${newFilename}`;
    console.log('+================', savePath);
    return await this.bookService.create(
      name,
      authorId,
      publisher,
      publishedYear,
      image: savePath,
    );
  }
  // //!=======================================
  //!=======================================

  // @Mutation(() => Boolean)
  // async uploadFile(
  //   @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  // ): Promise<boolean> {
  //   const { createReadStream, filename } = file;
  //   const stream = createReadStream();

  //   // Here you can process the file stream as needed (e.g. save it to a database, send it to another API, etc.)

  //   return true;
  // }

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
