import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Book, BookDocument } from 'src/book/entities/book.model';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private bookModel: Model<BookDocument>) {}
  async create(book: Book): Promise<Book> {
    console.log('book', book);
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async readAll(): Promise<Book[]> {
    return await this.bookModel.find().populate('authorId').exec();
  }

  async readById(id): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async update(book): Promise<Book> {
    const id = new mongoose.Types.ObjectId(book.id);
    return await this.bookModel.findByIdAndUpdate(id, book, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
