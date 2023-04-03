import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Auth, AuthorDocument } from 'src/author/entities/author.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Auth') private authorModel: Model<AuthorDocument>,
  ) {}
  async create(book): Promise<Auth> {
    const newBook = new this.authorModel(book);
    return await newBook.save();
  }

  async readAll(): Promise<Auth[]> {
    return await this.authorModel.find().exec();
  }

  async readById(id): Promise<Auth> {
    return await this.authorModel.findById(id).exec();
  }

  async update(book): Promise<Auth> {
    const id = new mongoose.Types.ObjectId(book.id);
    return await this.authorModel.findByIdAndUpdate(id, book, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.authorModel.findByIdAndRemove(id);
  }
}
